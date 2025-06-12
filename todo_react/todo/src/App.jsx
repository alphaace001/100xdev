import { useState } from "react";

function App() {
  const [todo, setTodos] = useState([
    {
      title: "Go to gym",
      description: "go to gym from 7-8",
      completed: false,
    },
    {
      title: "study DSA",
      description: "study DSA from 9-10",
      completed: true,
    },
  ]);
  function addtodo() {
    setTodos([
      ...todo,
      {
        title: "new todo",
        description: "new todo description",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addtodo}>Add bew todo</button>
      {todo.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
