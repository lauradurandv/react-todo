import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import PropTypes from "prop-types";
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
        <form id="AddTodoFrom" onSubmit={handleAddTodo} > <div className={styles.inputButtonContainer}>
            <InputWithLabel  value={todoTitle} onChange={handleTitleChange}>
                Title
            </InputWithLabel>
            <button className={styles.Plus} type="submit">Add</button>
        </div>
        </form>
    )
}
AddTodoForm.propTypes ={
    onAddTodo: PropTypes.func.isRequired,
}
export default AddTodoForm