import {useState, useReducer} from 'react'
import TodoCard from './TodoCard'

const TodoCards = () => {

  
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState()

    //Lista teste inicial
    const initialTasks = [
      { id: 1, name: "Fazer Todo List", description: "Preciso programar uma todo list para o The Odin Project"}
    ]

    

    //Adicionar e remover tasks
    const taskReducer = (state, action) => {
      switch (action.type){
        case "ADD": 
          console.log("Add task")
          const addTask = {
            id: Math.random(),
            name: name,
            description: description,
            date: date,
          }
          console.log(addTask);
          setNewTask("")
          setName("")
          setDescription("")
          setDate(Date.now())

        return [...state, addTask];

        case "DELETE":
          console.log("removed task")
          return state.filter((task) => task.id !== action.id)
        default:
            return state
      }
    };    

    const [newTask, setNewTask] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit")

        name && dispatchTasks({ type: "ADD"})

        e.target.reset()
              
    }

    const removeTask = (id) => {      
      dispatchTasks({ type: "DELETE", id})
      
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Task Description" onChange={(e) => setDescription(e.target.value)}/>
            <input type="date" placeholder={Date.now()} onChange={(e) => setDate(e.target.value)}/>            
            <input type="submit"/>  
        </form>        
        {tasks.map((task) => (
              <TodoCard 
                key={task.id}
                id={task.id} 
                name={task.name} 
                description={task.description} 
                date={task.date}  
                removeTask={removeTask}              
              />
            ))} 
    </div>
  )
}

export default TodoCards
