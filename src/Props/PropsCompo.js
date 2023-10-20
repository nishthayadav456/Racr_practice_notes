import { useState } from "react";
import FuncCompo from "../Compo/FuncCompo";
import FunCompo from "./FunCompo";
import ClassCompo from "./ClassCompo";

function PropsCompo(){
    const [data,setData]=useState(0);
    const [data1,setData1]=useState({
name:"Nishtha",
age:21,

    });
    return(
        <>
      {/* <FunCompo data="EA24"/> */}
      {/* <FunCompo data={{name:"EA23"}}/> */}
      {/* <FunCompo data={{data,setData}}/> */}
     <ClassCompo value={{data,setData}} value2={{data1,setData1}}/>
        </>
    )
}
export default PropsCompo