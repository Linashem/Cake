import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopContent } from "../Components/ShopContent/ShopContent";
import { getGoodsActions } from "../store/goodsReducer";

export const Shop = () => {
  const newTastes = useSelector((state) => state.goods.newTastes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoodsActions(newTastes));
  }, []);
  return <ShopContent goods={newTastes} />;
};
