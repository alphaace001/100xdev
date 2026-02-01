import React, { useEffect }  from 'react'
import { useState } from 'react'

function App() {
  const [render, setRender] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setRender(false)
    },10000)
  },[])
  return (
    <>
    {render ? <Mycomponent /> : <div></div>}
    </>
  )
}


// function Mycomponent(){
//   useEffect(()=>{
//     console.error("component mounted")

//     //  when mycomponent render for the first time then "component mounted" will run first
//     // when it rerender based on dependency array then first the cleaning of function at return statement(unmount the previous) will happen then "componet mounted" will be run
//     // useeffect can only return a function
//     return () =>{
//       console.log("component unmounted")
//     }
//   },[])

//   return <div>
//     From inside my component
//   </div>
// }

// export default App

// class based component
class Mycomponent extends React.Component{
  componentDidMount(){
    console.log("component mounted")
  }

  componentWillUnmount(){
    console.log("unmounted")
  }

  render(){
    return <div>hi there</div>
  }
}





// functional components
// function Mycomponent(){
  //   const [count,setCount] = useState(0)
  
  //   const incrementcount = () =>{
    //     setCount(count+1)
    //   }
    
    //   return <div>
    //     <p>{count}</p>
    //     <button onClick={incrementcount}>Increment</button>
    //   </div>
    // }

// class based components
// class Mycomponent extends React.Component{
//     constructor(props){
//       super(props)
//   this.state = {count:0}
//   }

//   incrementCount = () =>{
//     this.setState({count:this.state.count + 1})
//   }

//   render(){
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     )
//   }
//   }
