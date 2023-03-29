import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './Cart/Cart'
import { Home } from './Home'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>} />
        <Route path ="/checkout/address" element={<Cart/>} />
        <Route path ="/checkout/payment" element={<Cart/>} />
        
    </Routes>
  )
}
