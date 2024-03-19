import TodoListItem from "./TodoListItem";

const toDoList = [
  {
    id: 0,
    title: "File Taxes"
  },
  {
    id:1,
    title: "Make vet appointment"
  },{
    id:2,
    title: "Get groceries"
  }
];

function TodoList(){
    return(
        <ul>
        {
          toDoList.map(function(item){
            return(
              < TodoListItem key={item.id} todo={item}/>
            )
          })
        }
      </ul>
    )
}
export default TodoList