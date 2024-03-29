function TodoListItem(props){
    //Deconstructors
    const { todo} = props;
    
    return(
        <li>{todo.title}</li>
    );
}
export default TodoListItem;