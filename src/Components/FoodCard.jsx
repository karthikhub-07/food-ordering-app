import React from 'react'

const FoodCard = ({ name, price, image, addToCart }) => {
  return (
    <div className="food-card">
      <img src={image} alt={name} width="200" />

      <h3>{name}</h3>

      <p>Price: ₹{price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default FoodCard