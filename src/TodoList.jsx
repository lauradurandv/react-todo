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
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    )
}
export default TodoList