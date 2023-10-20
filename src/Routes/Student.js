import { useState } from "react"
import { Link } from "react-router-dom"

function Student(){
    const [data]=useState([
        {name: "Nishtha",id :1},
        {name: "lyra",id :2},
        {name: "Riya",id :3},
        {name: "Ram",id :4},
        {name: "Mansi",id :5},
        {name: "Isha",id :6},
    ])
    return(
        <>
        <h1>This is Student Page</h1>
        {data.map((item)=>{
            return(
               
<Link to={'/user/'+item.name} state={"EA24"} >  <h3>{item.name}</h3>
</Link>
                
            )
        })}
        </>
    )
}
export default Student