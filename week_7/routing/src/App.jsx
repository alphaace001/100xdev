// Suspense API, asynchronous component fetching, asynchronous data fetting
import React ,{ lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import {Landing} from './components/Landing' without default export
// import Landing from './components/Landing' with default export
// import {Dashboard} from './components/Dashboard'
const Landing = lazy(()=> import('./components/Landing'))
const Dashboard = React.lazy(()=> import('./components/Dashboard'))

function App() {
  return(
    <div>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path='/Dashboard' element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>} />
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
const navigate = useNavigate();
  return (
    <div>
      {/* <div style={{background:"black",color:"white"}}> Hi this is the top bar</div> remain constant throughout the website */}
      <div>
        <button onClick={()=>{
          // window.location.href="/" /* This does a hard reload of the page i.e it a full page refresh and not a client side navigation */
          navigate("/");
        }}>Landing Page</button>

        <button onClick={()=>{
          // window.location.href="/Dashboard"
          navigate("/Dashboard");
        }}>Dashboard</button>
      </div>
    </div>
  )
}

export default App
