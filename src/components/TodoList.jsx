import TodoListItem from "./TodoListItem";
import styles from "./TodoList.module.css";
import PropType from "prop-types";

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
TodoList.prototype ={
  todoList: PropType.array.isRequired,
  onRemoveTodo: PropType.func.isRequired,
}
export default TodoList