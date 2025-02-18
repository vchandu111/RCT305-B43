function Todo() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleAdd() {
    const newTodo = {
      todoText: value,
      id:Math.random()
    }
    setTodos([...todos, newTodo]);
  }
  console.log(todos);

  // const todos = [{text:,id:},{text:,id:}]

  function handleDelete(todoId) {
    console.log(id); // 2
    //filter returns an array which satisfies given condtion
    const updatedList = todos.filter((el, index) => el.id !== todoId); // ["a","b","d"]
    setTodos(updatedList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={handleChange} type="text" placeholder="Enter Todo" />
      <button onClick={handleAdd}>Add Todo</button>
      <div>
        <ul>
          {todos.map((item, index) => (
            <li key={item.id}>
              {item.todoText} <button onClick={() => handleDelete(item.id)}>Delete</button>
              {/* Delete Button */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Todo />);

<ul>
  <li key="0">b</li>
  <li key="1">c</li>
</ul>;




