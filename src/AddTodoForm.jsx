function AddTodoForm(props){

    function handleAddTodo(event){
        //Prevent default behavior of form submit
        event.preventDefault();
        //get input
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        //Pass to app.js
        props.onAddTodo(todoTitle);
        //Reset form
        document.getElementById("AddTodoFrom").reset();


    }

    return(
        <form id="AddTodoFrom" onSubmit={handleAddTodo} >
            <label htmlFor="todoTitle">Title</label>
            <input name="title" id="todoTitle" placeholder="Task"/>
            <button type="submit">Add</button>
        </form>
    )
}
export default AddTodoForm