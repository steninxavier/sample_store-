import React from 'react'

const Product = ({key, title, description,price,image}) => {
  return (
    <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
         <img src={image}/>
         <h6>{price}</h6>
    </div>
  )
}

export default Product