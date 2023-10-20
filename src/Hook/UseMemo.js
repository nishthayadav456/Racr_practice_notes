import { useMemo, useState } from "react"

function UseMemo(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)

    const call=useMemo(()=>{
        console.log("This is usememo hook")
        return count*2
    },[count])
    return(
        <>
        <h1> Data:{call}</h1>
        <h1>count value:{count}</h1>
        <h1>count value:{data}</h1>
        <button onClick={()=>setCount(count+1)} >Increment</button>
        <button onClick={()=>setData(data*2)} >decrement</button>
        </>
    )
}
export default UseMemo