import React from 'react'
import DisplayCard from '../componant/Displaycard'
import Cardforcart from '../componant/Cardforcart'
const Cart = (props) => {
  console.log(props.cart)
  let x=props.cart
  return (
    <div>
      {x.map((item,index)=><Cardforcart item={item} key={index} />)}
    
    </div>
  )
}

export default Cart