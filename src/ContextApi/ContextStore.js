import { createContext, useState } from "react";
import First from './First'
import Second from './Second'
 export const Store=createContext();
function ContextStore(){
const [data,setData]=useState({
    name:'Nishtha',
    age:22
})
return(
    <>
    <Store.Provider value={{data,setData}}>
 <First/>
 <Second/>
    </Store.Provider>
    </>
)
}
export default ContextStore