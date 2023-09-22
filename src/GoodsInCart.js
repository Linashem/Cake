import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeGoodsReducerActions } from "./store/cartGoodsReducer";

export const GoodsInCart = () => {
  const goods = useSelector((state) => state.goodsInCart.goodsInCart);
  const dispatch = useDispatch();
  const removeGoodInCart = (item) => {
    console.log(item.id);
    dispatch(removeGoodsReducerActions(item.id));
  };

  return (
    <>
      <div>
        {goods.length > 0 ? (
          goods.map((el) => (
            <>
              <div>{el}</div>
            
              {/* console.log(el); */}
               <button onClick={() => removeGoodInCart(el)}>x</button> 
            </>
          ))
        ) : (
          <h1>sorry</h1>
        )}
      </div>
    </>
  );
};
