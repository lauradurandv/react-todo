import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useEffect, useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';


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
  
  //Converting todo to use reducer
  const [todoList, dispatchTodo] = useReducer(
    todoReducer,
    { data: [], isLoading:false}
  );

  //fetching data
  async function fetchData(){

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?Default=Grid%20&sort[0][field]=Title&sort[0][direction]=asc`;

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

  //Post data (New todo)
  async function postTodo(todo){

    const airtableData = {
      fields: {
        Title: todo.title,
      }
    }

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default?`;

    const options = {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      },
      body: JSON.stringify(airtableData),
    }
    
    try {

      const response = await fetch(url,options);

      if (!response.ok){
        const message = `Error has ocurred:${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();

      dataResponse.records.sort((ObjectA,ObjectB) => {

        const titleA = ObjectA.fields.Title;
        const titleB = ObjectB.fields.Title;

        if (titleA < titleB){
          return 1;
        }
        if (titleA < titleB){
          return -1;
        } 
        if (titleA == titleB){
          return 0
        }
      })

      return dataResponse;

  } catch (error){
    console.log(error.message);
    return null;
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
    postTodo(newTodo);
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

  //Routes elements
  const home = (
    <>
      <h1 className={styles.mainHeading}>Tasks:</h1>
        <AddTodoForm onAddTodo={addTodo} />
          { todoList.isLoading? (<p>Loading</p>) : 
          (
            <TodoList onRemoveTodo={removeTodo} todoList={todoList}
            />
          )
          }
    </>
  )

const nextToDoList = (
  <>
    <h1>New To Do List</h1>
  </>
)

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={home} />
        <Route path="/new" element={nextToDoList} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
