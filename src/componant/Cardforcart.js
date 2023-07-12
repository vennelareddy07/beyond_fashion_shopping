import React from 'react'
import './Cartforcart.css'
import { Link } from 'react-router-dom'

import './Displaycard.css'
const Cardforcart = (props) => {
    let product=props.item
    console.log(props.item.id)

    // console.log(product)
  return (
    <div className='product_box' >
            <div className='product_img'><img  src={product.image} alt='products'/> </div>
            <div className='product title'><span>Product: </span><div> {product.title}</div></div>
            <div className='product'><span>Price:</span> {product.price} $</div>
            <div className='product'><span>Rating:</span>{product.rating.rate}</div>
            <div className='product_read'><span><Link to={`/products/${product.id}`}>Read more... </Link> </span></div>
            <div className='add'><button>+</button>1<button >-</button>
            <button className='remove'>Remove from cart</button></div>
    </div>
  )
}

export default Cardforcart