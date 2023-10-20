import React ,{Component} from "react";
class ClassCompo extends Component{
    constructor(props){
        super(props)
       console.log("Hii this is a Class Compo",props);
    }
    render(){
        return(
 <>
 {this.props.value2.data1.name}
<h1>This is Class Component using props</h1>
 </>
        )
            


        }
    }

export default ClassCompo