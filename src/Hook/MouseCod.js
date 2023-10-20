import { useState,useEffect } from "react"

function MouseCode(){
    const[mousecod,setMousecod]=useState({x:0 ,y:0});
    const [width,setWidth]=useState(window.screen.width)
    console.log(mousecod) //componentdid update
    console.log(width)

    const resizescreen=()=>{
        setWidth(window.innerWidth) //data update width of the scrren will be change accordingly 
    }

  useEffect(()=>{
    window.addEventListener('resize',resizescreen)//check current screen size
  },[width])

  const mousehandle=((e)=>{  //mousehover
    setMousecod({
        x:e.clientX,
        y:e.clientY
    })
  })
  useEffect(()=>{
    window.addEventListener('mousemove', mousehandle) //check coordinate
    return(()=>{
        window.removeEventListener('mousemove',mousehandle) //unmount phase //remove ur previous event
    })
  })
    return(
        <>
        <h1>This is  a Example of Mouse Coordinate</h1>
       <h2>{width}Px</h2>
       <h2>Mouse Coordinate: X={mousecod.x}  ,Y={mousecod.y}</h2>
        {/* <button onClick={()=>()}>First</button> */}
        </>
    )
}
export default MouseCode