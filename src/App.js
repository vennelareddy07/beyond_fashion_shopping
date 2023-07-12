import React, { useState } from 'react'
import {Route,Routes,BrowserRouter, json} from 'react-router-dom'
import Navbar1 from './componant/Navbar1'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
const App = () => {
  let x= JSON.parse( localStorage.getItem('tcart')) || []
  let [cart,setcart]=useState(x)

  return (
    <BrowserRouter>
    <Navbar1/>
    <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Cart cart={cart} />} path='/cart'/>
        <Route element={<SingleProduct setcart={setcart}/>} path='/products/:id'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App