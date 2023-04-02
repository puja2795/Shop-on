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
   return axios.get(`https://wild-erin-seal-sari.cyclic.app/cart`,option).then((res) => {
        console.log(res.data)
        dispatch(getCartDataSucessAction(res.data))
    }).catch((er) => {
        console.log(er)
    })

}

export const DeleteCartItem = (id) => (dispatch) => {
    console.log(id)
    let options = {
       
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")} `
                },
               
            }
    return axios.delete(`https://wild-erin-seal-sari.cyclic.app/cart/${id}`,options).then((res) => {
        console.log(res)

    }).catch((er) => {
        console.log(er)
    })

}

// export const updateCartItem=(id)=>(dispatch)=>{
//     let options = {
       
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem("token")} `
//         },
       
//     }
    

//     axios.patch(`https://wild-erin-seal-sari.cyclic.app/product`,options).then((res)=>{
//         console.log(res)

//     }).catch((er)=>{
//         console.log(er)
//     })

// }

export const addTocart = (newItem) =>(dispatch) =>{
    console.log(newItem)
    let options = {
       
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")} `
        },
       
    }
    

   return axios.patch(`https://wild-erin-seal-sari.cyclic.app/product`,newItem, options).then((res) => {
        console.log(res)
    }).catch((er) => {
        console.log(er)
    })

}


export const updateuserDetails = (useraddress) => (dispatch) => {
    let options = {
       
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")} `
        },
       
    }
    axios.patch(`https://wild-erin-seal-sari.cyclic.app/user/address`, useraddress,options).then((res) => {
        console.log(res)

    }).catch((er) => {
        console.log(er)
    })

}


