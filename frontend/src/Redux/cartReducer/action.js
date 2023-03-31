import { GET_CARTDATA_SUCCESS } from "../actionType"

export const getCartDataSucessAction=(payload)=>{
    return {type:GET_CARTDATA_SUCCESS,payload}
}

export const getCartData=(dispatch)=>{
    axios.get(``).then((res)=>{
        dispatch(getCartDataSucessAction(res.data))
    }).catch((er)=>{
        console.log(er)
    })

}