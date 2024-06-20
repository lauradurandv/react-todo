import styles from "./TodoListItem.module.css";
import Trash from "/src/assets/trash.svg?react";
import PropTypes from "prop-types";
function TodoListItem(props){
    //Deconstructors
    const { todo, onRemoveTodo} = props;
    return(
        <div className={styles.todo}>
            <li className={styles.ListItem}>{todo.title}</li>
            <Trash className={styles.trashButton} onClick={() => onRemoveTodo(todo.id)}>Remove</Trash>
        </div>
    );
}
TodoListItem.propTypes ={
    todo:PropTypes.object.isRequired,
    onRemoveTodo:PropTypes.func.isRequired,
}
export default TodoListItem