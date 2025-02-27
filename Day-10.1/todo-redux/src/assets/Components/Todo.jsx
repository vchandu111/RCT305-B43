import React from "react";
import { useReducer } from "react";
import { use } from "react";
import { useState } from "react";
import { todoReducer } from "../../Masai/todoReducer";
import { ADD_TODO } from "../../Masai/actionTypes";
import { addTodo } from "../../Masai/actions";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const [inputText, setInputText] = useState("");
  //   const [todos, dispatch] = useReducer(todoReducer, []);
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputText));
  };
  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="enter your todo"
        />
        <input type="submit" value="Add Todo" />
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
