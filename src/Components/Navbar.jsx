import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <h2>Foodies</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/cart">Cart ({cart ? cart.length : 0})</NavLink>
        <NavLink to="/checkOut">CheckOut</NavLink>
      </div>
    </nav>
  )
}

export default Navbar