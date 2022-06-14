import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { products } from '../redux/Productslice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import Product from './Product';
const Productlist = () => {
    const dispatch= useDispatch();
    const productsData=async()=>{
        const response = await axios.get("https://fakestoreapi.com/products/");
       dispatch(products(response.data));
    }
   useEffect(()=>{
        productsData();
   },[])
  return (
    <div>
    <Product/>
    </div>
  )
}

export default Productlist