
import React from 'react'

import '../Cart/cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { RxDividerVertical } from 'react-icons/rx'
import { CartProductCard } from '../../Components/CartProductCard'
export const Payment = () => {
  return (

    <div>
  <CartNavbar/>
<div className='cart-container'>
<h1>payment</h1>
  

  <div className='order-summry'>
<h1>price</h1>
  </div>
</div>

    </div>
  )
}
