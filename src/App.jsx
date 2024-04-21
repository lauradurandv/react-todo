import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useState, useEffect } from 'react';

function App() {

   //Making todoList stateful
  const [todoList, setTodoList] = useState([]);

  //Making loading stateful
  const [isLoading, setIsLoading] = useState(true);


  //Fetching data asynchronously
  useEffect(()=>{
    new Promise((resolve,reject) =>
    setTimeout(() => {
      resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) } })
    }, 2000))
    .then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  },[])

  //Use effect to save to do list data
  useEffect(() => {
    if (isLoading == false){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList]);


  function addTodo(newTodo){
    //Using spread operator
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id){
      const newTodoList = todoList.filter(
        (todo) => id !== todo.id
      )
      setTodoList(newTodoList);
    }

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      { isLoading? (
        <p>Loading</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>
      )
      }
    </>
  )
}

export default App
