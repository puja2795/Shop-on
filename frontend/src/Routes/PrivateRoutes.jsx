import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({children}) => {

  const location =useLocation()
  const token =localStorage.getItem("token")
  if(!token){
    return < replace Navigate to ="/userLogin"  state={location.pathname}/>
  }


  return children;

}
