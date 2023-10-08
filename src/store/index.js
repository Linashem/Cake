import { combineReducers, createStore } from "@reduxjs/toolkit";
import { cartGoodsReducer } from "./cartGoodsReducer";
import { cartReducer } from "./cartReducer";
import { commentReducer } from "./commentReducer";
import { goodsReducer } from "./goodsReducer";
import { oneGoodReducer } from "./oneGoodReduser";
import { userDataReducer } from "./userReducer";
const rootReduser = combineReducers({
  cart: cartReducer,
  goodsInCart: cartGoodsReducer,
  goods: goodsReducer,
  good: oneGoodReducer,
  comments: commentReducer,
  user: userDataReducer,
});

export const store = createStore(rootReduser);
