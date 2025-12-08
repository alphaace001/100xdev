import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom,evenSelector } from "./store/atoms/count"



function App() {

  return (
      <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      </>
    )
  }

function Count() {
  console.log("Count Rendered")
  return (
  <>
    <CountRender />
    <Buttons/>
    <Message />
  </>
  )
}

function Message() {
  const isEven = useRecoilValue(evenSelector)
  console.log("Message Rendered")
  return <h2>{isEven ? "It is even" : "Not even"}</h2>
}

function CountRender() {
  const count = useRecoilValue(countAtom)
  return <h1>{count}</h1>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={()=>{setCount(count => count -1)}}>-</button>
      <button onClick={()=>{setCount(count => count +1)}}>+</button>
    </div>
  )
}

export default App
