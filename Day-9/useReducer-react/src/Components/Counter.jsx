import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { firstCounter: state.firstCounter - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count:{count.firstCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment By 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement By 1
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement By 5
          </button>
          <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment By 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement By 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
