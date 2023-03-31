
 import React from 'react'

import './cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { RxDividerVertical } from 'react-icons/rx'
import { CartProductCard } from '../../Components/CartProductCard'
import { Button, Divider, Heading, Stack, Text ,Box} from '@chakra-ui/react'

export const Cart = () => {
  return (
    <div>
  <CartNavbar/>
<div className='cart-container'>
  <div className='cart-products'>
  <div style={{display:"flex"}}> <div style={{borderRight:"1px solid gray",width:"15%",fontWeight:"bold",fontSize:"25px"}}>Cart</div><div style={{width:"20%",fontWeight:"bold",fontSize:"25px",color :"gray"}}>0 Items</div></div> 

<CartProductCard/>
  </div>

  <div className='order-summry'>
<h1>Price Details</h1>
<div style ={{display:"flex",justifyContent:"space-between"}}><div>Total product Price</div><span>200</span>   </div>
<hr></hr>
<div style ={{display:"flex",justifyContent:"space-between",}}><p>Order total</p><p>200</p>   </div>
<div style={{backgroundColor:"whitesmoke"}}><p>Clicking on ‘Continue’ will not deduct any money</p></div>
  <button style={{width:"100%",padding:"10px"}}> continue</button>
  </div>
</div>

    </div>
  )
}
