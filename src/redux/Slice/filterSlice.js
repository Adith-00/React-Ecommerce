import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    value:{
        minPrice:0,
        maxPrice:2000,
        color:'',
        size:''
    },
}

const FilterSlice = createSlice({
  name: 'FilterSlice',
  initialState, 
  reducers: {
    setMinprice:(state,action)=>{
        state.minPrice = action.payload
    },
    setMaxprice:(state,action)=>{
        state.maxPrice=action.payload
    },
    setColor:(state,action)=>{
        state.color=action.payload
    },
    setSize:(state,action)=>{
        state.size=action.payload
    },
    setDefaultfilter:(state)=>{
        state.minPrice = 0
        state.maxPrice=2000
        state.color=''
        state.size=''
    }
  },
});

export const {setMinprice,setMaxprice,setColor,setSize,setDefaultfilter } = FilterSlice.actions;
export default FilterSlice.reducer;
