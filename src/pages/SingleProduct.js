import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css' 
const SingleProduct = ({setcart}) => {
    let [data,setData]=useState({})
    let [rating,setrating]=useState({})
    let {id} = useParams();
    // console.log(id)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(xyz=>{
          setrating(xyz.rating)
         return setData(xyz)})
    },[])

    function addtocart(){
      console.log("added")
      setcart((cart)=>[...cart,data])
    }

  return (
      <div className='singleproduct'>
        <div className='imgparents'><img className='singleproductimg' src={data.image} /></div>
        <div className='productdetail'>
          <div><h2 style={{color:'red'}}>Product  : {data.id} </h2></div>
          <div style={{fontSize:'25px'}}> Title : {data.title}</div>
          <div><span style={{color:'red'}} >Description:</span>{data.description}</div>
          <div>category : {data.category}</div>
          <div><span style={{color:'red'}}>Rating :</span> {rating.rate} - ({rating.count})</div>
          <button onClick={addtocart}>Add to cart...</button>
        </div>
      </div>
  )
}

export default SingleProduct