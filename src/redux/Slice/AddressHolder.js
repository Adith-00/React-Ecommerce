import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:[],
}

const AddressHolderSlice = createSlice({
  name: 'AddressHolderSlice',
  initialState, 
  reducers: {
    addAddresss: (state, action) => {
      state.value =([...state.value,action.payload]);
    },
    removeAddress: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const {  addAddresss, removeAddress } = AddressHolderSlice.actions;
export default AddressHolderSlice.reducer;
