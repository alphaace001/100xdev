import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    description: 'React is a JS library for building user interfaces'
  },
  {
    title: 'Learn MongoDB',
    description: 'MongoDB is a NoSQL database'
  }])

  function Todo({title, description}){
    return(
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    )
  }
  function Add_todo(){
    const title_input = document.getElementById('title_input')
    const description_input = document.getElementById('description_input')
    setTodos([...todos, {
      title: title_input.value,
      description: description_input.value
    }])
    title_input.value = ''
    description_input.value = ''
  }
      
  return (
    <div>
      <input type='text' placeholder='Title' id='title_input' /><br></br>
      <input type='text' placeholder='Description' id='description_input' /><br></br>
      <button onClick={Add_todo} >Add Todo</button><br></br>
        {todos.map((todo, index) => (
          <Todo key={index} title={todo.title} description={todo.description} />
        ))}
    </div>
  )
}

export default App
