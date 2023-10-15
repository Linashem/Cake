import React from "react";
import { Categories } from "../Categories/Categories";
import { Goods } from "../Goods/Goods";

export const ShopContent = (props) => {
  const goods = props.goods;

  return (
    <div>
      <Categories />
      <Goods goods={goods} />
    </div>
  );
};
