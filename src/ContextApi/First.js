import { useContext } from 'react'
import {Store} from './ContextStore'

function First(){
    
    const contextData=useContext(Store)
    console.log(contextData)
    return(
        <>
        <h1>{contextData.data.name}</h1>
        </>
    )
}
export default First