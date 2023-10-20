import { createSlice } from "@reduxjs/toolkit";
const initialState={
    balance:0
}
const BankSlice=createSlice({
    name:"bankdetail",
    initialState,
    reducers:{
        deposit:(state,action)=>{
            state.balance+=action.payload;
        },
       withdraw:(state,action) =>{
          action.payload<=state.balance? state.balance-=action.payload: alert("Insuffiecient balance")
       }
    }
})
export const {deposit,withdraw}=BankSlice.actions;
export default BankSlice.reducer;
export const selectBal=(state)=>state.bank.balance