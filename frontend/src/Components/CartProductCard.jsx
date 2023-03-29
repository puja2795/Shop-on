import { Button, Heading } from '@chakra-ui/react'
import React from 'react'

export const CartProductCard = () => {
  return (
    <div className='c-product' style={{ width:"95%",
        }}>
        <div>
            <img/>
            <Heading size={"md"}>title</Heading>
            <div style={{display:"flex"}}><p>Size:</p><p>Qty:</p></div>
            <div style={{display:"flex"}}><p>Price</p><p>sale parice</p><p>discount</p></div>
            <Button>Remove</Button>
            <Button>Edit</Button>
        </div>
        <div style={{display:"flex",
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
          <p>Suplier</p>  
          <p>Free Delevery</p>  
        </div>
    </div>
  )
}
