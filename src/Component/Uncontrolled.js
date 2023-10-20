import React, { useRef } from 'react'

 const Uncontrolled =()=> {
    const refData=useRef(null);
    console.log(refData)
    const handleSubmit=(e)=>{
  e.preventDefault()
  console.log('Hello' ,refData.current.value)
  refData.current.focus()  //(manipulate the data with dom )input field will focus itself if we r clicking the submit button
  refData.current.style.backgroundColor="red" //(backgorund color will also change through useRef hook)
    }
 
    return (
      <>
     <form onSubmit={handleSubmit}>
        <input type='text' ref={refData}/>
        <button>Submit</button>
        </form>
      </>
        
    
    )
  
}
export default Uncontrolled