import { useState } from "react"
import { useNavigate } from "react-router-dom"

function About(){
const Navi=useNavigate()
    return(
        <>
        <h1>This is About Page</h1>
        <h2>Hello world</h2>
        <button onClick={()=>Navi('/detail')}>Go to detail page</button>
        </>
    )
}
export default About