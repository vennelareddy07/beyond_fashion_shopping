import React from 'react'
import './Filter.css'
const Filter = () => {
  return (<div className='short'>
    <li className='rating'>Short by price <br/>
       <input className='radio' type='radio' name='order' value='inc'/>Increse by rate<br/>
       <input className='radio' type='radio' name='order' value='dec'/>Decrese by rate
    </li>
    <li className='rating'>Short by Rating</li>
      <input type='radio' name='rating' value='4'/>* * * *  and Above<br/>
      <input type='radio' name='rating' value='3'/>* * *  and Above<br/>
      <input type='radio' name='rating' value='2'/>* *  and Above<br/>
  </div>
  )
}

export default Filter