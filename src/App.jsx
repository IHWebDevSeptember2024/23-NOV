// HOOKS
import { useState } from "react";
import { useParams } from "react-router-dom";

// ASSETS
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// CSS
import "./App.css";

// COMPONENTS
import ToDoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <ToDoList />
      </div>
    </>
  );
}

export default App;
