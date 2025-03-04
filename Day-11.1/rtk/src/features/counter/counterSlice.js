import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    firstCounter: 0,
  },
  reducers: {
    //actiontypes, actions
    incrementCounter: (state) => {
      state.firstCounter += 1;
    },
    decrementCounter: (state) => {
      state.firstCounter -= 1;
    },
    resetCounter: (state) => {
      state.firstCounter = 0;
    },
  },
});

console.log(counterSlice);

export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
