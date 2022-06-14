import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Product = () => {
    const products= useSelector( (state)=> state.product.product)
    console.log(products)
    
  return (
    <div>
      {products.map((product)=>(
        <>
        <h1>{product.title}</h1>
        <img src={product.image}/>
        </>
      ))}
        
    </div>
  )
}

export default Product