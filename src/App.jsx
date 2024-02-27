import './App.css'

//Objects
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
]
function App() {


  return (
    <>
    <div>
      <h1>To Do List</h1>
      <ul>
        {
          toDoList.map(function(item){
            return(
              <li key={item.id}>{item.title}</li>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}

export default App
