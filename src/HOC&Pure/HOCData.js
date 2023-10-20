import { useState } from "react"

function HOCData(){
    const [count,setCount]=useState(0)
    return(
        <>
        <div >
        <h2>This a HOC </h2>
        <h3>Value of count is:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        </>
    )
}
export default HOCData