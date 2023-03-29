
import React from 'react'

import './cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { RxDividerVertical } from 'react-icons/rx'
import { CartProductCard } from '../../Components/CartProductCard'
export const Address = () => {
  return (
    <div>
  <CartNavbar/>
<div className='cart-container'>
  <div className='cart-products'>
  <div style={{display:"flex"}}> <div style={{borderRight:"1px solid gray",width:"15%",fontWeight:"bold",fontSize:"25px"}}>Cart</div><div style={{width:"20%",fontWeight:"bold",fontSize:"25px",color :"gray"}}>0 Items</div></div> 

<CartProductCard/>
  </div>

  <div className='order-summry'>
<h1>price</h1>
  </div>
</div>

    </div>
  )
}
