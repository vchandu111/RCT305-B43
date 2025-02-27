import { INCREMENT, DECREMENT, RESET } from "../redux/actionTypes";

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

