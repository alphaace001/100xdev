import { useState,useContext } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

//   return (
//     <>
//       <Count count={count} setCount = {setCount} />
//     </>
//   )
// }

// function Count({count,setCount}) {
//   return (
//     <>
//     <CountRender count={count} />
//     <Buttons setCount={setCount}/>
//   </>
//   )
// }

// function CountRender({count}) {
//   return <h1>{count}</h1>
// }

// function Buttons({setCount}) {
//   return (
//     <div>
//       <button onClick={()=>{setCount(count => count -1)}}>-</button>
//       <button onClick={()=>{setCount(count => count +1)}}>+</button>
//     </div>
//   )
// }

return (
    <>
    <CountContext.Provider value = {{count,setCount}}>
      <Count />
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  return (
    <>
    <CountRender />
    <Buttons/>
  </>
  )
}

function CountRender() {
  const {count} = useContext(CountContext);
  return <h1>{count}</h1>
}

function Buttons() {
  const {setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={()=>{setCount(count => count -1)}}>-</button>
      <button onClick={()=>{setCount(count => count +1)}}>+</button>
    </div>
  )
}

export default App
