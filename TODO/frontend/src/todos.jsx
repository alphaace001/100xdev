import { useState, useEffect } from 'react'

export default function Gettodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await fetch("http://localhost:3000/todos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
          }
        })
        const parsedData = await data.json()
        console.log(parsedData)
        if (parsedData.message && parsedData.message.todos) {
          setTodos(parsedData.message.todos)
        }
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    }
    
    fetchTodos()
  }, [])

  return (
    <>
      {todos.map((todo)=><Todos task={todo.task} description={todo.description} _id={todo._id} key={todo._id}/>)}
    </>
  )
}

function Todos(props){
  return(
    <div>
      <h3>{props.task}</h3>
      <p>{props.description}</p>
      <button id={props._id}>Done</button>
    </div>
  )
}
