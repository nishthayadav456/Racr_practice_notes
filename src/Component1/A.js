
import { useState } from "react"
import B from './B'
function A(){
   const [data]=useState({name:"EA24" ,year:2023})
   
    return(
        <>
    <h1>Data:{data.name}</h1>
    <B value={data}/>
      

        
        </>
    )
}
export default A