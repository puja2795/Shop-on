import React, { useEffect, useState } from "react";

import "../Cart/cart.css";
import { CartNavbar } from "../../Components/CartNavbar";
import { RxDividerVertical } from "react-icons/rx";
import { CartProductCard } from "../../Components/CartProductCard";
import { Button, Divider } from "@chakra-ui/react";
import { BsCashStack, BsFillCheckCircleFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, orderCartDataSucessAction, orderItems } from "../../Redux/cartReducer/action";

export const Summary = () => {
  const total = localStorage.getItem("total");
 

  const dispatch = useDispatch();

  const cartData = useSelector((store) => store.cartReducer.cartData);
  const orderData = useSelector((store) => store.cartReducer.orderData);
  console.log(orderData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartData);
  
  }, []);

  const handleOrderSuccessPAge = () => {
    dispatch(orderItems)
   
    navigate("/checkout/orderSuccesful")
  };
 
  return (
    <div>
      <CartNavbar />
      <div className="cart-container">
       
          <div className="cart-products">
            <h3 className="form-title flex">Product Details</h3>

            <h2 className="flex" style={{size:"12px",font:"bold"}}> Estimated Delivery by Thursday, 20th Apr</h2>
            {cartData.map((el, i) => (
              <CartProductCard key={i} {...el} id={i} />
            ))}


          </div>
         

        {
          <div className="order-summry">
            <p className="price-details">Price Details</p>
            <div className="price-details">
              <p>Total product Price</p>
              <span style={{ display: "flex", alignItems: "center" }}>
                <BiRupee />
                {total}
              </span>{" "}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>Order total</p>
              <p style={{ display: "flex", alignItems: "center" }}>
                <BiRupee />
                {total}
              </p>{" "}
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <p>Clicking on Continue will not deduct any money</p>
            </div>
            <Button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#FC4689",
                color: "white",
              }}
              onClick={handleOrderSuccessPAge}
            >
              {" "}
            Place Order
            </Button>
            <img src="https://images.meesho.com/images/marketing/1588578650850.webp" />
          </div>
        }
      </div>
    </div>
  );
};
