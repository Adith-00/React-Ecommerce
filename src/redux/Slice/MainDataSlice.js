import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}
export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProducts:(state,action)=>{
            state.value=action.payload
        }
    }
})
export const {addProducts}=productsSlice.actions;
export default productsSlice.reducer;