import TodoListItem from "./TodoListItem";

function TodoList(props){
    //Deconstructors
    const {todoList, onRemoveTodo} = props;

    return(
        <ul>
        {
          todoList.map(function(item){
            return(
              < TodoListItem onRemoveTodo={onRemoveTodo} key={item.id} todo={item}/>
            )
          })
        }
      </ul>
    )
}
export default TodoList