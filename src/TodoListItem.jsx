function TodoListItem(props){
    //Deconstructors
    const { todo, onRemoveTodo} = props;
    return(
        <>
            <li>{todo.title}</li>
            <button onClick={() => onRemoveTodo(todo.id)}>Remove</button>
        </>
    );
}
export default TodoListItem;