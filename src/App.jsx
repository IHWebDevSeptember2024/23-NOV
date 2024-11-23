// HOOKS
import { useState } from "react";

// CSS
import "./App.css";

// COMPONENTS
import ToDoList from "./components/TodoList";
import Pokemons from "./components/Pokemons";

function App() {
  return (
    <>
      <div className="App">
        <Pokemons />
        <ToDoList />

      </div>
    </>
  );
}

export default App;
