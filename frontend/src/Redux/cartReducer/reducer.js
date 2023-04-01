import { GET_CARTDATA_SUCCESS, POST_CARTDATA_SUCCESS } from "../actionType"

const initState ={
    cartData:[],
    isLoading:false,
    isError:false
}

export const reducer = (state=initState,{payload,type}) => {
 switch(type){
    case GET_CARTDATA_SUCCESS:
        return {...state,cartData:payload}
        case POST_CARTDATA_SUCCESS:
        return {...state,cartData:[...state.cartData,payload]}
    default :
    return state
 }
}
