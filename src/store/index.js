import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { cartGoodsReducer } from "./cartGoodsReducer";
import { cartReducer } from "./cartReducer";
import { commentReducer } from "./commentReducer";
import { goodsReducer } from "./goodsReducer";
import { oneGoodReducer } from "./oneGoodReduser";
import { postsReducer } from "./postsReducer";
import { userDataReducer } from "./userReducer";
const rootReduser = combineReducers({
  cart: cartReducer,
  goodsInCart: cartGoodsReducer,
  goods: goodsReducer,
  // good: oneGoodReducer,
  comments: commentReducer,
  user: userDataReducer,
  posts:postsReducer
});

export const store = createStore( rootReduser, composeWithDevTools(applyMiddleware(thunk)));
