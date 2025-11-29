import { memo, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Gettodos from './todo'
import Wrapper from './wrapper'

// function App() {
//   const [title, setTitle] = useState("Atul")

//   return (
//     <>
//     <button onClick= {()=>{setTitle(Math.random())}}>Click me to change the title</button>
//     <Statement name={title}/>
//     <Statement name="Raman"/>
//     <Statement name="Raman"/>
//     <Statement name="Raman"/>
//     <Statement name="Raman"/>
//     </>
//   )
// }

// function Statement({name}){
//   return(
//     <div>My name is {name}</div>
//   )
// }

function App() {
  const [title, setTitle] = useState("Atul")

  return (
    <>
    <Router>
      <Routes>
        <Route path="/todos" element={<Gettodos />} />
        <Route path="/wrapper" element={<Wrapper/>} />
      </Routes>
    </Router>
    {/* <button onClick= {()=>{setTitle(Math.random())}}>Click me to change the title</button>
    <Statement name={title}/>
    <Statement name="Raman"/>
    <Statement name="Raman"/>
    <Statement name="Raman"/>
    <Statement name="Raman"/> */}
    </>
  )
}
const Statement = memo(function Statement({name}){
  console.log("Rendering statement for", name);
  return(
    <div>My name is {name}</div>
  )
})


// function App() {
//   return(
//     <>
//     <RerenderComponent/>
//     <Statement title="Raman" />
//     </>
//   )
// }

// function Statement({title}){
//   return(
//     <div>
//       <h1>The title is {title}</h1>
//     </div>
//   )
// }

// function RerenderComponent(){
//   const [title,setTitle]=useState("Atul")

//   return(
//     <div>
//       <button onClick={()=>{setTitle(Math.random())}}>Change Title</button>
//       <Statement title={title}/>
//     </div>
//   )
// }

export default App
