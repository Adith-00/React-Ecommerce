import { createSlice } from "@reduxjs/toolkit";
import { Heart } from "../../assets/images/images";

const initialState={
    value:Heart
}

export const wishListTooglerSlice =createSlice({
    name:"Wishlisttoogler",
    initialState,
    reducers:{
        setWishlist:(state,action)=>{
            state.value=action.payload;
        }

    }
       

})
export const {setWishlist}=wishListTooglerSlice.actions
export default wishListTooglerSlice.reducer;