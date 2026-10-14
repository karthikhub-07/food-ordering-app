import React from 'react'

const CartItem = ({ name, price, image }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} width="100" />

      <div>
        <h3>{name}</h3>
        <p>Price: ₹{price}</p>
      </div>
    </div>
  )
}

export default CartItem