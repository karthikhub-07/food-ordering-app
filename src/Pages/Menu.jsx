import React from 'react'
import FoodCard from '../Components/FoodCard'

import biryaniImg from '../assets/images.jpg'
import muttonImg from '../assets/images (1).jpg'
import chickenImg from '../assets/images (2).jpg'
import fishImg from '../assets/images (3).jpg'

const Menu = ({ cart, setCart }) => {

  const foods = [
    {
      id: 1,
      name: 'Biryani',
      price: 250,
      image: biryaniImg
    },
    {
      id: 2,
      name: 'Mutton Curry',
      price: 550,
      image: muttonImg
    },
    {
      id: 3,
      name: 'Chicken 65',
      price: 450,
      image: chickenImg
    },
    {
      id: 4,
      name: 'Fish Curry',
      price: 150,
      image: fishImg
    }
  ]

  const addToCart = (food) => {
    setCart([...cart, food])
    alert(food.name + ' added to cart!')
  }

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <p>Choose your favourite food</p>

      <div className="food-list">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            addToCart={() => addToCart(food)}
          />
        ))}
      </div>
    </div>
  )
}

export default Menu