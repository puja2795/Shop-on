import React, { useEffect, useState } from "react";

import "../Cart/cart.css";
import { CartNavbar } from "../../Components/CartNavbar";
import { Button, Divider, Heading, SkeletonCircle, SkeletonText, Spacer, Stack, useDisclosure } from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from "@chakra-ui/react";
import { updateuserDetails } from "../../Redux/cartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../Redux/AminReducer/action";
import { EditAddress } from "./EditAdress";

const initAdress = {
  name: "",
  city: "",
  state: "",
  pincode: "",
  contact: "",
  house_number: "",
  area: "",
};
export const Address = () => {
  const total = localStorage.getItem("total");
  const [dbuserData, setdbUserData] = useState([]);
  const [userAddress, setUserAddres] = useState(initAdress);
  const [showForm, setShowform] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((store) => store.adminReducer.user);
  const isLoading  = useSelector((store) => store.adminReducer.isLoading);
  console.log("hi", userData);
  const dispatch = useDispatch();

   
  const { isOpen, onOpen, onClose } = useDisclosure()

  const name = localStorage.getItem("name");
  console.log(name)

  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)",
  };

  const handleAdressAndpayment = () => {
    dispatch(updateuserDetails(userAddress))
    // setShowform(false);
    // navigate("/checkout/payment")
  };

  const handleChange = (e) => {
    setUserAddres({ ...userAddress, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefaults();
    setUserAddres(initAdress);
    console.log(userAddress);
  };

  useEffect(() => {
    dispatch(getUsersData());
  }, []);
useEffect(()=>{
  if(userData){

    const dbUserData =userData.find((el)=> {
      if(el.name==name){
        console.log(el)
        setdbUserData(el)
       
      }
          })
  }

},[userData])



  

  console.log("by",dbuserData)

  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles,
                },
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
                {
                  ...activeLabelStyles,
                },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top",

                color: "gray",
              },
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <CartNavbar />
      <div className="cart-container">{

isLoading &&
<Box padding="6" boxShadow="lg" bg="white">
<SkeletonCircle size="10" />
<SkeletonText
  mt="4"
  noOfLines={4}
  spacing="4"
  skeletonHeight="2"
/>
</Box>
      }
        { dbuserData.length!==0 && dbuserData.address.length!==0 ? (
          <div className="cart-products" >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {" "}
              <h3 className="btn-prop">Select dilevery Address</h3>
              <h3 className="btn-prop">+ Add New Address</h3>
            </div>
            
           
                <div className="address">
              <Heading size={"md"} className="flex" py={6}>
                {dbuserData.name}
              </Heading>

              <div className="flex">
              {userAddress.house_number&& <p className="flex">{userAddress.house_number},</p>}  
              {userAddress.area&&  <p className="flex">{userAddress.area},</p>} 
                <p className="flex">{dbuserData.address[0].city}</p>
              </div>
              <div className="flex">
                <p className="flex">{dbuserData.address[0].state}-</p>

                <p className="flex">{dbuserData.address[0].pincode}</p>
              </div>

              <p
                className="btn-prop flex"
                style={{ paddingTop: "10px", paddingBottom: "10px" }}
              onClick={onOpen}
              >
                Edit
              </p>

              <EditAddress onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>

              <Button
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#FC4689",
                  color: "white",
                  transition:"0.4s"
                }}
               
                onClick={()=>navigate("/checkout/payment")}
              >
                Dilever to this address
              </Button>
            </div>
            
          </div>
        ) : (
          <div className="cart-products">
            <h3 className="btn-prop">Add dilevery Address</h3>
            <form
              onSumbmit={handleSubmit}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                margin: "5%",
              }}
            >
              <ChakraProvider theme={theme}>
                <Box p={5}>
                  <div className="flex">
                    <BsTelephone size={"20px"} />
                    <h2 className="form-title">Contact Details</h2>
                  </div>
                  <Stack spacing={6}>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.name}
                        name="name"
                        isRequired={true}
                        variant="flushed"
                        color={"gray"}
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>Name</FormLabel>
                    </FormControl>

                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.contact}
                        name="contact"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>Phone Number</FormLabel>
                    </FormControl>

                    <div className="flex">
                      <GrLocation size={"25px"} />
                      <h2 className="form-title">Address</h2>
                    </div>

                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.house_number}
                        name="house_number"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>House No./Building Name</FormLabel>
                    </FormControl>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.area}
                        name="area"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>Road Name /Area /Colony</FormLabel>
                    </FormControl>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.pincode}
                        name="pincode"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>Pincode</FormLabel>
                    </FormControl>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.city}
                        name="city"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>City</FormLabel>
                    </FormControl>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.state}
                        name="state"
                        isRequired={true}
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>State</FormLabel>
                    </FormControl>
                    <FormControl
                      variant="floating"
                      id="first-name"
                      isRequired
                      isInvalid
                    >
                      <Input
                        onChange={handleChange}
                        value={dbuserData.landmark}
                        name="landmark"
                        variant="flushed"
                        placeholder=" "
                      />
                      {/* It is important that the Label comes after the Control due to css selectors */}
                      <FormLabel>Nearby location (Optional)</FormLabel>
                    </FormControl>
                    <Button
                      type={"submit"}
                      style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#FC4689",
                        color: "white",
                      }}
                      onClick={() => handleAdressAndpayment()}
                    >
                      Save Address & Continue
                    </Button>
                  </Stack>
                </Box>
              </ChakraProvider>
            </form>
          </div>
        )}

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
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
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
              onClick={() => navigate("/checkout/payment")}
            >
              {" "}
              continue
            </Button>
            <img src="https://images.meesho.com/images/marketing/1588578650850.webp" />
          </div>
        }
      </div>
    </div>
  );
};

