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
import { AiOutlineLine } from "react-icons/ai";
export const CartNavbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="cart-nav">
      <Link to="/">
        <div style={{ marginLeft: "15px" }}>
          <img
            src="https://th.bing.com/th/id/OIP.jHb2K9iBd6eLtuKBCiRERgHaB3?w=343&h=88&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            width="40%"
          />
        </div>
      </Link>

      <div>
        <Stack direction="row" >
          {location.pathname == "/cart" ? (
            <div>
              <Bs1Circle className="nav-icon" size={"20px"} color="blue" />
              <p>Cart</p>
            </div>
          ) : (
<div>
<BsFillCheckCircleFill
              className="nav-icon"
              size={"20px"}
              color="blue"
            />
            <p>Cart</p>
</div>
          )}
          {location.pathname == "/cart" ? (
             <AiOutlineLine size={"25px"}/>
          ) : (
            <AiOutlineLine size={"25px"}/>
          )}
          {location.pathname == "/checkout/address" ? (
            <div>
              <Bs2Circle className="nav-icon" size={"20px"} color="blue" />
              <p>Address</p>
            </div>

          ) : location.pathname == "/cart" ? (
            <div>
              <Bs2Circle className="nav-icon" size={"20px"}  />
              <p>Address</p>
            </div>
          ) : (
            <div>
             <BsFillCheckCircleFill
              className="nav-icon"
              size={"20px"}
              color="blue"
            />
            <p>Address</p>
            </div>
           
          )}
          <Divider  p={6} orientation="horizontal"  />
          {location.pathname == "/checkout/payment" ? (
            <div>
              <Bs3Circle className="nav-icon" size={"20px"} color="blue" />
              <p>Payment</p>
            </div>
          
          ) : location.pathname == "/checkout/address" ||
            location.pathname == "/cart" ? (
              <div>
              <Bs3Circle className="nav-icon" size={"20px"}  />
              <p>Payment</p>
            </div>
          ) : (
            <div>
 <BsFillCheckCircleFill
              className="nav-icon"
              size={"20px"}
              color="blue"
            />
            <p>Payment</p>
            </div>
           
          )}
          <Divider  p={6} orientation="horizontal"  />
          <div>
          <Bs4Circle className="nav-icon" size={"20px"} />
          <p>Summary</p>
          </div>
        
        </Stack>


        {/* <Stack direction='row' style={{ border: "1px solid red" }}>
          <p>Cart</p>
          <p>Address</p>
          <p>Payment</p>
          <p> Summary</p>

        </Stack> */}

      </div>

    </div>
  );
};
