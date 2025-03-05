import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

// const data =[{category:"",amount}]
const Analytics = () => {
  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);

  const categoryTotals = expenses.reduce((acc, cv) => {
    console.log(cv);
    if (!acc[cv.category]) {
      acc[cv.category] = 0;
    }
    acc[cv.category] = acc[cv.category] + Number(cv.amount);
    return acc;
  }, {});
  console.log(categoryTotals, "category totals");

  const pieData = Object.entries(categoryTotals).map((elem) => ({
    name: elem[0],
    value: elem[1],
  }));
  console.log(pieData);

  return (
    <div className="shadow-lg p-6" style={{ width: "100%", height: "400px" }}>
      <h1>Expenses By Category</h1>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
                  />
                  <Tooltip />
                  <Legend/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
