import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filtredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtredTodos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
