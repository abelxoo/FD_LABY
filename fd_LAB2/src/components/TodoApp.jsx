import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function TodoApp() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    if (text !== '') {
      setTodos([...todos, text])
    }
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default TodoApp