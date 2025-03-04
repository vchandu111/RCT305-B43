import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../features/counter/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.firstCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch(incrementCounter())}>
        Increment By 1
      </button>
      <button onClick={() => dispatch(decrementCounter())}>
        Decrement By 1
      </button>

      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;
