import { Cart } from "../../Pages/Cart/Cart";
import {
  GET_CARTDATA_SUCCESS,
  ORDER_CARTDATA_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionType";
import axios from "axios";
export const getCartDataSucessAction = (payload) => {
  return { type: GET_CARTDATA_SUCCESS, payload };
};

export const getCartDataRequestSucessAction = () => {
  return { type: PRODUCT_REQUEST };
};
export const getCartDataErrorSucessAction = () => {
  return { type: PRODUCT_FAILURE };
};

export const orderCartDataSucessAction = () => {
  return { type: ORDER_CARTDATA_SUCCESS };
};
export const getCartData = (dispatch) => {
  dispatch(getCartDataRequestSucessAction());
  let option = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")} `,
    },
  };
  let cartData = JSON.parse(localStorage.getItem("cartData"));

 dispatch(getCartDataSucessAction(cartData));
};

export const DeleteCartItem = (id) => (dispatch) => {
  let cartData = JSON.parse(localStorage.getItem("cartData"));

  console.log(id);

  let AfterDelete = cartData.filter((el) => el.id !== id);
  localStorage.setItem("cartData", JSON.stringify(AfterDelete));
};

export const addTocart =
  (id, quantity = 1) =>
  (dispatch) => {
    return axios
      .get(`https://laravel1.bisplindia.in/ecom-backend-api/public/products/${id}`)
      .then((res) => {
        let addedQuantityData = { ...res.data, quantity: quantity };

        let Data = JSON.parse(localStorage.getItem("cartData")) || [];

        let exist = Data.find((el) => el.id == addedQuantityData.id);
        if (!exist) {
          let CartData = [...Data, addedQuantityData];
          localStorage.setItem("cartData", JSON.stringify(CartData));
        } else {
          let QuntyityInc = { ...exist, quantity: quantity + 1 };
          console.log(exist);

          Data.splice(Data.indexOf(exist), 1);

          console.log(Data, "filtewres");
          let CartData = [...Data, QuntyityInc];
          localStorage.setItem("cartData", JSON.stringify(CartData));
        }

        let CartData = [...Data, addedQuantityData];
        localStorage.setItem("cartData", JSON.stringify(CartData));
      });
  };

export const updateuserDetails = (useraddress) => (dispatch) => {
  let options = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")} `,
    },
  };
  axios
    .patch(
      `https://wild-erin-seal-sari.cyclic.app/user/address`,
      useraddress,
      options
    )
    .then((res) => {
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
    });
};

export const orderItems = (dispatch) => {
  return dispatch(orderCartDataSucessAction());
};
