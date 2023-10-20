
import  React,{useEffect,useState} from "react"
function UseEffectHook(){
    const [count,setcount]=useState(0);
    const [data,setData]=useState(100)
    useEffect(()=>{
        console.log("useEffect 1 is mount") //mounting phase 
    },[count]) // this useeffect will call if setvariable is updated
    useEffect(()=>{
        console.log("useEffect 2 is mount") //mounting phase
    })
    useEffect (()=>{
        console.log("useeffect 3 is call")
    })
    return(
        <>
        <h1>This is useEffect Hooks</h1>
        <h2>count:{count}</h2>
        <h2>Data :{data}</h2>
        <button onClick={()=> setcount(count+1)}> count</button>
        <button onClick={()=> setData(data+1)}> Data</button>
        </>
    )
}
export default UseEffectHook