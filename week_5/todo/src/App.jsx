import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([{
      title: 'Learn React',
      description: 'React is a JS library for building user interfaces',
      completed: false
    },
    {
      title: 'Learn MongoDB',
      description: 'MongoDB is a NoSQL database',
      completed: false
    }])

    function addTodo(){
        setTodos([...todos, {
            title: 'New Todo',
            description: 'This is a new todo item',
            completed: false
        }])
    }

    return(
        <div>
            <button onClick={addTodo}>Add random todo</button>
            {todos.map(function(todo){
                return <SingleTodo title={todo.title} description={todo.description} />
            })}
        </div>
        // <SingleTodo title={todos[0].title} description={todos[0].description} />
    )
}

function SingleTodo(props){

    return(
    <div>
        <div>{props.title}</div>
        <div>{props.description}</div>
        {/* <button onClick={}> Mark as completed</button> */}
    </div>
    )
}

export default App
