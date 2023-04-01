import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";

import { reducer as   cartReducer,} from "./cartReducer/reducer";

import { reducer as adminReducer } from "./AminReducer/reducer";



const rootReducer = combineReducers({
  authReducer,
  productReducer,

  cartReducer,

  adminReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));