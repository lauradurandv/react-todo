function AddTodoForm(props){

    function handleAddTodo(event){
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        //Pass to app.js
        props.onAddTodo(todoTitle);

    }

    return(
        <form onSubmit={handleAddTodo} >
            <label htmlFor="todoTitle">Title</label>
            <input name="title" id="todoTitle"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default AddTodoForm