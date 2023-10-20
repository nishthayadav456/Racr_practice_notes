import { Component } from "react";

class UpdatingCompo extends Component{
    constructor(){
        super();
        console.log("This is Constructor")
        this.state={
            count:0
        }

    }
    componentDidUpdate(preProps,prevstate){ //not a predefined keyword it just a parameter
        console.log('This is ComponentDidupdate method')
        console.log("This is previous state",prevstate.count)
        // if(prevstate.count==2){
        //     alert("Data Match");
        // }
        if(prevstate.count !==10 && prevstate.count!==1){
            alert("Invalid")
        }
    }
    render(){
        console.log("This is render")
        return(
            <>
            <h1>This is Updating Component Method</h1>
            <h2>Counter Value:{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
            </>
        )
    }
}
export default UpdatingCompo