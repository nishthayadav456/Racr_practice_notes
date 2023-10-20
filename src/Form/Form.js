import { Component } from "react";

class Form extends Component{
    constructor(){
        super();
        this.state={
            name: " ",
            password: " "
        }
        console.log(this.state , this.password)
    }
 handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
 }
 handleSubmit=(e)=>{

 }
    render(){
        return(
            <>
            <h1>This is Form</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={this.handleChange} name="name"/> <br/>
                <label htmlFor="pass">Password</label>
                <input type="text" id="pass" onChange={this.handleChange} name="name"/> <br/>
                <button>
                    Submit
                </button>


            </form>
            </>
        )
    }
}
export default Form