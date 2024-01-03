import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:[],
}

const OderSlice = createSlice({
  name: 'OderSlice',
  initialState, 
  reducers: {
    addOder: (state, action) => {
      state.value = [...state.value,...action.payload]
    },
  },
});

export const { addOder} = OderSlice.actions;
export default OderSlice.reducer;
