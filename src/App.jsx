import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect } from 'react';

//Custom Hook
function useSemiPersistentState(){

  //State Setting and reading stored list
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));

  //Use effect to save to do list data
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList]
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo){
    //Using spread operator
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList}/>
    </>
  )
}

export default App
