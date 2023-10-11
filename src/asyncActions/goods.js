import React from "react";
import axios from "axios";
import { getGoodsActions } from "../store/goodsReducer";

export const apiUrlG = "http://localhost:3001/goods";
export const fetchGoods = () => {
  return async (dispatch) => {
    const resp = await axios.get(apiUrlG);
    dispatch(getGoodsActions(resp.data));
  };
};

