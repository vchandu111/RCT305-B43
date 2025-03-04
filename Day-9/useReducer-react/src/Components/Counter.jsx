import React from "react";
import { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { incrementCounter, decrementCounter, resetCounter } from "./actions";
export const initialState = {
  firstCounter: 0,
};

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Count:{count.firstCounter}</h1>
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
