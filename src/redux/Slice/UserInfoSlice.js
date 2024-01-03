import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{
        Name:"Adith",
        E_mail:" ",
        PhoneNumber:"7592922246",
        Password: " ",

    }
}

const UserInfoSlice=createSlice({
    name:'UserInfo',
    initialState,
    reducers:{
        setAllInfo: (state, action) => {
            const { field, value } = action.payload;
            state.value[field] = value;
        },
    }

})
export const{ setAllInfo} =UserInfoSlice.actions;
export default  UserInfoSlice.reducer