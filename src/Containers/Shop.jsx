import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchGoods, fetchGoodsNew } from "../asyncActions/goods";
import { ShopContent } from "../Components/ShopContent/ShopContent";
import { goodData } from "../Helper/arrays/listOfGoods";
import { getGoodsActions, newTastesActions } from "../store/goodsReducer";

export const Shop = () => {
  const newTastes = useSelector((state) => state.goods.newTastes);
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.goods);
  useEffect(() => {
    
      dispatch(getGoodsActions(goodData));
   
  }, []);
  return <ShopContent goods={goods} />;
};
// if (newTastes) {
//   dispatch(getGoodsActions(goodData));
// } else {
//   dispatch(newTastesActions());
//   console.log(goods);
// }