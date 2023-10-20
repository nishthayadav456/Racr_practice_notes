import {useState} from "react";
import "./Hook.css"
function Hook(){

    const[ number,Setnumber]= useState(0)
    function handleclick(){
      Setnumber(number+1) ;
       console.log(number)
    }
    return(
        <>
        <h1>{number}</h1>
        <button onClick={(handleclick)}>Play</button>
        </>
    )
        
    
}
export default Hook;