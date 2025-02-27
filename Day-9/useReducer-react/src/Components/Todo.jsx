import { useReducer, useState } from 'react'
const initialState = {
  todos: []
};
// Reducer function to handle state updates
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.payload
      }]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

function Todo() {
  // Initialize useReducer with empty array as initial state
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputText.trim()) return
    
    dispatch({
      type: 'ADD_TODO',
      payload: inputText
    })
    setInputText('') // Clear input after adding
  }

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  return (
    <div className="app-container">
      <h1>Simple Todo List</h1>
      
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter a new todo"
          className="todo-input"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button 
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo