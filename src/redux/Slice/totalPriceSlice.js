import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0
}

export const TotalPriceSlice =createSlice({
    name:"totalprice",
    initialState,
    reducers:{
        setTotalprice:(state,action)=>{
            state.value=action.payload;
        }

    }
       

})
export const {setTotalprice}=TotalPriceSlice.actions
export default TotalPriceSlice.reducer;
