import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    onAdd(input)
    setInput('')
  }

  return (
    <div>
      <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Dodaj</button>
    </div>
  )
}

export default TodoForm