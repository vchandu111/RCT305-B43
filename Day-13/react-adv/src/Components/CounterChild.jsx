import React, { useEffect } from "react";

const CounterChild = ({ test }) => {
  console.log("rendering Counter Child");
  test();

  return <div>{name}</div>;
};

export default React.memo(CounterChild);
