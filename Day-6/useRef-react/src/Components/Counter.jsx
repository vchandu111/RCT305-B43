import { useRef, useState } from "react";
function Counter() {
  let x = 0;
  let [y, setY] = useState(0);
  let z = useRef(0);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Let x ={x}</h1>
        <button
          onClick={() => {
            x++;
            console.log("x=", x);
          }}
        >
          Increment x
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <h1>state y ={y}</h1>
        <button
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increment y
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <h1>useRef z ={z.current}</h1>
        <button
          onClick={() => {
            z.current += 1;
            console.log("z",z.current);
          }}
        >
          Increment z
        </button>
      </div>
    </>
  );
}

export default Counter;
