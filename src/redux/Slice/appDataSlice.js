import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:[],
}

const AppdataSlice = createSlice({
  name: 'AppdataSlice',
  initialState, 
  reducers: {
    addData: (state, action) => {
      state.value =([action.payload]);
    },
  },
});

export const { addData} = AppdataSlice.actions;
export default AppdataSlice.reducer;