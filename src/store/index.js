import { combineReducers, createStore } from "@reduxjs/toolkit";
import { cartGoodsReducer } from "./cartGoodsReducer";
import { cartReducer } from "./cartReducer";
const rootReduser = combineReducers({
  cart: cartReducer,
  goodsInCart: cartGoodsReducer,
});

export const store = createStore(rootReduser);
