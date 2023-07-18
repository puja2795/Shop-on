import React from "react";
import { RxBorderSolid } from "react-icons/rx";
import {
  Bs1Circle,
  Bs2Circle,
  Bs3Circle,
  Bs4Circle,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { Box, Divider, Stack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import shop_on_logo from '../Images/shop_on_logo.png'

export const CartNavbar = () => {
  const location = useLocation();

  return (
    <div className="cart-nav">
      <Link to="/">
        <div style={{marginLeft:"20%",marginBottom:"10px"}}>
          <img
            // src="https://cdn.hevodata.com/customer/logo/8c76f62bd88177a78bb6e2810a244446.png"
            src={shop_on_logo}
            width= "80%"
          />
        </div>
      </Link>

      <Stack direction="row" style={{marginLeft:"20%"}}>
        {location.pathname == "/cart" ? (
          
          <Bs1Circle className="nav-icon" size={"100px"} color="blue" />
        
        ) : (
          <BsFillCheckCircleFill
            className="nav-icon"
            size={"100px"}
            color="blue"
          />
        )}
        {location.pathname == "/cart" ? (
          <Divider orientation="horizontal" p={6} />
        ) : (
          <Divider orientation="horizontal" p={6} style={{ colo: "blue" }} />
        )}
        {location.pathname == "/checkout/address" ? (
          <Bs2Circle className="nav-icon" size={"100px"} color="blue" />
        ) : location.pathname == "/cart" ? (
          <Bs2Circle className="nav-icon" size={"100px"} />
        ) : (
          <BsFillCheckCircleFill
            className="nav-icon"
            size={"100px"}
            color="blue"
          />
        )}
        <Divider orientation="horizontal" p={6} />
        {location.pathname == "/checkout/payment" ? (
          <Bs3Circle className="nav-icon" size={"100px"} color="blue" />
        ) : location.pathname == "/checkout/address" ||
          location.pathname == "/cart" ? (
          <Bs3Circle className="nav-icon" size={"100px"} />
        ) : (
          <BsFillCheckCircleFill
            className="nav-icon"
            size={"100px"}
            color="blue"
          />
        )}
        <Divider orientation="horizontal" p={6} />
        <Bs4Circle className="nav-icon" size={"100px"} />
      </Stack>
    </div>
  );
};
