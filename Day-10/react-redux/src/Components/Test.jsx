import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const count = useSelector((state) => state.firstCounter);
  console.log(count);
  return <div>Test</div>;
};

export default Test;
