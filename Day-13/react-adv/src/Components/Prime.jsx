import React, { useState, useMemo } from "react";
import { findNthPrime } from "../util";
const Prime = () => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState("light");
  const prime = useMemo(() => findNthPrime(num), [num]);
  console.log("re-renderinggggg");
  console.log(prime);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        border: "4px solid black",
        padding: "40px",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>
        {num}
        <sup>th</sup> Prime number is {prime}
      </h1>
      <input
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
        type="number"
      />
    </div>
  );
};

export default Prime;
