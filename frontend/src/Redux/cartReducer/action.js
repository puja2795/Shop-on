import { GET_CARTDATA_SUCCESS } from "../actionType"
import axios from "axios"
export const getCartDataSucessAction = (payload) => {
    return { type: GET_CARTDATA_SUCCESS, payload }
}

export const getCartData = (dispatch) => {
    let option={
        headers:{
            'Authorization': `Bearer ${localStorage.getItem("token")} ` 
        }
    }
    axios.get(`https://wild-erin-seal-sari.cyclic.app/cart`,option).then((res) => {
        console.log(res)
        dispatch(getCartDataSucessAction(res.data))
    }).catch((er) => {
        console.log(er)
    })

}

export const DeleteCartItem = (id) => (dispatch) => {
    axios.delete(`${process.env.url}/cart${id}`).then((res) => {
        console.log(res)

    }).catch((er) => {
        console.log(er)
    })

}

// export const updateCartItem=(newItem)=>(dispatch)=>{
//     axios.patch(`https://meesho-trial-server.onrender.com/products?_limit=5/${id}`,newItem).then((res)=>{
//         console.log(res)

//     }).catch((er)=>{
//         console.log(er)
//     })

// }

export const addTocart = (newItem) =>(dispatch) =>{
    let options = {
       
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")} `
        },
       
    }
    

    axios.patch(`https://wild-erin-seal-sari.cyclic.app/product`,newItem, options).then((res) => {
        console.log(res)
    }).catch((er) => {
        console.log(er)
    })

}

export const updateuserDetails = (useraddress, id) => (dispatch) => {
    axios.patch(`/${id}`, { address: useraddress }).then((res) => {
        console.log(res)

    }).catch((er) => {
        console.log(er)
    })

}


