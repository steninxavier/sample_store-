import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import Electronicssingle from './Electronicssingle'
import { useDispatch } from 'react-redux'
import {elecitem} from '../redux/ElectronicSlice'

const Electronics = () => {
const dispatch= useDispatch();
       const electronicsList=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products/category/electronics")
        dispatch(elecitem(response.data))
      }
    useEffect(()=>{
        electronicsList()
    },[])
  return (
    <div>
     <Electronicssingle/>
    </div>
  )
}

export default Electronics