import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos] = useState([]);
  //effect
  //--run just once
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    saveLocaltodos();
    filterHandler();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFiltredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFiltredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocaltodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>First Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filtredTodos={filtredTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
