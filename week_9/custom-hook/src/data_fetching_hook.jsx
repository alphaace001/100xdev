import { useEffect, useState }  from 'react'
import axios from "axios"

// custom hook
// function useTodos (){
//   const [todos,setTodos] = useState([])
//   useEffect(()=>{
//     axios.get("http://sum-server.100xdevs.com/todos")
//     .then(res =>{
//       setTodos(res.data.todos)
//     })
//   }, [])
//   return todos
// }

// custom hook and loading while fetching data
// clearing the previous interval before starting a new interval
function useTodos (n){
  const [todos,setTodos] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const value = setInterval(()=>{
      axios.get("http://sum-server.100xdevs.com/todos")
      .then(res =>{
        setTodos(res.data.todos)
        setLoading(false)
        })
      },n*1000)

    axios.get("http://sum-server.100xdevs.com/todos")
    .then(res =>{
      setTodos(res.data.todos)
      setLoading(false)
    })

    return () =>{
      clearInterval(value)
    }
  },[n])

  return {todos,loading}
}

function App() {
  // const todos = useTodos()  
  const {todos,loading} = useTodos(5)
  if(loading){
    return <div>loading...</div>
  }

  return (
    <>
    {todos.map(todo => <Track todo={todo}/>)}
    </>
  )
}

function Track({todo}){
  return <div>
    <p>{todo.title}</p>
  </div>
}

// export default App