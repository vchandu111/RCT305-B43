import axios from "axios";
import { useEffect, useState } from "react";
import Todotable from "./TodoTable";
function Todo() {
  const [todos, setTodos] = useState([]);
  //https://jsonplaceholder.typicode.com/todos
  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  return (
    <>
      <h1>Todo</h1>
      <Todotable data={todos} />
    </>
  );
}

export default Todo;
