import TodoListItem from "./TodoListItem";

function TodoList(props){
    //Deconstructors
    const {todoList} = props;

    return(
        <ul>
        {
          todoList.map(function(item){
            return(
              < TodoListItem key={item.id} todo={item}/>
            )
          })
        }
      </ul>
    )
}
export default TodoList