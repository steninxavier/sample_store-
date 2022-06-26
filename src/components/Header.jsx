import React from 'react'
import styled from 'styled-components'

const MainContainer= styled.div`
display:flex ;
background-color: whitesmoke ;
height: 70px ;
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
text-shadow: 2px 2px blueviolet;
`
const Menu = styled.div`
cursor: pointer;
font-size: 25px ;
font-weight: 500 ;

`

const Header = () => {
  return (
    <MainContainer>
        <Logo>SAMPLE STORE</Logo>
        <Container>
      <Menu>Electronics</Menu>
      <Menu>Jewelery</Menu>
      <Menu> Men's clothing</Menu>
      <Menu> Women's clothing</Menu>
        </Container>
    </MainContainer>
    
  )
}

export default Header