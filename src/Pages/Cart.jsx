import React from 'react'
import CartItem from '../Components/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = ({ cart }) => {
  const navigate = useNavigate()

  const totalPrice = cart.reduce((total, food) => {
    return total + food.price
  }, 0)

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate('/menu')}>
            Explore Menu
          </button>
        </div>
      ) : (
        <div>
          {cart.map((food, index) => (
            <CartItem
              key={index}
              name={food.name}
              price={food.price}
              image={food.image}
            />
          ))}

          <h2>Total Amount: ₹{totalPrice}</h2>

          <button onClick={() => navigate('/checkOut')}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart