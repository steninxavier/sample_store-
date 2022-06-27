import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import styled from 'styled-components'
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
height:410px ;
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
const Electronicssingle = () => {
  const products= useSelector((state)=>state.electronic.electronic)
  return (
   <MainContainer>
      {products.map((product)=>(
      
       <Container key={product.id}>
       <Heading>{product.title}</Heading>
       <Image src={product.image}/>
       <h3>$ {product.price}</h3>

       </Container>
      ))}
    </MainContainer>
  )
}

export default Electronicssingle