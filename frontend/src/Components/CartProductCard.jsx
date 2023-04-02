import { Button, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

    
    useDisclosure
  } from '@chakra-ui/react'
  import "../Pages/Cart/edit.css"
import { useSelector } from 'react-redux'
import { BiRupee } from 'react-icons/bi'
export const CartProductCard = ({ image, pattern, price, rating, reviews, title,id }) => {
  const [EditData,setEditData]=useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [Qty,setQty]=useState(1)
  const cartData =useSelector((store)=>store.cartReducer.cartData)
  const handleEdit=(id)=>{
    console.log(id)
  const data  =cartData.find((el,i)=> i==id )

  setEditData(data)
 
   onOpen()
   
  }
  return (
    <div className='c-product' >

      <div className='product-upper-part'>
        <img src={image} />

        <div>
          <p>{title}</p>
          <div className='flex'><p>Size:</p><p>Qty:</p></div>
          <div className='flex' ><BiRupee />  <p>{price}</p> </div>
          <div className='flex'>  <RxCross2 color='#FC4689'/><p className='btn-prop'>REMOVE</p></div>
        
        </div>
        <div>
          <p  className='btn-prop' onClick={()=>handleEdit(id)} >EDIT</p>
       
      
      <Modal size="full"isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="ani" style={{marginLeft:"65%"}}>
          <ModalHeader >EDIT ITEM</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <div className='edit' 
            >
          <div>
        <img src={EditData.image} />
        </div>
        <div className='title' >
          <p className='title'>{EditData.title}</p>
          <div className='flex' ><BiRupee /><h3>{EditData.price}</h3></div>
          <div className='flex'><p>Size:</p><p>Qty:</p> <Button >-</Button> <Button isDisabled={true}>1</Button>  <Button>+</Button></div>
         
         
          <div className='flex' style={{justifyContent:"space-between"}} ><h3> Total Price </h3><h3 className='flex'><BiRupee />{EditData.price}</h3></div>
        </div>
        </div>
      
        
          </ModalBody >

          <ModalFooter>
            <Button backgroundColor='#FC4689' width={'100%'} mr={3} onClick={onClose}>
              Continue
            </Button>
         
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>

      </div>
      <div
      className='flex product-footer'>
        <p>Suplier: Always Pure Enterprise</p>
        <p>Free Delevery</p>
      </div>
    </div>
  )
}
