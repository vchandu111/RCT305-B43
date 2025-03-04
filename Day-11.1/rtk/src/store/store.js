import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
export const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
