import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MainContainer= styled.div`
display:flex ;
flex-wrap:wrap;
align-items: center ;
justify-content: space-around ;
`
const Container = styled.div`
display:flex ;
flex-direction: column ;
align-items:center ;
justify-content:space-between ;
border: solid black 2px ;
margin:50px ;
width:370px ;
height:400px ;
cursor: pointer;
border-radius: 25px ;
&:hover{
  transform: translateY(10px);
  border: solid  whitesmoke 2px;
}
`;
const Image =styled.img`
 height: 200px;
 width:200px ;
 padding-bottom:20px ;
`
const Heading =styled.h1`
font-size: 20px;
font-weight:bold ;
padding:20px ;

`
const Product = () => {
    const products= useSelector( (state)=> state.product.product)
    console.log(products)
    
  return (
   <MainContainer>
   
      {products.map((product)=>(
        <Link to={`/product/${product.id}`} style={{color:"black",textDecoration: "none"}}>
        <Container key={product.id}>
        <Heading>{product.title}</Heading>
        <Image src={product.image}/>
        <h3>$ {product.price}</h3>

        </Container>
        </Link>
      ))}
        
    </MainContainer>
  )
}

export default Product