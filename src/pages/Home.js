import React, { useEffect, useState } from 'react'
import Navbar2 from '../componant/Navbar2'
import Filter from '../componant/Filter'
import './Home.css'
import Container from '../componant/Container'
const Home = () => {
  let [data,setData]=useState([])
  let [displayData,setDisplaydata]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json())
    .then(x=>{setData(x);setDisplaydata(x)})
  },[])

  

  function prodfilt(x){
if (x=='resetToDef'){
  setDisplaydata(data)
}
else{

    let xyz=data.filter((item)=>item.category==x)
    setDisplaydata(xyz)

}
  }
  return (
    <>
    <Navbar2  prodfilt={prodfilt} />
    <div className='flex_box' >
      <div className='filter_box'><Filter/> </div>
      <div className='CBOX'><Container  props={displayData} /></div>
    </div>
    </>
  )
}

export default Home