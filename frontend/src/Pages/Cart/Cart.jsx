import React, { useEffect, useState } from "react";

import "./cart.css";
import { CartNavbar } from "../../Components/CartNavbar";
import { RxDividerVertical } from "react-icons/rx";
import { CartProductCard } from "../../Components/CartProductCard";
import { Button, Divider, Heading, Stack, Text, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../Redux/cartReducer/action";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

  const [total,setTotal]=useState(0)
  
const navigate=useNavigate()
  const dispatch=useDispatch()
  const cartData =useSelector((store)=>store.cartReducer.cartData)

let totalP=0
  for(let i=0;i<cartData.length;i++){
    totalP= totalP+(cartData[i].price*(cartData[i].addedQuantity+1))

  }

    localStorage.setItem("total",totalP)

console.log(totalP)
console.log(cartData)
useEffect(()=>{

  dispatch(getCartData)

  let totalP = 0;
  for (let i = 0; i < cartData.length; i++) {
    totalP = totalP + cartData[i].price;
  }

  console.log(totalP);
  console.log(cartData);
  useEffect(() => {
    dispatch(getCartData);
  }, []);
  return (
    <div>

  <CartNavbar/>{
  cartData.length==0? 
  <div style={{width:"50%",margin:"auto",display:"flex",alignItems:"center",flexDirection:"column",paddingTop:"10%",justifyContent:"center"}}>
  <img src="https://images.meesho.com/images/pow/empty-cart.png"/>
  <Heading size={'md'}> Your cart is empty</Heading>
  <Button  style ={{color:"#FD6CA5",border:"1px solid #FD6CA5",backgroundColor:"white",margin:"10px"}}onClick={()=>navigate("/")}>View products</Button>
  </div>
 : 


  
<div className='cart-container'>
  <div className='cart-products'>
  <div className='flex'> <div className='cart-heading'>Cart</div> <div className='total-items'>{cartData.length} Items</div></div> 


{
  cartData.map((el,i)=>(
<CartProductCard key={i} {...el} id={i}/>
  ))
}

  </div>

  { cartData.length>0 && <div className='order-summry'>
<p className='price-details'>Price Details</p>
<div className='price-details'><p >Total product Price</p><span style ={{display:"flex",alignItems:"center"}} ><BiRupee/>{totalP}</span>   </div>

<div style ={{display:"flex",justifyContent:"space-between",}}><p style ={{fontSize:"18px",fontWeight:"600"}}>Order total</p><p style ={{display:"flex",alignItems:"center"}} ><BiRupee/>{totalP}</p>   </div>
<div style={{backgroundColor:"whitesmoke"}}><p>Clicking on Continue will not deduct any money</p></div>
  <Button style={{width:"100%",padding:"10px",backgroundColor:"#FC4689",color:"white"}} onClick={()=>navigate("/checkout/address")}> continue</Button>
  <img src="https://images.meesho.com/images/marketing/1588578650850.webp"/>
  </div>}
</div>

  }  </div>
  )
}
