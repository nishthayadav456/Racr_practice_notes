
import './Style.css';
import ClassCompo from "./Compo/ClassCompo"
import FuncCompo from "./Compo/FuncCompo"
import { Component, useState } from 'react';

function DisplayData(){
    //define a state variable using useState hooks
    const[count,setcount]=useState(10)
    console.log(count)
    return(
        <div>
            <h3>{count}</h3>
            
            {/* <button onClick={()=>setcount(!count)}>class Component</button>  */}
            
            <button onClick={()=>setcount(!count)}>Functional Component</button>
            {/* using ternary operator */}
            {/* {count? <FuncCompo/>:" "}  */}
{/* Using AND operator */}
{count && <FuncCompo/>}

{/* <ClassCompo/>  */}
        </div>
    )
}
export default DisplayData

//class Compo
class DisplayDataClass extends Component{
    constructor(){
        super();
        this.state={
            name:"RAdha"
        }
    }
    render(){
        console.log(this.state.name)
        return(
<>
<button onClick={()=>this.setState({name:!this.state.name})}>Class button</button>
{this.state.name?<ClassCompo/>:""}
</>
        )
    }
}
export  {DisplayDataClass}