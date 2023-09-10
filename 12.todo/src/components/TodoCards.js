import {useState} from 'react'
import TodoCard from './TodoCard'

const TodoCards = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(name, description, date);

        e.target.reset()
        setName("")
        setDescription("")
        setDate()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New Task" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Task Description" onChange={(e) => setDescription(e.target.value)}/>
            <input type="date" placeholder={Date.now()} onChange={(e) => setDate(e.target.value)}/>            
            <input type="submit"/>
        </form>
        <TodoCard />
    </div>
  )
}

export default TodoCards