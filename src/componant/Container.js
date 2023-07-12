import React from 'react'
import DisplayCard from './Displaycard'
import './Container.css'
const Container = (props) => {
    let xyz=props.props

  return (
    <div className='flex_box_cont'>
        {xyz.map((item,index)=> <DisplayCard item={item} key={index} /> )}
    </div>
  )
}

export default Container