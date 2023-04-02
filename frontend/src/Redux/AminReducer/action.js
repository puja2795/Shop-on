import { ADD_PROD_SUCCESS_ADMIN_SIDE, DELETE_PROD_SUCCESS_ADMIN_SIDE, EDIT_PROD_SUCCESS_ADMIN_SIDE, GET_FAILURE_ADMIN_SIDE, GET_REQUEST_ADMIN_SIDE, GET_SUCCESS_ADMIN_SIDE, GET_SUCCESS_USER_DATA } from "../actionType"
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

const editProdSuccess = () => {
    return {
        type: EDIT_PROD_SUCCESS_ADMIN_SIDE
    }
}

const deleteProdSuccess = () => {
    return {
        type: DELETE_PROD_SUCCESS_ADMIN_SIDE
    }
}

// UserAction

const getUserAction = (payload) => {
    return {
        type: GET_SUCCESS_USER_DATA,
        payload
    }
}


//get Data
export const getMensData = (params) => (dispatch) => {

    dispatch(getReqAdmin());
    axios.get(`https://wild-erin-seal-sari.cyclic.app/product?limit=200`, { params })
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

    dispatch(getReqAdmin());
    axios.post("https://wild-erin-seal-sari.cyclic.app/admin/product", payload)
        .then((res) => {
            // console.log('res:', res.data)
            dispatch(addProdSuccess());
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        })
}

//Edit Data

export const editProduct = (payload, id) => (dispatch) => {

    dispatch(getReqAdmin());
    return axios
        .patch(`https://wild-erin-seal-sari.cyclic.app/admin/product/${id}`, payload)
        .then((res) => {
            console.log('res:', res.data)
            dispatch(editProdSuccess());
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        });
}


// Delete data
export const deleteProduct = (id) => (dispatch) => {

    dispatch(getReqAdmin());
    return axios
        .delete(`https://wild-erin-seal-sari.cyclic.app/admin/product/${id}`)
        .then((res) => {
            console.log('res:', res.data)
            dispatch(deleteProdSuccess());
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        });
}


// get User Data

export const getUsersData = () => (dispatch) => {

    dispatch(getReqAdmin());
    axios.get(`https://wild-erin-seal-sari.cyclic.app/user`)
        .then((res) => {
            console.log(res.data);
            dispatch(getUserAction(res.data))
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        })
}