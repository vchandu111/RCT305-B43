import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

export const incrementCounter = (value) => ({
  type: INCREMENT,
  payload: value,
});

export const decrementCounter = (value) => ({
  type: DECREMENT,
  payload: value,
});

export const resetCounter = () => ({
  type: RESET,
});

