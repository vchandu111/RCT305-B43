import React, { useCallback, useMemo, useState } from "react";
import CounterChild from "./CounterChild";

const Counter = () => {
  const [count, setCount] = useState(0);
  let name = "masai";
  //1st render -> obj -> box-1
  //2nd render -> obj -> box-1
  //3rd render -> obj -> box-1
  let details = useMemo(() => {
    return {
      name: "Rinki",
    };
  }, []);

  const test = useCallback(() => {
    console.log("inside test");
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <CounterChild test={test} />
    </div>
  );
};

export default Counter;
