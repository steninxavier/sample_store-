import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const MainContainer= styled.div`
display:flex ;
height: 140px ;
`

const Container= styled.div`
flex:3 ;
display: flex;
align-items: center ;
justify-content:space-around ;
`;

const Logo= styled.div`
flex:2 ;
display: flex ;
align-items: center ;
justify-content:center ;
font-size:40px ;
font-weight:700;
text-shadow: 2px 2px lightgrey;
`
const Menu = styled.div`
cursor: pointer;
font-size: 25px ;
font-weight: 500 ;
&:hover{
  color: lightskyblue ;
}
`

const Header = () => {
  return (
    <MainContainer>
    <Logo> <Link to="/" style={{color:"black",textDecoration: "none"}}>SAMPLE STORE  </Link></Logo>
        <Container>
      <Link to="/products/electronics" style={{color:"black",textDecoration: "none"}}><Menu>Electronics</Menu></Link>
      <Menu>Jewelery</Menu>
      <Menu> Men's clothing</Menu>
      <Menu> Women's clothing</Menu>
        </Container>
    </MainContainer>
    
  )
}

export default Header