import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodohandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: Math.random() * 100, text: inputText, completed: false },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodohandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
