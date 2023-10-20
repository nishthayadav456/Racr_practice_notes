import { useNavigate } from "react-router-dom"
function Detail(){
    const nav=useNavigate()
    return(
        <>
        <h1>  This is detail page</h1>
        <button onClick={()=>nav('./about')}>Go Back</button>
 {/* <button onClick={()=>nav(-1)}>Go Back</button>   */}
        </>
    )
}
export default Detail