import { useState } from 'react';

function AddTodoForm(props){

    //Deconstructors
    const { onAddTodo} = props;

    //State Setting
    const [todoTitle, settodoTitle] = useState("");

    function handleTitleChange(event){
        //get input
        const newTodoTitle = event.target.value;
        //save new user input
        settodoTitle(newTodoTitle);
    }

    function handleAddTodo(event){

        //Prevent default behavior of form submit
        event.preventDefault();
        //Pass to app.js
        const newAddToDo = {
            title: todoTitle,
            id: Date.now(),
        }
        onAddTodo(newAddToDo);
        settodoTitle("");


    }

    return(
        <form id="AddTodoFrom" onSubmit={handleAddTodo} >
            <label htmlFor="todoTitle">Title</label>
            <input name="title" id="todoTitle" placeholder="Task" value={todoTitle} onChange={handleTitleChange}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default AddTodoForm