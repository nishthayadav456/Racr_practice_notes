import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
function AxiosCompo(){
    const APIkey='f9fc8006bbf689b5f90e9855e770a745'
    const [name,setName]=useState('')
    const[values,setValues]=useState('')
    const[cityName,setCityName]=useState('')
    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
        .then((response)=>setValues(response.data))
        .catch((err)=>console.log(err))
    },[cityName])
    console.log(values)
    const handleClick=()=>{
 setCityName(name)
    }
   
    return(
        <>
        <h1>Axios</h1>
        <h1>City Name {name}</h1>
        <label>City Name</label>
        <input type='text' placeholder="Enter city Name" onChange={(e)=>setName(e.target.value)}/><br/>
        <button onClick={handleClick}>Search</button>
        <h1>City Name: {values && values.name}</h1>
        <h1>City Temperature:{values && values.main.temp-273}deg</h1>
        </>
    )
}
export default AxiosCompo