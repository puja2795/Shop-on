import React from 'react'
import {  Navigate, useLocation, useNavigate } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {
 
  const navigate=useNavigate()

  const location =useLocation()
  const token =localStorage.getItem("token")
  if(!token){
  return <Navigate to= "/userLogin" replace state={location.pathname}/>
  }


  return children;

}
