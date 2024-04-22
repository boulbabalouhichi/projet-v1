import React from 'react'
import  './Cart.css'

function Cart(props) {
  return (
    <div className='cart'>
       <img src={props.image} alt='photo'/> 
       
       <p> { props.id}</p>
       <p> { props.name}</p>
       <p> { props.numerotelephone}</p>
         
    </div>
  )
}

export default Cart
