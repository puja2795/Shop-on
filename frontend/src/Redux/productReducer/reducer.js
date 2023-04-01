import { GET_SELECTED_CATEGORY, SET_SELECTED_CATEGORY } from "../actionType";

const initState = {
  selectedCategory: "",
};

export const reducer = (state = initState, { payload, type }) => {
  switch (type) {
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: payload };
    case GET_SELECTED_CATEGORY:
      return state;

    default:
      return state;
  }
};
