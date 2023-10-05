import { combineReducers, createStore } from "@reduxjs/toolkit";
import { cartGoodsReducer } from "./cartGoodsReducer";
import { cartReducer } from "./cartReducer";
import { goodsReducer } from "./goodsReducer";
import { oneGoodReducer } from "./oneGoodReduser";
const rootReduser = combineReducers({
  cart: cartReducer,
  goodsInCart: cartGoodsReducer,
  goods: goodsReducer,
  good:oneGoodReducer
});

export const store = createStore(rootReduser);
