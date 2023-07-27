import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SET_FILTER,
  SET_PRODUCT_FOR,
} from "../actionType";

const initState = {
  productFor: localStorage.getItem("productFor") || "",
  isLoading: false,
  isError: false,
  products: [],
  filters: {
    men: {},
    women: {},
    kids: {},
  },
};

export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case SET_PRODUCT_FOR:
      return { ...state, productFor: payload };
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_FAILURE:
      return { ...state, isError: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, products: payload, isLoading: false };
    case SET_FILTER:
      if (state.productFor != "") {
        return {
          ...state,
          filters: { ...state.filters, [state.productFor]: payload },
        };
      }
      return state;

    default:
      return state;
  }
};
