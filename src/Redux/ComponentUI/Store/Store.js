import { configureStore } from "@reduxjs/toolkit";
import BankSlice from "../SliceCompo/Slicebank";
const Store =configureStore({
    reducer:{
        bank:BankSlice
    }
})
export default Store