import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:true,
}

export const authSlice =createSlice({
    name:'AuthSlice',
    initialState,
    reducers:{
        isAuthenticated:(state)=>{
            state.value = true
        },
        isNotAuthenticated:(state)=>{
            state.value= false
        }
    }
})
export const {isAuthenticated,isNotAuthenticated}=authSlice.actions
export default authSlice.reducer