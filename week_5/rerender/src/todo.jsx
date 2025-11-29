import { useState } from "react";

export default function Gettodos() {
    const [todos,setTodos] = useState([
        {task: "Learn React", description: "Learn React from official docs", id:1},
        {task: "Learn Node", description: "Learn Node from official docs", id:2},
        {task: "Learn MongoDB", description: "Learn MongoDB from official docs", id:3}
    ])

    function Addtodo(){
        const newTodo = {task: "New Task", description: "New Description", id: todos.length + 1}
        setTodos([...todos, newTodo])
    }
    return(
        <>
        <button onClick={Addtodo}>Add Todo</button>
        <div>
            {todos.map((todo)=><Todos key={todo.id} task={todo.task} description={todo.description}/>)}
        </div>
        </>
    )
}

function Todos({task,description}){
  return(
    <div>
      <h3>{task}</h3>
      <p>{description}</p>
    </div>
  )
}