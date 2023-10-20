import React, { PureComponent } from 'react'

 class PureCompo extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    console.log("this is render..")
    return (
      <div>
        <h3>{this.state.count}</h3>
     <button onClick={()=>this.setState({count : this.state.count +1})}>Click Me</button>        
      </div>
    )
  }
}
export default PureCompo