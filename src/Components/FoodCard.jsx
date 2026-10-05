import React from 'react'

const FoodCard = (props) => {
  return (
    <div>
        <h3>food cart..</h3>
        <p>{props.name}</p>
        <p>₹{props.price}</p>
        <img src={props.image} width="200" />
    </div>
  )
}

export default FoodCard