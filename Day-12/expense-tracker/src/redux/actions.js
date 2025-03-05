import { ADD_EXPENSE, SET_BUDGET } from "./actionTypes";

export const setNewBudget = (amount) => ({
  type: SET_BUDGET,
  payload: amount,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: expense,
});
