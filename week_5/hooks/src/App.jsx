import { useEffect ,useMemo,memo, useState } from 'react'
import axios from 'axios'
import { useCallback } from 'react';
import { useRef } from 'react';

// useeffect -> to configure when a computation should be executed
// usememo -> to memoize a computation and avoid re-computation on every render
// usecallback -> to memoize a function definition and avoid re-definition on every render
// memo -> to memoize a component and avoid re-rendering on every parent render

// function App() {
//   const [todos, setTodos] = useState([])
//   const [id, setId] = useState(1)

//   // useeffect doesn't allow async directly
//   // useEffect(()=>{async function fetchdata() {
//   //   const data  = await fetch('https://jsonplaceholder.typicode.com/todos')
//   //   const json = await data.json()
//   //   setTodos(json)
//   // }
//   // fetchdata()
//   // }, [])
//  function updateId(newId){
//     setId(newId)
//   }
//   useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
//     .then((response)=>{
//       setTodos(response.data)
//     })
//     console.log("Fetching data for ID:", id);
//   }, [id])

//   return (
//     <>
//       <button onClick={(e)=>updateId(1)}>1</button>
//       <button onClick={(e)=>updateId(2)}>2</button>
//       <button onClick={(e)=>updateId(3)}>3</button>
//       <button onClick={(e)=>updateId(4)}>4</button>
//       <button onClick={(e)=>updateId(5)}>5</button>
//       <div>{todos[0]?.title}</div>
//       <div>{todos[0]?.id}</div>
//     </>
//   )
// }

function App() {
  const [number, setNumber] = useState(0)
  const [counter,setCounter]= useState(0)
  // const [sum,setSum]= useState(0)

  // can be done with useEffect, but will take 2 rerenders
  // useEffect(()=>{
  //   let sum = 0;
  //   for (let i=0;i<=number;i++){
  //     sum+=i;
  //   }
  //   setSum(sum);
  // },[number])

  // const sum = useMemo(() => {
  //   let count = 0;
  //   console.log("Calculating sum...");
  //   for (let i = 1; i <= number; i++) {
  //     count += i;
  //   }
  //   return count;
  // }, [number]);

  // return(
  //   <>
  //   <input type='number' onChange={(e)=>{setNumber(e.target.value)}} placeholder='input the number'></input>
  //   <h3>The sum is {sum}</h3>
  //   <button onClick={()=>setCounter(counter+1)}>Counter ({counter})</button>
  //   </>
  // )


  // var a = useCallback(()=>{ console.log("Check function called");}, [])

  // return(
  //     <>
  //     <button onClick={()=>setCounter(counter+1)}>Counter ({counter})</button>
  //     <Childe functiontocall={a}/>
  //     </>

  //   )
  // }

  // const Childe = memo(({functiontocall})=>{
  //   return(
  //     <div>
  //       <button onClick={functiontocall}>Click me</button>
  //     </div>
  //   )
  // })
  const [incomeTax, setIncomeTax] = useState(1000);
  const divRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      console.log("Updating income tax value in div directly");
      divRef.current.innerText = 5000
    },5000)
  }, [])

  return(
    <div>
      hi there, changing value directly <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}
export default App
