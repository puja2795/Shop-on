import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Admin/Pages/AddProduct'
import Dashboard from '../Admin/Pages/Dashboard'
import Favourites from '../Admin/Pages/Favourites'
import Settings from '../Admin/Pages/Settings'
import Store from '../Admin/Pages/Store'
import { Cart } from '../Pages/Cart/Cart'
import { Edit } from '../Pages/Cart/Edit'
import { Address } from '../Pages/Checkout/address'
import { Payment } from '../Pages/Checkout/payment'
import { Home } from '../Pages/Home/Home'
import { AllProduct } from '../Pages/Product/AllProduct'
import { WomenSweater } from '../Pages/Product/WomenSweater'

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout/address" element={<Address />} />
      <Route path="/checkout/payment" element={<Payment />} />
      <Route path="/products" element={<AllProduct />} />

      <Route path="/admin" element={<AdminPage />} />


      <Route path='/womenSweater' element={<WomenSweater />} />


      {/* Admin Routes */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/store' element={<Store />} />
      <Route path='/add-products' element={<AddProduct />} />
      <Route path='/favourites' element={<Favourites />} />
      <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}
