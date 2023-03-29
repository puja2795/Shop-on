
import React from 'react'

import '../Cart/cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { Spacer } from '@chakra-ui/react'

export const Address = () => {
  return (
    <div>
  <CartNavbar/>
<div className='cart-container'>
  <div className='cart-products'>
  <div style={{display:"flex" ,justifyContent:"space-around"}}> <h3>Select dilevery Address</h3><h3>+ Add New Address</h3></div>
<div className='address'>
  <h2>Name</h2>
  <p>location</p>
  <p>state</p>
  <p>pincode</p>
  <p>number</p>
  <button>Edit</button>

  <button>Dilever to this address</button>
</div>

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
