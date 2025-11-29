// export default function Wrapper(){
//     return(
//         <div>
//             <CardWrapper innnercomponent={TextComponent}/>
//             <CardWrapper innnercomponent={GraphComponent}/>
//         </div>
//     )
// }

export default function Wrapper(){
    return(
        <div>
            <CardWrapper>
                <TextComponent/>
            </CardWrapper>
            <CardWrapper >
                <GraphComponent/>
            </CardWrapper>
        </div>
    )
}

function CardWrapper({children}){
  return(
    <div style={{border: "2px solid black", padding: "10px", margin: "10px"}}>
      {children}
    </div>
  )
}

function TextComponent(){
  return(
    <div>
      <p>This is a text component inside the card wrapper.</p>
    </div>
  )
}

function GraphComponent(){
  return(
    <div>
      <p>This is a graph component inside the card wrapper.</p>
    </div>
  )
}