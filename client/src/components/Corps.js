import React from 'react'
import  './Corps.css'
import Cart from './Cart/Cart'
import { useSelector } from 'react-redux'
function Corps() {
  const data1=useSelector((store)=>store.contact?.contact)  
  console.log(data1)
  return (
    <div className='corpst'>
     <h1>Liste de contact</h1> 
     <div className='corpdata'>
     {data1?.map((cart,index)=> {
        return <Cart key={index} id={cart.id} name={cart.name} image={cart.image} numerotelephone={cart.numerotelephone}/>
     }) }
    </div>
    </div>
  )
}

export default Corps
