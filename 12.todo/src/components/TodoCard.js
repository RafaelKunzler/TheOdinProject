import React from 'react'

const TodoCard = (props) => {
  return (
    <div>    
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.date}</p>
        <button onClick={() => props.removeTask(props.id)}>X</button>
    </div>
  )
}

export default TodoCard