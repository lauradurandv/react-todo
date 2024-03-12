function TodoListItem(props){
    //Deconstructors
    const { todo, title } = props;
    
    return(
        <li>{todo.title}</li>
    );
}
export default TodoListItem;