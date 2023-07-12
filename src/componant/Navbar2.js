import React from 'react'
import './Navbar2.css'
const Navbar2 = (props) => {

let prodfil=props.prodfilt

  function changeurlelec(){
    console.log('elec')
    prodfil("electronics")
  }
  function changeurlejew(){
    console.log('jew')

    prodfil("jewelery")
  }
  function changeurlemens(){
  console.log('men')
    prodfil("men's clothing")
   
  }
  function changeurlewomens(){
    prodfil("women's clothing")

    }
    function changetoall(){
      
      prodfil("resetToDef")
    }
  return (
    <div className='navbar2'>
      <div onClick={changetoall}>All products</div>
      <div onClick={changeurlelec} >Electronics</div>
      <div onClick={changeurlejew}>Jewelery </div>
      <div onClick={changeurlemens}>Men's Clothing</div>
      <div onClick={changeurlewomens}>Women's Clothing</div>
    </div>
  )}

export default Navbar2