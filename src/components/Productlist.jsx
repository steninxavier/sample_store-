import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';

const Productlist = () => {
    const [data,setData]= useState([]);

    const productsData=async()=>{
        const response = await axios.get("https://fakestoreapi.com/products/");
        setData(response.data);
    }
   useEffect(()=>{
        productsData();
   },[])

   console.log(data)
  return (
    <div>
        {data.map((product)=>(
            <Product  key={product.id} title={product.title} description={product.description} 
            image={product.image} price={product.price}/>
        )      
    )}
    </div>
  )
}

export default Productlist