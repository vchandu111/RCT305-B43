import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  budget: 0,
  expenses: [],
};
const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setNewBudget: (state, action) => {
      state.budget = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
  },
});

export const { setNewBudget, addExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
