import {
  GET_PRODUCT_FOR,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SET_PRODUCT_FOR,
} from "../actionType";

const initState = {
  productFor: "",
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case SET_PRODUCT_FOR:
      return { ...state, productFor: payload };
    case GET_PRODUCT_FOR:
      return state;
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_FAILURE:
      return { ...state, isError: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
