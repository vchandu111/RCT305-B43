import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewBudget } from "../RTK/expenseSlice.js";

const Budget = () => {
  const [budget, setBudget] = useState("");
  const dispatch = useDispatch();
  const newbudget = useSelector((state) => state.budget);
  const expenses = useSelector((state) => state.expenses);

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const remaining = newbudget - totalExpense;

  const handleSubmitBudget = () => {
    //dispatch(setNewBudget(budget))
    dispatch(setNewBudget(budget));
  };
  return (
    <div className="shadow-lg p-8 mt-4">
      <div className="w-full">
        <input
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter Budget amount"
          className="w-3/4 py-2  border-2 px-2 border-gray-200 rounded-md"
          type="number"
        />
        <button
          onClick={handleSubmitBudget}
          className=" py-2 px-4 bg-blue-700 rounded-md ml-2 text-white"
        >
          Set Budget
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <div className="shadow-sm bg-blue-100 px-4 py-2 rounded-md">
          <p className="text-blue-600">Total Budget</p>
          <h1 className="text-3xl font-bold mt-2">${newbudget}</h1>
        </div>
        <div className="shadow-sm bg-pink-100 px-4 py-2 rounded-md">
          <p>Total Expenses</p>
          <h1 className="text-3xl font-bold mt-2">${totalExpense}</h1>
        </div>
        <div className="shadow-sm bg-orange-100 px-4 py-2 rounded-md">
          <p>Remaining</p>
          <h1 className="text-3xl font-bold mt-2">${remaining}</h1>
        </div>
      </div>
    </div>
  );
};

export default Budget;
