import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:[],
}

const wishListslice = createSlice({
  name: 'WishlistSlice',
  initialState, 
  reducers: {
    addWishlist: (state, action) => {
      state.value =([...state.value,action.payload]);
    },
   removeWishlit: (state, action) => {
      state.value= state.value.filter((item)=>{
        return item.id !== action.payload;
      })
    },
  },
});

export const { addWishlist,removeWishlit } = wishListslice.actions;
export default wishListslice.reducer;
