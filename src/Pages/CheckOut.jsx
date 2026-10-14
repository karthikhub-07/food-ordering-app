import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckOut = ({ cart, setCart }) => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [payment, setPayment] = useState('Cash on Delivery')

  const totalPrice = cart.reduce((total, food) => {
    return total + food.price
  }, 0)

  const placeOrder = (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert('Your cart is empty!')
      navigate('/menu')
      return
    }

    alert('Order placed successfully! Thank you, ' + name)

    setCart([])
    navigate('/')
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map((food, index) => (
        <p key={index}>
          {food.name} - ₹{food.price}
        </p>
      ))}

      <h3>Total Amount: ₹{totalPrice}</h3>

      <form onSubmit={placeOrder}>
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          title="Enter a 10-digit phone number"
          required
        />

        <label>Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your delivery address"
          required
        />

        <label>Payment Method</label>
        <select
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default CheckOut