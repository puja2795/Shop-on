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
import { getCartData } from "../../Redux/cartReducer/action";
export const Payment = () => {
  const total = localStorage.getItem("total");


  const dispatch = useDispatch();

  const cartData = useSelector((store) => store.cartReducer.cartData);
  console.log(cartData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCartData);
  
  }, []);

  const handleSummaryPAge = () => {
    navigate("/checkout/summary")
  };

  return (
    <div>
      <CartNavbar />
      <div className="cart-container">
      
          <div className="cart-products" >
         
          <h2 className="btn-prop">
              Payment Method
              
            </h2>
            <div
            className="flex"
              style={{
                display: "flex",
                width: "80%",
                alignItems: "center",
                margin: "auto",
              }}
            >
                
              <p style={{ width: "40%" }}>PAY IN CASH</p>
              <Divider orientation="horizontal" p={1} />
            </div>
            <div
              style={{
                padding: "15px",
                borderRadius: "5px",
                display: "flex",
                width: "80%",
                alignItems: "center",
                margin: "auto",
                backgroundColor: "#d3f4ea",
                justifyContent: "space-between",
              }}
            >
              <p style={{ display: "flex", gap: "10px" }}>
                <BsCashStack size="25px" color="#038d63" />
                Cash on Delivery{" "}
              </p>
              <BsFillCheckCircleFill size="25px" color="#038d63" />
            </div>
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
              onClick={handleSummaryPAge}
            >
              {" "}
          Contine
            </Button>
            <img src="https://images.meesho.com/images/marketing/1588578650850.webp" />
          </div>
        }
      </div>
    </div>
  );
};
