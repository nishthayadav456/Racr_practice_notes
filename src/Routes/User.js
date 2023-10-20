import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"

function User(){
    const {name}=useParams()
    console.log(name)
    const loc=useLocation();
    console.log(loc)
    return(
        <>
        <h1>This is a example of dynamic routes:{name}</h1>
        <h4>Name:{loc.state}</h4>
        </>
    )
}
export default User