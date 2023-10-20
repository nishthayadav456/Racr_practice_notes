
import { useState } from "react"
import Display from "./Display"
function CallBack(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)
    function callbackfunction(){
        console.log("Send data from child")
    }
    return(
        <>
        <Display session={callbackfunction}/>
       <h1>count value:{count}</h1>
        <h1>count value:{data}</h1>
        <button onClick={()=>setCount(count+1)} >Increment</button>
        <button onClick={()=>setData(data*2)} >decrement</button>
        </>
    )
}
export default CallBack