import React from "react";
import Budget from "../Components/Budget";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseTable from "../Components/ExpenseTable";

const Dashboard = () => {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold ">Expense Tracker</h1>
      <Budget />
      <ExpenseForm />
      <ExpenseTable delete={true} />
    </section>
  );
};

export default Dashboard;
