import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "🌞 Light"}
      </button>
    </div>
  );
}

export default Dashboard;
