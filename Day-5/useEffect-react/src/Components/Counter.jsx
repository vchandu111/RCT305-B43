import { useEffect, useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("Masai")
    
    
  useEffect(() => {
    console.log("inside useEffect");
  },[]);
    
    
  console.log("re-rendered");
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={()=>setName("Masai school")}>Change Name to Masai School</button>
    </div>
  );
}

export default Counter;
