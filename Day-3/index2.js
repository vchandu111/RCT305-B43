function Counter() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("Masai");

  function increment() {
    //increase the initialstate by 1
    setCount(count+1);
  }
  function decrement() {
    //decrease the initialstate by 1
    setCount(count - 1);
  }

  function changeName() {
    setName("Masai school");
  }
  console.log("re-rendering");
  return (
    <div>
      <h1>Counter:{count}</h1>
      <h1>{name}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Counter />);
