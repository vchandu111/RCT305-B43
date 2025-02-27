import React from "react";
import { useReducer } from "react";
import { counterReducer } from "../redux/counterReducer";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.firstCounter);
  console.log(count);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch(incrementCounter(1))}>
        Increment By 1
      </button>
      <button onClick={() => dispatch(decrementCounter(1))}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch(incrementCounter(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(decrementCounter(5))}>
        Decrement By 5
      </button>

      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default Counter;
