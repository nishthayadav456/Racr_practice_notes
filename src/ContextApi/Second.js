import { useContext } from 'react'
import {Store} from './ContextStore'

function Second(){
    
    const contextData=useContext(Store)
    console.log(contextData)
    return(
        <>
        <h1>{contextData.data.age}</h1>
        </>
    )
}
export default Second