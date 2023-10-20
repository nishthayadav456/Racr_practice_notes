import { useDispatch, useSelector } from "react-redux"
import { deposit, selectBal } from "./SliceCompo/Slicebank"
import { withdraw } from "./SliceCompo/Slicebank"
import { useState } from "react"

function BankUI(){
    const[data,setData]=useState({amount:0})
 const dispatch=useDispatch()
 const balance=useSelector(selectBal)
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleDeposit=()=>{
  dispatch(deposit(parseInt(data.amount)))
    }
    const handleWithdraw=()=>{
        dispatch( withdraw(parseInt(data.amount)))
    }
    return(
        <>
        <h1>Bank Application</h1>
        <h4> Amount in your bank acount:{balance}</h4>
        <input type="number" name="amount" value={data.amount} onChange={handleChange}/>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>withdraw</button>
        </>
    )
}
export default BankUI