
import React from 'react'

import '../Cart/cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { Button, Spacer } from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export const Address = () => {

  const navigate =useNavigate()
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

  {   <div className='order-summry'>
<p className='price-details'>Price Details</p>
<div className='price-details'><p >Total product Price</p><span style ={{display:"flex",alignItems:"center"}} ><BiRupee/>0</span>   </div>

<div style ={{display:"flex",justifyContent:"space-between",}}><p style ={{fontSize:"18px",fontWeight:"600"}}>Order total</p><p style ={{display:"flex",alignItems:"center"}} ><BiRupee/></p>   </div>
<div style={{backgroundColor:"whitesmoke"}}><p>Clicking on Continue will not deduct any money</p></div>
  <Button style={{width:"100%",padding:"10px",backgroundColor:"#FC4689",color:"white"}} onClick={()=>navigate("/checkout/payment")}> continue</Button>
  <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
  </div>}
 
</div>

    </div>
  )
}
