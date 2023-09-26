import { combineReducers, createStore } from "@reduxjs/toolkit";
import { cartGoodsReducer } from "./cartGoodsReducer";
import { cartReducer } from "./cartReducer";
import { goodInGoogReducer } from "./inCartReducer";
// import { goodCountReducer } from "./countGood";
const rootReduser = combineReducers({
  cart: cartReducer,
  goodsInCart: cartGoodsReducer,
  inCart:goodInGoogReducer
});

export const store = createStore(rootReduser);
