import { ADD_PROD_SUCCESS_ADMIN_SIDE, GET_FAILURE_ADMIN_SIDE, GET_REQUEST_ADMIN_SIDE, GET_SUCCESS_ADMIN_SIDE } from "../actionType"
import axios from "axios"

const getReqAdmin = () => {
    return {
        type: GET_REQUEST_ADMIN_SIDE
    }
}


const FailureReqAdmin = () => {
    return {
        type: GET_FAILURE_ADMIN_SIDE
    }
}

const getSuccessAdmin = (payload) => {
    return {
        type: GET_SUCCESS_ADMIN_SIDE,
        payload
    }
}


const addProdSuccess = () => {
    return {
        type: ADD_PROD_SUCCESS_ADMIN_SIDE
    }
}



//get Data
export const getMensData = (params) => (dispatch) => {

    dispatch(getReqAdmin());

    axios.get(`https://wild-erin-seal-sari.cyclic.app/product`, { params })
        .then((res) => {
            // console.log(res.data);
            dispatch(getSuccessAdmin(res.data))
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        })
}


// Post Data

export const postProduct = (payload) => (dispatch) => {
    console.log(payload);
    dispatch(getReqAdmin());
    axios.post("https://wild-erin-seal-sari.cyclic.app/product", payload)
        .then((res) => {
            console.log('res:', res)
            dispatch(addProdSuccess());
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        })
}