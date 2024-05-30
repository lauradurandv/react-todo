import styles from "./TodoListItem.module.css";
import Trash from "./assets/trash.svg?react";

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
export default TodoListItem