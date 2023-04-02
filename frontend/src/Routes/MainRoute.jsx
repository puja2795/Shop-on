import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../Admin/AdminPage'
import { Cart } from '../Pages/Cart/Cart'
import { Address } from '../Pages/Checkout/address'
import { Payment } from '../Pages/Checkout/payment'
import { Home } from '../Pages/Home/Home'
import { AllProduct } from '../Pages/Product/AllProduct'
import { WomenSweater } from '../Pages/Product/WomenSweater'
import Login from '../Pages/Authentication/Login'
import Signup from '../Pages/Authentication/Signup'
import AdminLogin from '../Pages/Authentication/AdminLogin'

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path='/womenSweater' element={<WomenSweater />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      
    </Routes>
  )
}
