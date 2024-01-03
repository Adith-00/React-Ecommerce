import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    FirstName: '',
    SecondName: '',
    Country: '',
    CompanyName: '',
    Address: '',
    Street: '',
    city: '',
    State: '',
    PostalCode: '',
    Phone: '',
    Instruction: ''
  },

};

const AddressSlice = createSlice({
  name: 'AddressSlice',
  initialState,
  reducers: {
    setAllFields: (state, action) => {
      const { field, value } = action.payload;
      state.value[field] = value;
  },
  setFeild:(state,action)=>{
    state.value=action.payload
  }
  ,
    resetAddress: () => {
      return initialState;
    },
  },
});

export const {
  setAllFields,
  resetAddress,
  setFeild
} = AddressSlice.actions;

export default AddressSlice.reducer;
