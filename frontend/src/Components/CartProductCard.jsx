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
import { useDispatch, useSelector } from 'react-redux'
import { BiRupee } from 'react-icons/bi'
import { DeleteCartItem, addTocart, getCartData } from '../Redux/cartReducer/action'
export const CartProductCard = ({ image, pattern, price, rating,quantity, reviews, title,_id,addedQuantity,handleCartChanges }) => {
  const [EditData,setEditData]=useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isDeleteOpen , onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure()

  const [Qty,setQty]=useState(1)
  const [total,setToatl]=useState(EditData.price)
  const cartData =useSelector((store)=>store.cartReducer.cartData)
  const prodID = localStorage.getItem("selected_product");
const dispatch =useDispatch()

  const handleQty=(val)=>{
    setQty((pre)=>pre+val)
    const data  =cartData.find((el,i)=> el._id==_id )
    data.addedQuantity= Qty
    setEditData(data)
    setToatl(Qty*data.price)
  }
  
  const handleEdit=(_id)=>{
  // console.log(id)
  const data  =cartData.find((el)=> el._id==_id )
   data.addedQuantity= Qty
  setEditData(data)


   onOpen()
   
  }
  console.log(EditData)

  const handleDelete=(_id)=>{
    const data  =cartData.find((el,i)=> el._id==_id )
    // data.addedQuantity= Qty
    console.log(data)
   setEditData(data)
   onDeleteOpen()
 

}

const finalEdit=()=>{
  dispatch(addTocart({_id:_id,addedQuantity:+Qty})).then(()=>{
    dispatch(getCartData)
    onClose()
    
  })
}

const finalDelete=(prodID)=>{
  dispatch(DeleteCartItem(EditData._id)).then(()=>{
    dispatch(getCartData)
    onDeleteClose()

  })
    
    
  
}

  return (
    <div className='c-product' >

      <div className='product-upper-part'>
        <img src={image} />

        <div>
          <p>{title}</p>
          <div className='flex'><p>Size:</p><p>Qty: {addedQuantity}</p></div>
          <div className='flex' ><BiRupee />  <p>{price}</p> </div>
          <div className='flex'>  <RxCross2 color='#FC4689'/><p className='btn-prop'onClick={()=>handleDelete(_id)}>REMOVE</p></div>
        
        </div>
        <div>
          <p  className='btn-prop' onClick={()=>handleEdit(_id)} >EDIT</p>
       
      
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
          <div className='flex'>
            <p>Size:</p>
            <p>Qty:</p> 
            <Button onClick={()=>handleQty(-1)} >-</Button>
            <Button isDisabled={true}>{Qty}</Button>  
             <Button onClick={()=>handleQty(1)}>+</Button>
             </div>
         
         
          <div className='flex' style={{justifyContent:"space-between"}} ><h3> Total Price </h3><h3 className='flex'><BiRupee />{EditData.price*Qty}</h3></div>
        </div>
        </div>
      
        
          </ModalBody >

          <ModalFooter>
            <Button backgroundColor='#FC4689' width={'100%'} mr={3} onClick={finalEdit}>
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

  {/* delete modal */}
    

      <Modal isCentered={true} isOpen={isDeleteOpen} onClose={onDeleteClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove product from cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
           <p style={{fontSize:"18px"}}> Are you sure you want to remove {EditData.title}</p> 
          </ModalBody>

          <ModalFooter>
    
            <p style={{marginRight:"15px",fontSize:"15px"}}className='btn-prop' mr={3} onClick={onDeleteClose}>
              CANCEL
            </p>
            <p style={{marginLeft:"15px",fontSize:"15px"}} className='btn-prop' onClick={()=>finalDelete(prodID)}>REMOVE</p>
          </ModalFooter>
        </ModalContent>
      </Modal>
  

    </div>

  )
}
