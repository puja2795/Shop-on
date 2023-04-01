import React from 'react'
import {RxBorderSolid} from "react-icons/rx"
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle, BsFillCheckCircleFill} from "react-icons/bs"
import { Box, Divider, Stack } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
export const CartNavbar = () => {
  const location =useLocation()
  console.log(location)


  return (
    <div className='cart-nav'>
        <div style={{marginLeft: "15px"}} >
            <img src ="https://th.bing.com/th/id/OIP.jHb2K9iBd6eLtuKBCiRERgHaB3?w=343&h=88&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="40%"/>
        </div>
    
        <Stack direction='row' >

{  location.pathname=="/cart"? <Bs1Circle className='nav-icon' size={"100px"} color="blue"/> :<BsFillCheckCircleFill className='nav-icon' size={"100px"} color="blue"/>  }
 {location.pathname=="/cart"? <Divider orientation='horizontal' p={6} />:<Divider orientation='horizontal' p={6} style={{colo:"blue"}} />}
 {location.pathname=="/checkout/address"?<Bs2Circle className='nav-icon'size={"100px"} color="blue"/> :location.pathname=="/cart"?<Bs2Circle className='nav-icon'size={"100px"}/>:<BsFillCheckCircleFill className='nav-icon' size={"100px"} color="blue"/>}
  <Divider orientation='horizontal' p={6}/>
  {location.pathname=="/checkout/payment"?<Bs3Circle className='nav-icon'size={"100px"} color="blue"/>:location.pathname=="/checkout/address"||location.pathname=="/cart"?<Bs3Circle className='nav-icon'size={"100px"}/>:<BsFillCheckCircleFill className='nav-icon' size={"100px"} color="blue"/>}
   <Divider orientation='horizontal' p={6}/>
  <Bs4Circle className='nav-icon'size={"100px"}/>
</Stack>
          

       


       </div>
  )
}


