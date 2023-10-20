import { Component } from "react";

class ClassCompo extends Component{
    render(){
        return(
            <div class="box2">
                <h2>This is created using class component</h2>
                <p>This is done using external css</p>
                <p style={{color:"blue"}}>This is done using inline css</p>
            </div>
        )
    }
}
export default ClassCompo
