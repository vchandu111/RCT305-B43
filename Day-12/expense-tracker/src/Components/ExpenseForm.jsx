import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../RTK/expenseSlice.js";

function ExpenseForm() {
  const [des, setDes] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("other");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      des,
      amount,
      category,
    };
    // console.log(des,amount,category)
    //dispatch(addExpense(newExpense))
    dispatch(addExpense(newExpense));
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white p-6 rounded-lg shadow-md mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          onChange={(e) => setDes(e.target.value)}
          type="text"
          placeholder="Enter description"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="other">Other</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
