import { GET_CARTDATA_SUCCESS } from "../actionType"
import axios from "axios"
export const getCartDataSucessAction=(payload)=>{
    return {type:GET_CARTDATA_SUCCESS,payload}
}

export const getCartData=(dispatch)=>{
    axios.get(`https://meesho-trial-server.onrender.com/products?_limit=5`).then((res)=>{
        console.log(res)
        dispatch(getCartDataSucessAction(res.data))
    }).catch((er)=>{
        console.log(er)
    })

}