import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
    name:'product',
    initialState:{
        product:[]
    },
    reducers:{
        products: (state,action)=>{
            state.product=action.payload
        },
    }
})

export const {products} = productSlice.actions
export default productSlice.reducer