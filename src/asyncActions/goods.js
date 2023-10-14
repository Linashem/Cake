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
export const fetchOneGoods = (id) => {
  return async (dispatch) => {
    const resp = await axios.get(`${apiUrlG}/${id}`);
    dispatch(getGoodsActions(resp.data));
  };
};

export const fetchGoodsCategory = (value) => {
  return async (dispatch) => {
    if (value !== "all") {
      const resp = await axios.get(`${apiUrlG}?category=${value}`);
      dispatch(getGoodsActions(resp.data));
    } else {
      const resp = await axios.get(apiUrlG);
      dispatch(getGoodsActions(resp.data));
    }
  };
};
export const fetchGoodsNew = () => {
  return async (dispatch) => {
    const resp = await axios.get(`${apiUrlG}?newTaste=true`);
    dispatch(getGoodsActions(resp.data));
  };
};
