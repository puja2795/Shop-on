
import React from 'react'

import '../Cart/cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { RxDividerVertical } from 'react-icons/rx'
import { CartProductCard } from '../../Components/CartProductCard'
import { Button, Divider } from '@chakra-ui/react'
import { BsCashStack, BsFillCheckCircleFill } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import { Navigate } from 'react-router-dom'
export const Payment = () => {
  return (

    <div>
    <CartNavbar/>
  <div className='cart-container'>
    <div className='cart-products'>
    <div style={{display:"flex" ,justifyContent:"space-around"}}> <h3>Payment Method</h3><h3>+ Add New Address</h3></div>
  <div style={{display:"flex",width:"80%",alignItems:"center",margin:"auto"}}>
<p style={{width:"40%"}}>PAY IN CASH</p>
<Divider orientation='horizontal' p={1}/>
  </div>
  <div style={{padding:"15px",borderRadius:"5px",display:"flex",width:"80%",alignItems:"center",margin:"auto",backgroundColor:"#d3f4ea",justifyContent:"space-between"}}><p style={{display:"flex",gap:"10px"}}><BsCashStack size="25px"color="#038d63"/>Cash on Delivery </p><BsFillCheckCircleFill size="25px" color="#038d63"/></div>
  
    </div>
  
    {   <div className='order-summry'>
<p className='price-details'>Price Details</p>
<div className='price-details'><p >Total product Price</p><span style ={{display:"flex",alignItems:"center"}} ><BiRupee/>0</span>   </div>

<div style ={{display:"flex",justifyContent:"space-between",}}><p style ={{fontSize:"18px",fontWeight:"600"}}>Order total</p><p style ={{display:"flex",alignItems:"center"}} ><BiRupee/></p>   </div>
<div style={{backgroundColor:"whitesmoke"}}><p>Clicking on Continue will not deduct any money</p></div>
  <Button style={{width:"100%",padding:"10px",backgroundColor:"#FC4689",color:"white"}} > continue</Button>
  <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
  </div>}
   
  </div>
  
      </div>
  )
}
