import React from 'react'
import {RxBorderSolid} from "react-icons/rx"
import {Bs1Circle, Bs2Circle, Bs3Circle, Bs4Circle} from "react-icons/bs"
export const CartNavbar = () => {
  return (
    <div className='cart-nav'>
        <div>
            <img src ="https://th.bing.com/th/id/OIP.jHb2K9iBd6eLtuKBCiRERgHaB3?w=343&h=88&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="40%"/>
        </div>
        <div>
       
           <Bs1Circle className='nav-icon' size={"25px"}/>
           <RxBorderSolid className='nav-icon'size={"25px"}/>
           <Bs2Circle className='nav-icon'size={"25px"}/>
           <RxBorderSolid className='nav-icon'size={"25px"}/> 
           <Bs3Circle className='nav-icon'size={"25px"}/>
           <RxBorderSolid className='nav-icon'size={"25px"}/> 
           <Bs4Circle className='nav-icon'size={"25px"}/>
           
        </div>
       


       </div>
  )
}


