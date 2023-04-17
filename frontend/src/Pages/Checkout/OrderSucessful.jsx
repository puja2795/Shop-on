import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { CartProductCard } from '../../Components/CartProductCard'
import { Button } from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi'
import { BsCashStack, BsFillCheckCircleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartData } from '../../Redux/cartReducer/action'

export const OrderSucessful = () => {
  const total = localStorage.getItem("total")
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const cartData = useSelector((store) => store.cartReducer.cartData)
  useEffect(() => {

    dispatch(getCartData)


  }, [])


  
  return (
    <div>
      <Navbar />

      <div style={{ width: "65%", margin: "auto", paddingTop: "10%" }}>
        <img src="https://images.meesho.com/images/marketing/1658228572478.png" />
        <div style={{ padding: "15px", borderRadius: "5px", display: "flex", width: "100%", alignItems: "center", margin: "auto", backgroundColor: "#d3f4ea", gap: "10px" }}><BsFillCheckCircleFill size="25px" color="#038d63" /><p style={{ borderRight: "1px solid gray", padding: '10px' }}>Thank you for shopping with us!</p><p> ID :#{Date.now()}</p> </div>
      </div>
      <div className='cart-container'>
        <div className='cart-products'>



          {
            cartData.map((el, i) => (
              <CartProductCard key={i} {...el} id={i} />
            ))
          }

          {/* <div className='c-products'>
          <div style={{ display: "flex", justifyContent: "space-around" }}> <h3>Address</h3></div>
          <div className='address'>
            <h2>Name</h2>
            <p>location</p>
            <p>state</p>
            <p>pincode</p>
            <p>number</p>
            <button>Edit</button>
            <button>Dilever to this address</button>
          </div>

        </div> */}
          {/* <div style={{ padding: "15px", borderRadius: "5px", display: "flex", width: "80%", alignItems: "center", margin: "auto", backgroundColor: "#d3f4ea", justifyContent: "space-between" }}><p style={{ display: "flex", gap: "10px" }}><BsCashStack size="25px" color="#038d63" />Cash on Delivery </p><BsFillCheckCircleFill size="25px" color="#038d63" /></div> */}
        </div>

        {cartData.length > 0 && <div className='order-summry'>
          <p className='price-details'>Price Details</p>
          <div className='price-details'><p >Total product Price</p><span style={{ display: "flex", alignItems: "center" }} ><BiRupee />{total}</span>   </div>

          <div style={{ display: "flex", justifyContent: "space-between", }}><p style={{ fontSize: "18px", fontWeight: "600" }}>Order total</p><p style={{ display: "flex", alignItems: "center" }} ><BiRupee />{total}</p>   </div>
          <div style={{ backgroundColor: "whitesmoke" }}><p>Clicking on Continue will not deduct any money</p></div>
          <Button style={{ width: "100%", padding: "10px", backgroundColor: "#FC4689", color: "white" }} > Download App </Button>
          <Button style={{ width: "100%", padding: "10px", backgroundColor: "#FC4689", color: "white" }} onClick={() => navigate("/")}> Continue Shopping </Button>
          <img src="https://images.meesho.com/images/marketing/1588578650850.webp" />
        </div>}
      </div>

    </div>
  )
}
