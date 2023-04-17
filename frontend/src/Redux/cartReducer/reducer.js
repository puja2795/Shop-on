import { GET_CARTDATA_SUCCESS, ORDER_CARTDATA_SUCCESS, POST_CARTDATA_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actionType"

const initState ={
    cartData:[],
    isLoading:false,
    isError:false,
    orderData:[]
}

export const reducer = (state=initState,{payload,type}) => {
 switch(type){
    case PRODUCT_REQUEST:
        return {...state,isLoading:true}
    case GET_CARTDATA_SUCCESS:
        return {...state,cartData:payload,isLoading:false}
        case POST_CARTDATA_SUCCESS:
        return {...state,cartData:[...state.cartData,payload]}
        case ORDER_CARTDATA_SUCCESS:
            return {...state,isLoading:false,orderData:[...state.cartData],cartData:[]}

        case PRODUCT_FAILURE:
        return {...state,isLoading:false,isError:true}
    default :
    return state
 }
}
