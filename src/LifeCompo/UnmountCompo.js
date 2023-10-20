import { Component } from "react";

class UnmountCompo extends Component{
    constructor(){
        
        super();
        console.log("This is Constructor")
        this.state={
            count:true
        }
    }
    render(){
        return(
            <>
            <h1>This is unmounting Component method</h1>
            <p>{this.state.count? <UnmountData/>: ""}</p>
            <button onClick={()=>this.setState({count: !this.state.count})}>Show/Hide</button>
            </>
        )
    }
}
export default UnmountCompo

class UnmountData extends Component{
    componentWillUnmount(){
        alert("This is Unmounting phase")
    }
    render(){
        return(
            <>
            <h1>This is Child Component</h1>
            </>
        )
    }
}
export {UnmountData} //name export