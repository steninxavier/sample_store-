import React from 'react'
import Productlist from '../components/Productlist'
import Header from '../components/Header';
import styled from 'styled-components';

const Container= styled.div`
overflow-x: hidden;
`;

const Home = () => {
  return (
  <Container>
    <Header/>
     <Productlist/>
   </Container>
   
  )
}

export default Home