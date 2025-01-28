function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => onDelete(index)}>Usuń</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList