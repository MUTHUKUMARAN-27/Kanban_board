import React, { useState, useEffect, useContext, useReducer, createContext, useMemo, useRef } from "react";
import "./KanbanBoard.css";

const KanbanContext = createContext();

const initialState = {
  todo: [
    { id: "1", text: "Task A" },
    { id: "2", text: "Task B" },
    { id: "3", text: "Task C" },
    { id: "4", text: "Task D" }
  ],
  inProgress: [],
  done: []
};

function kanbanReducer(state, action) {
  switch (action.type) {
    case "MOVE_CARD": {
      const { card, from, to } = action.payload;
      if (from === to) return state;
      return {
        ...state,
        [from]: state[from].filter((c) => c.id !== card.id),
        [to]: [...state[to], card]
      };
    }
    case "ADD_TASK": {
      const newTask = { id: Date.now().toString(), text: action.payload.text };
      return {
        ...state,
        todo: [...state.todo, newTask]
      };
    }
    case "DELETE_CARD": {
      const { cardId, from } = action.payload;
      return {
        ...state,
        [from]: state[from].filter((card) => card.id !== cardId)
      };
    }
    case "EDIT_CARD": {
      const { cardId, from, newText } = action.payload;
      return {
        ...state,
        [from]: state[from].map((card) => card.id === cardId ? { ...card, text: newText } : card)
      };
    }
    default:
      return state;
  }
}

function KanbanProvider({ children }) {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <KanbanContext.Provider value={value}>{children}</KanbanContext.Provider>;
}

function TaskInput() {
  const { dispatch } = useContext(KanbanContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: { text } });
    setText("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add New task...✍️"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

function Card({ card, from }) {
  const { dispatch } = useContext(KanbanContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(card.text);

  const handleDoubleClick = () => setIsEditing(true);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "EDIT_CARD", payload: { cardId: card.id, from, newText: editedText } });
      setIsEditing(false);
    } else if (e.key === "Escape") {
      setEditedText(card.text);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    setEditedText(card.text);
    setIsEditing(false);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("card", JSON.stringify({ card, from }));
  };

  return (
    <div className="card" draggable={!isEditing} onDragStart={handleDragStart} onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          autoFocus
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      ) : (
        card.text
      )}
    </div>
  );
}

function Column({ title, columnKey }) {
  const { state, dispatch } = useContext(KanbanContext);
  const dropRef = useRef(null);

  useEffect(() => {
    const dropArea = dropRef.current;

    const handleDrop = (e) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("card"));
      dispatch({ type: "MOVE_CARD", payload: { card: data.card, from: data.from, to: columnKey } });
    };

    const handleTrashDrop = (e) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("card"));
      dispatch({
        type: "DELETE_CARD",
        payload: { cardId: data.card.id, from: data.from }
      });
    };

    dropArea.addEventListener("dragover", (e) => e.preventDefault());
    dropArea.addEventListener("drop", handleDrop);

    // Setup the trash bin drop zone
    const trashZone = document.querySelector(".trash-drop-zone");
    if (trashZone) {
      trashZone.addEventListener("dragover", (e) => e.preventDefault());
      trashZone.addEventListener("drop", handleTrashDrop);
    }

    return () => {
      dropArea.removeEventListener("drop", handleDrop);
      if (trashZone) {
        trashZone.removeEventListener("drop", handleTrashDrop);
      }
    };
  }, [dispatch, columnKey]);

  return (
    <div className="column" ref={dropRef}>
      <h2>{title}</h2>
      {state[columnKey].map((card) => (
        <Card key={card.id} card={card} from={columnKey} />
      ))}
    </div>
  );
}

function TrashDropZone() {
  return (
    <div className="trash-drop-zone">
      🗑️ <span>Trash Bin</span>
    </div>
  );
}

function KanbanBoard() {
  return (
    <div className="board-container">
      <h1>Kanban Board</h1>
      <TaskInput />
      <div className="columns-container">
        <Column title="To Do" columnKey="todo" />
        <Column title="In Progress" columnKey="inProgress" />
        <Column title="Done" columnKey="done" />
      </div>
      <TrashDropZone />
    </div>
  );
}

export default function App() {
  return (
    <KanbanProvider>
      <KanbanBoard />
    </KanbanProvider>
  );
}
