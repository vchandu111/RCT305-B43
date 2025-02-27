import { ADD_TODO } from "./actionTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});
