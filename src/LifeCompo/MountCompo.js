import { Component } from "react";

class MountCompo extends Component{
    constructor(){
        super();
        console.log("This is constructor")
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("This is ComponentDidMount Method")
    }
    render(){
        console.log("This is render")
        return(
            <>
            <h1>This is Mount Component Method</h1>
            <h2>Counter Value: {this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
            </>
        )
    }
}
export default MountCompo