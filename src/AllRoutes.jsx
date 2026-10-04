import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Menu from './Pages/Menu'
const AllRoutes = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AllRoutes