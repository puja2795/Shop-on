
import React, { useEffect, useState } from 'react'

import '../Cart/cart.css'
import { CartNavbar } from '../../Components/CartNavbar'
import { Button, Divider, Heading, Spacer, Stack } from '@chakra-ui/react'
import { BiRupee } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { BsTelephone } from 'react-icons/bs'
import { GrLocation } from 'react-icons/gr'
import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box
} from "@chakra-ui/react";
import { updateuserDetails } from '../../Redux/cartReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersData } from '../../Redux/AminReducer/action'

const initAdress = {
  name: "",
  city: "",
  state: "",
  pincode: "",
  contact: "",
  house_number:"",
  area:""

}
export const Address = () => {
  const total = localStorage.getItem("total")
const [dbuserData,setdbUserData]=useState([])
  const [userAddress, setUserAddres] = useState(initAdress)
  const [showForm, setShowform] = useState(false)
  const navigate = useNavigate()
  const userData =useSelector((store)=>store.adminReducer.user)
  console.log("hi",userData)
  const dispatch =useDispatch()
 
const name =localStorage.getItem("name")

  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };

  const handleAdressAndpayment=()=>{
    dispatch(updateuserDetails(userAddress))
    setShowform(false)
    // navigate("/checkout/payment")
  }

  const handleChange = (e) => {
    setUserAddres({ ...userAddress, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    e.preventDefaults()
    setUserAddres(initAdress)
    console.log(userAddress)
  

  }

  useEffect(()=>{
dispatch(getUsersData())
},[])

 
//   const dbUserData =userData.find((el)=>{
//     return el.name==name
//   })
  
//   setdbUserData(dbUserData)


// console.log("by",dbuserData)

  
  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
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

                color: "gray"
              }
            }
          }
        }
      }
    }
  });

  return (
    <div>
      <CartNavbar />
      <div className='cart-container' >
        {dbuserData?
            <div className='cart-products'>
            <div style={{ display: "flex", justifyContent: "space-around" }}> <h3 className='btn-prop'>Select dilevery Address</h3><h3 className='btn-prop'>+ Add New Address</h3></div>
            <div className='address'>
              <Heading size={'md'} className='flex' py={6}>{userAddress.name}</Heading>
  
             <div className='flex'>
              <p className='flex'>{userAddress.house_number},</p>
              <p className='flex'>{userAddress.area},</p>
              <p className='flex'>{userAddress.city}</p>
              </div> 
              <div className='flex' >
            
              <p className='flex'>{userAddress.state}-</p>
              
              <p className='flex'>{userAddress.pincode}</p>
              </div>
             
              <p className='btn-prop flex' style={{paddingTop:"10px",paddingBottom:"10px"}}>Edit</p>
              <Button style={{ width: "100%", padding: "15px", backgroundColor: "#FC4689", color: "white" }}>Dilever to this address</Button>
            </div>
  
          </div> 
          :             
         <div className='cart-products'>
         <h3 className='btn-prop'>Add dilevery Address</h3>
         <form onSumbmit={handleSubmit} style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", margin: "5%" }}>



           <ChakraProvider theme={theme}>

             <Box p={5}>
               <div className='flex'><BsTelephone size={'20px'} /><h2 className='form-title'>Contact Details</h2></div>
               <Stack spacing={6}>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.name} name="name" isRequired={true} variant='flushed' color={'gray'} placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>Name</FormLabel>


                 </FormControl>

                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.contact} name="contact" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>Phone Number</FormLabel>
                 </FormControl>

                 <div className='flex'><GrLocation size={'25px'} /><h2 className='form-title'>Address</h2></div>

                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.house_number} name="house_number" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>House No./Building Name</FormLabel>


                 </FormControl>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.area} name="area" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>Road Name /Area /Colony</FormLabel>


                 </FormControl>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.pincode} name="pincode" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>Pincode</FormLabel>


                 </FormControl>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.city} name="city" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>City</FormLabel>


                 </FormControl>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.state} name="state" isRequired={true} variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>State</FormLabel>


                 </FormControl>
                 <FormControl variant="floating" id="first-name" isRequired isInvalid>
                   <Input onChange={handleChange} value={userAddress.landmark} name="landmark" variant='flushed' placeholder=" " />
                   {/* It is important that the Label comes after the Control due to css selectors */}
                   <FormLabel>Nearby location (Optional)</FormLabel>


                 </FormControl>
                 <Button type={'submit'} style={{ width: "100%", padding: "10px", backgroundColor: "#FC4689", color: "white" }} onClick={()=>handleAdressAndpayment()}>Save Address & Continue</Button>
               </Stack>
             </Box>
           </ChakraProvider>
         </form>

       </div>
       
        
        
      

         
        }

        {<div className='order-summry'>
          <p className='price-details'>Price Details</p>
          <div className='price-details'><p >Total product Price</p><span style={{ display: "flex", alignItems: "center" }} ><BiRupee />{total}</span>   </div>

          <div style={{ display: "flex", justifyContent: "space-between", }}><p style={{ fontSize: "18px", fontWeight: "600" }}>Order total</p><p style={{ display: "flex", alignItems: "center", fontWeight: "600" }} ><BiRupee />{total}</p>   </div>
          <div style={{ backgroundColor: "whitesmoke" }}><p>Clicking on Continue will not deduct any money</p></div>
          <Button style={{ width: "100%", padding: "10px", backgroundColor: "#FC4689", color: "white" }} onClick={() => navigate("/checkout/payment")}> continue</Button>
          <img src="https://images.meesho.com/images/marketing/1588578650850.webp" />
        </div>}

      </div>

    </div>
  )
}
