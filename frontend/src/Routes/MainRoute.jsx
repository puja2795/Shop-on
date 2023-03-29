import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../Pages/Cart/Cart'
import { Address } from '../Pages/Checkout/address'
import { Payment } from '../Pages/Checkout/payment'
import { Home } from '../Pages/Home'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>} />
        <Route path ="/checkout/address" element={<Address/>} />
        <Route path ="/checkout/payment" element={<Payment/>} />
        
    </Routes>
  )
}
