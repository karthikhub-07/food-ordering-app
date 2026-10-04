import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
     <h2>Food Ordering App</h2>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/menu'>Menu</NavLink>
     <NavLink to='/cart'>Cart</NavLink>
    </nav>
  )
}

export default Navbar