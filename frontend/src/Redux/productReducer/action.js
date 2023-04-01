import {
  GET_SELECTED_CATEGORY,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SET_SELECTED_CATEGORY,
} from "../actionType";

export const productRequest = () => {
  return { type: PRODUCT_REQUEST };
};

export const productFailure = () => {
  return { type: PRODUCT_FAILURE };
};

export const getSelectedCategory = () => {
  return { type: GET_SELECTED_CATEGORY };
};

export const setSelectedCategory = (payload) => {
  return { type: SET_SELECTED_CATEGORY, payload };
};
