import { use, useEffect, useState }  from 'react'

// function useIsOnline(){
//   const [status, setStatus] = useState(window.navigator.onLine)
  
//   useEffect(() => {
//     window.addEventListener("online",()=>{
//       setStatus(true)
//     })

//     window.addEventListener("offline",()=>{
//       setStatus(false)
//     })
//   }, [])
  
//   return status
// }

function useMousePointer(){
  const [position,setPosition] = useState({x:0,y:0})
  
  const handlemousemove = (e) =>{
    setPosition({x:e.clientX,y:e.clientY})
  }

  useEffect(()=>{
    window.addEventListener("mousemove",handlemousemove)
    return () =>{
      window.removeEventListener("mousemove",handlemousemove)
    }
  })
  return position
}

function useInterval(fn,timeout){
  useEffect(() => {
    const id = setInterval(()=>{
      fn()
    },timeout)
    
    return () => {
      clearInterval(id)
    }
  }, [fn, timeout])
}

function useDebounce(inputvalue,timeout){
  const [debouncedvalue, setDebouncevalue] = useState(inputvalue)

  useEffect(()=>{
    const value = setTimeout(()=>{
      console.log(inputvalue)
      setDebouncevalue(inputvalue)
    },timeout)

    return ()=>{
      clearTimeout(value)
    }

  },[inputvalue])

  return debouncedvalue
}

function App() {



  // const [count,setCount] = useState(0)
  // useInterval(()=>{
  //   setCount(c => c +1)
  // },1000)
  
  // return <>
  // <div>Count is {count}</div>
  // </>

  // const status = useIsOnline()
  // console.log(status)
  // if(!status){
  //   return <div>
  //     you are offline please connect to internet
  //   </div>
  // }
  
  // return <div>
  //   You are online
  // </div>

//   const mousePointer = useMousePointer()
//   return <div>
//     x:{mousePointer.x},y:{mousePointer.y}
//   </div>
}


export default App