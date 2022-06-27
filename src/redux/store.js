import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Productslice'
import electronicReducer from './ElectronicSlice'

export const store= configureStore({
  reducer:{
    product: productReducer,
    electronic: electronicReducer
  }


})