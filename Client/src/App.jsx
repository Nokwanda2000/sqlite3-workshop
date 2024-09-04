import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import GetALLlusers from './component/getALLlusers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Getuserspage from './pages/Getuserspage';
import Nopage from './pages/nopage';
import Layout from './pages/Layout';
import Addbook from './pages/addbook';
import Edit from './pages/edit';
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

 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Layout />}>

    <Route path='/' element={<Getuserspage />}>
      <Route path=":id" element={<Edit />} />
    </Route>
    <Route path="addbook" element={<Addbook />} />
    <Route path="*" element={<Nopage />} />
  </Route>
</Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
