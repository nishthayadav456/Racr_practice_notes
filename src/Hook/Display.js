import {memo} from 'react'
function Display({session}){
    console.log("callback component")
    return(
        <>
<h1>Hello</h1>
<button onClick={session}>increase </button>
        </>
    )
}
export default memo (Display)