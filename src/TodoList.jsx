import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";

function TodoList(props){
    //Deconstructors
    const {todoList, onRemoveTodo} = props;
    
    return(
        <ul className={styles.List}>
        {
          todoList.data.map(function(item){
            return(
              < TodoListItem onRemoveTodo={onRemoveTodo} key={item.id} todo={item}/>
            )
          })
        }
      </ul>
    )
}
export default TodoList