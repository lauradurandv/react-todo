import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import AddSign from "./assets/plus.svg?react";
import styles from "./TodoFrom.module.css";
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
        <form id="AddTodoFrom" onSubmit={handleAddTodo} > <div>
            <InputWithLabel  value={todoTitle} onChange={handleTitleChange}>
                Title
            </InputWithLabel>
            <AddSign className={styles.Plus} type="submit">Add</AddSign>
        </div>
        </form>
    )
}
export default AddTodoForm