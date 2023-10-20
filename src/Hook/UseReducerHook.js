import { useReducer } from "react"
const initialState=0;
const reducer=(state,action)=>{
switch (action){
    case 'Increment':
        return state+1
        case 'Decrement':
        return state-1
        default:
           return  state
}
}
function UseReducerHook(){
   const[count,dispatch]= useReducer(reducer,initialState)
    return(
        <>
        <h1>The value of count:{count}</h1>
        <button onClick={()=>dispatch('Increment')}>Increment</button>
        <button onClick={()=>dispatch('Decrement')}>Decrement</button>
        </>
    )
}
export default UseReducerHook