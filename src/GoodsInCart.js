import React from "react";
import { useSelector } from "react-redux";

export const GoodsInCart = () => {
  const goods = useSelector((state) => state.goodsInCart.goodsInCart);

  return (
    <>
      <div>
        {goods.length > 0 ? (
          goods.map((el) => (
            <div>
              
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
              <b>{el.price}$</b>
            </div>
          ))
        ) : (
          <h1>sorry</h1>
        )}
      </div>
    </>
  );
};
