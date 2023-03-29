import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from './Cart/Cart'
import { Address } from './Checkout/address'
import { Payment } from './Checkout/payment'
import { Home } from './Home'
import { Product } from './Product'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/cart" element={<Cart/>} />
        <Route path ="/checkout/address" element={<Address/>} />
        <Route path ="/checkout/payment" element={<Payment/>} />
        <Route path="/product" element={<Product />} />
    </Routes>
  )
}
