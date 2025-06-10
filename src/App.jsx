// import { useEffect, useReducer, useRef, useState } from 'react'
// import './App.css'


// function todoReducer(state ,action){

// }
// function App() {
//   const [input,setInput]=useState("");
//   const [filter,setFilter]=useState("all");
//   const [modalTodo,setModalTodo]=useState(null);
//   const [todo,dispatch]=useReducer(todoReducer,[]);
//   const inputRef=useRef(null);

//   useEffect(()=>{
//     inputRef.current,focus();
//   },[]);
 
//   const filteredTodos = todos.filter(todo => 
//   filter === "all" ? true : filter === "completed" ? todo.completed : !todo.completed
// );

// const handleAdd = () => {
//   if (input.trim()) {
//     dispatch({
//       type: "ADD",
//       payload: input
//     });
//     setInput("");
//   }
// };

//   return (
//     <>
//     <div>
//       <h1>Todo App</h1>
//       <div>
//         <input
//           ref={inputRef}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter Task"
//         />
//         <button>Add</button>
//       </div>
      // <div>
      //   <button onClick={()=>setFilter("all")}>All</button>
      //   <button onClick={()=>setFilter("active")}>Active</button>
      //   <button onClick={()=>setFilter("completes")}>Completed</button>
      // </div>
//       <ul>
//         {filteredTodos.map((todo) => (
//           <li key={todo.id}>
//              <span onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
//                {todo.text}
//              </span>
//              <div>
//                <button onClick={() => setModalTodo(todo)}>
//                  View
//                </button>
//                <button onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}>
//                  Delete
//                </button>
//              </div>
//            </li>
//         ))}
//       </ul>
//     </div>
//     </>
//   )
// }

// export default App
// import { useEffect, useReducer, useRef, useState } from 'react';
// import './App.css';
// import { Intro } from './Intro';
// import Book from './Book';
// import Count from './Count';

// function todoReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case "TOGGLE":
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case "REMOVE":
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function App() {
//   const [input, setInput] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [modalTodo, setModalTodo] = useState(null);
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const filteredTodos = todos.filter(todo =>
//     filter === "all" ? true : filter === "completed" ? todo.completed : !todo.completed
//   );

//   const handleAdd = () => {
//     if (input.trim()) {
//       dispatch({
//         type: "ADD",
//         payload: input
//       });
//       setInput("");
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>Todo App</h1>
//         <div>
//           <input
//             ref={inputRef}
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter Task"
//           />
//           <button onClick={handleAdd}>Add</button>
//         </div>
//         <div>
//           <button onClick={() => setFilter("all")}>All</button>
//           <button onClick={() => setFilter("active")}>Active</button>
//           <button onClick={() => setFilter("completed")}>Completed</button>
//         </div>
//         <ul>
//           {filteredTodos.map((todo) => (
//             <li key={todo.id}>
//               <span onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}>
//                 {todo.text}
//               </span>
//               <div>
//                 <button onClick={() => setModalTodo(todo)}>
//                   View
//                 </button>
//                 <button onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}>
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useEffect, useReducer, useRef, useState } from 'react';
// import './App.css';

// function todoReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { id: Date.now(), text: action.payload, completed: false }];
//     case "TOGGLE":
//       return state.map(todo =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//       );
//     case "REMOVE":
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function App() {
//   const [input, setInput] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [selectedTodo, setSelectedTodo] = useState(null);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   const filteredTodos = todos.filter(todo =>
//     filter === "all" ? true : filter === "completed" ? todo.completed : !todo.completed
//   );

//   const handleAdd = () => {
//     if (input.trim()) {
//       dispatch({
//         type: "ADD",
//         payload: input
//       });
//       setInput("");
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1 className="title">Todo App</h1>
//       <div className="input-group">
//         <input
//           ref={inputRef}
//           className="todo-input"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Enter task"
//         />
//         <button className="add-button" onClick={handleAdd}>Add</button>
//       </div>

//       <div className="filters">
//         <button
//           className={`filter-button ${filter === "all" ? "all-active" : ""}`}
//           onClick={() => setFilter("all")}
//         >
//           All
//         </button>
//         <button
//           className={`filter-button ${filter === "active" ? "active-active" : ""}`}
//           onClick={() => setFilter("active")}
//         >
//           Active
//         </button>
//         <button
//           className={`filter-button ${filter === "completed" ? "completed-active" : ""}`}
//           onClick={() => setFilter("completed")}
//         >
//           Completed
//         </button>
//       </div>

//       <ul className="todo-list">
//         {filteredTodos.map((todo) => (
//           <li key={todo.id} className="todo-item">
//             <span className={todo.completed ? "completed-text" : ""}>{todo.text}</span>
//             <div className="actions">
//               <button
//                 className="action-button"
//                 onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
//               >
//                 Mark as Completed
//               </button>
//               <button
//                 className="action-button"
//                 onClick={() => setSelectedTodo(todo)}
//               >
//                 View
//               </button>
//               <button
//                 className="action-button delete-button"
//                 onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {selectedTodo && (
//         <div className="task-detail">
//           <h3>Task Detail</h3>
//           <p>{selectedTodo.text}</p>
//           <p>Status: {selectedTodo.completed ? "Completed" : "Active"}</p>
//           <button
//             className="action-button"
//             onClick={() => setSelectedTodo(null)}
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import About from './About';
// import Contact from './Contact';
// import Navbar from './Navbar';
// import Home from './Home';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import { ThemeContext } from "./ThemeContext";
// import Dashboard from "./Dashboard";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   const themeStyles = {
//     backgroundColor: theme === "dark" ? "#1e1e2f" : "#f2f2f2",
//     minHeight: "100vh",
//     color: theme === "dark" ? "#fff" : "#000",
//     padding: "2rem",
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div style={themeStyles}>
//         <Dashboard />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');

//   return (
//     <div>
//       <div>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
//       </div>

//       <div>
//         <label>Age:</label>
//         <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
//       </div>

//       <div>
//         <p>Name: {name }</p>
//         <p>Age: {age }</p>
//       </div>
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import useToggle from './useToggle';
 
// const App = () => {
//   const [isVisible, toggleVisibility] = useToggle();
 
//   return (
//     <div>
//       <button onClick={toggleVisibility}>
//         {isVisible ? 'Hide' : 'Show'}
//       </button>
 
//       {isVisible && <p>visible!</p>}
//     </div>
//   );
// };
 
// export default App;
import React from 'react';
import KanbanBoard from './KanbanBoard';

const App = () => {

  return (
       <KanbanBoard />
  
  );
};
 
export default App;

