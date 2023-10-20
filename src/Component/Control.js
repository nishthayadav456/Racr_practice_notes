import { useState } from "react"

function Control(){
    const [data,setData]=useState(null)
    return(
        <>
        <input type='text' onChange={(e)=>setData(e.target.value)}/>
        {data}
        </>
    )
}
export default Control