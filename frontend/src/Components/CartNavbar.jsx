import React from 'react'
import {RxBorderSolid} from "react-icons/rx"
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle} from "react-icons/bs"
import { Box, Divider, Stack } from '@chakra-ui/react'
export const CartNavbar = () => {
  return (
    <div className='cart-nav'>
        <div>
            <img src ="https://th.bing.com/th/id/OIP.jHb2K9iBd6eLtuKBCiRERgHaB3?w=343&h=88&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="40%"/>
        </div>
    
        <Stack direction='row' >

  <Bs1Circle className='nav-icon' size={"100px"}/>
  <Divider orientation='horizontal' p={6}/>
  <Bs2Circle className='nav-icon'size={"100px"}/>
  <Divider orientation='horizontal' p={6}/>
  <Bs3Circle className='nav-icon'size={"100px"}/>
   <Divider orientation='horizontal' p={6}/>
  <Bs4Circle className='nav-icon'size={"100px"}/>
</Stack>
          

       


       </div>
  )
}


