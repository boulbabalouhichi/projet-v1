import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='nav'>
        <div className='bac'>
        <h1>Allo-Allo</h1>
        </div>
    
        <ul className='navmunu'>
        {/* <li> <link to='/'></link>home1</li>
        <li><link to='/home2'></link> home2</li>
        <li> <link to='/home3'></link>home3</li>
        <li><link to='/home4'></link> home4</li> */}
        
        </ul>
        <div className='login'> 
        <button> login</button >

        </div>
    </div>
  )
}
export default Navbar
