import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  GET_PRODUCT_FOR,
  SET_PRODUCT_FOR,
  GET_PRODUCT_SUCCESS,
  SET_FILTER,
} from "../actionType";
import axios from "axios";

export const getProductFor = () => {
  return { type: GET_PRODUCT_FOR };
};

export const setProductFor = (payload) => {
  return { type: SET_PRODUCT_FOR, payload };
};

export const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};

export const productFailure = () => {
  return { type: PRODUCT_FAILURE };
};

export const getProductSuccess = (payload) => {
  return { type: GET_PRODUCT_SUCCESS, payload };
};

export const setFilter = (payload) => {
  return { type: SET_FILTER, payload };
};

export const getProducts = (params) => (dispatch) => {
  console.log(params)
  dispatch(productRequest());
  axios
    .get(`https://laravel1.bisplindia.in/ecom-backend-api/public/products/category/${params.category}`,{params})
    .then((res) => {
      console.log(res.data)
      dispatch(getProductSuccess(res.data.products));
    })
    .catch((err) => dispatch(productFailure()));
};


