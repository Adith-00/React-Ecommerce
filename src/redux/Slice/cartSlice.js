import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:[],
}

const cartSlice = createSlice({
  name: 'CartSlice',
  initialState, 
  reducers: {
    addItem: (state, action) => {
      state.value =([...state.value,action.payload]);
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
