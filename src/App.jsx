import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import { useEffect, useReducer } from 'react';

function App() {

  //Reducer
  const todoReducer = (state,action) => {
    switch(action.type){
      case 'FETCH_TODOS':
        return{
          ...state,
          isLoading:true,
        }
      case 'SET_TODO':
        return{
          data:action.payload,
          isLoading:false,
        }
      case 'REMOVE_TODO':
        return {
          data: state.data.filter((todo) => action.payload !== todo.id),
        }
      default:
        throw new Error();
    }
  };

  //fetch data async
  function getAsyncTodos(){
    return new Promise((resolve,reject) =>
      setTimeout(() => {
        resolve({
           data:{ todoList: JSON.parse(localStorage.getItem('savedTodoList')) }
        })
      }))
  }
  
  //Converting todo to use reducer
  const [todoList, dispatchTodo] = useReducer(
    todoReducer,
    { data: [], isLoading:false}
  );

  //fetching data
  async function fetchData(){

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    const options = {
      methods: "GET",
      headers: {
        Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }


    try {

      const response = await fetch(url,options);
      if(!response.ok){
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
  
      const todos = data.records.map((todo) => {

        const newTodo = {
          id: todo.id,
          title: todo.fields.Title
        }

        return newTodo

      });

      dispatchTodo({
        type: 'SET_TODO',
        payload: todos
      })
      
    } catch (error) {
      console.log(error.message);
    }

  }




  //Listens for empty array
  useEffect(()=>{
    
    fetchData()

  },[])


  //Use effect to save to do list data
  useEffect(() => {
    if (todoList.isLoading == false){
      localStorage.setItem('savedTodoList', JSON.stringify(todoList.data));
    }
  }, [todoList]);


  //remove todo from list
  function addTodo(newTodo){
    dispatchTodo({
      type:'SET_TODO',
      payload:[...todoList.data,newTodo],
    });

  }

  function removeTodo(id){
    dispatchTodo({
      type:'REMOVE_TODO',
      payload:id,
    });
  }

  return (
    <>
      <h1>To Do List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      { todoList.isLoading? (
        <p>Loading</p>
      ) : (
        <TodoList onRemoveTodo={removeTodo} todoList={todoList}/>
      )
      }
    </>
  )
}

export default App
