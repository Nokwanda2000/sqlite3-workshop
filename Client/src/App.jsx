import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
const[list,setList] =useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000').then((res)=>{
     setList(res.data)
    }).catch((error)=>{
      console.log(error,'Oops crashed')

    })
  },[]);
  console.log(list)

  return (
    <>
   
    </>
  )
}

export default App
