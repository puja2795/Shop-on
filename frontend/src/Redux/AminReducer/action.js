import { GET_FAILURE_ADMIN_SIDE, GET_REQUEST_ADMIN_SIDE, GET_SUCCESS_ADMIN_SIDE_MEN } from "../actionType"
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
        type: GET_SUCCESS_ADMIN_SIDE_MEN,
        payload
    }
}




//fecthing Data
export const getMensData = () => (dispatch) => {

    dispatch(getReqAdmin());

    axios.get(`https://meesho-trial-server.onrender.com/products`)
        .then((res) => {
            // console.log(res.data);
            dispatch(getSuccessAdmin(res.data))
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(FailureReqAdmin());
        })
}
