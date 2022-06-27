import { createSlice } from "@reduxjs/toolkit";

export const electronicsSlice= createSlice({
    name:'electronic',
    initialState:{
        electronic:[]
    },
    reducers:{
        elecitem: (state,action)=>{
            state.electronic= action.payload

        },
    }
})

export const {elecitem}= electronicsSlice.actions;
export default electronicsSlice.reducer;