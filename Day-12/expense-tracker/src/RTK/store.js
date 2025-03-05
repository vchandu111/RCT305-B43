import { configureStore } from "@reduxjs/toolkit";
import expenseSliceReducer from "../RTK/expenseSlice.js";
export const expenseStoreRTK = configureStore({
  reducer: expenseSliceReducer,
});
