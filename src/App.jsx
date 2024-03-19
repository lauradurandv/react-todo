import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState } from 'react';


function App() {

  const [newTodo, setNewTodo ] = useState("");

  return (
    <>
    <div>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList/>
    </div>
    </>
  )
}

export default App
