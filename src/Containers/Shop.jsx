import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods, fetchGoodsNew } from '../asyncActions/goods';
import { ShopContent } from '../Components/ShopContent/ShopContent'

export const Shop = () => {
  const newTastes = useSelector((state) => state.goods.newTastes);
  const dispatch = useDispatch();

  const goods = useSelector((state) => state.goods.goods);
  useEffect(() => {
    if (newTastes) {
      dispatch(fetchGoodsNew());
    } else {
      dispatch(fetchGoods());
      console.log(goods);
    }
  }, []);
  return (
    <ShopContent goods={goods} />
  )
}
