import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Menu from './Pages/Menu'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
const AllRoutes = () => {
  const [cart, setCart] = useState([])
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu cart={cart} setCart={setCart}/>}></Route>
            <Route path='/cart' element={<Cart cart={cart}/>}></Route>
            <Route path='/checkOut' element={<CheckOut/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes