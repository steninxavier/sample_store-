import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';

const Product = () => {
  const Container= styled.div`
  display: flex ;
  flex-direction: column;
  justify-content: space-around ;
  align-items: center ;
  `;
  const Heading= styled.h1`
  color: #DEC20B;
  `;
  const Image = styled.img`
  height:500px ;
  width:500px ;
  `;
  const Price = styled.h1`
  font-size: 30px ;
  `;
  const Description = styled.h4`
  border: solid whitesmoke 3px ;
  font-size:20px ;
  `;
  const Button= styled.button`
  background-color:#DEC20B ;
  height: 40px;
  padding: 10px ;
  font-weight: bold ;
  border-radius: 20px ;
  border: none ;
  cursor: pointer;
  &:hover{
    transform: translateX(5px) ;
    background-color: whitesmoke ;
  }
  `;

  const {id}= useParams();
  const [idData,setIdData]= useState({})
  const productData=async()=>{
    const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
    setIdData(response.data)
  }
  console.log(idData)
  useEffect(()=>{
    productData();
  },[])
  return (
   <Container>
    <Heading>{idData.title}</Heading>
    <Image src={idData.image}/>
    <Price>$ {idData.price}</Price>
    <Description>{idData.description}</Description>
    <Button>CHECKOUT</Button>
   </Container>
  )
}

export default Product