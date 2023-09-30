import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../Counter/Counter";
import { removeGoodsReducerActions } from "../../store/cartGoodsReducer";
import { cartDecrementAction } from "../../store/cartReducer";
import style from "./GoodsInCart.module.scss";

export const GoodsInCart = () => {
  const goods = useSelector((state) => state.goodsInCart.goodsInCart);
  const dispatch = useDispatch();
  const removeGoodInCart = (item) => {
    console.log(item);
    dispatch(removeGoodsReducerActions(item));
  };
  const deliteGood = () => {
    dispatch(cartDecrementAction());
  };

  return (
    <>
      <div className={style.good_cards}>
        <h1>Cart</h1>
        {goods.length > 0 ? (
          goods.map((el) => (
            <>
              <div className={style.good_card}>
                <div className={style.good_img}>
                  <img src={el.img} alt={el.title} />
                </div>
                <h3>{el.title}</h3>
                <p>{el.price}$</p>

                <Counter item={el} />

                <div onClick={deliteGood}>
                  <button
                    className={style.cross}
                    onClick={() => removeGoodInCart(el.id)}
                  >
                    <img src="img/svg/cross.svg" alt="x" />
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <h1>No goods in cart yet</h1>
        )}
      </div>
    </>
  );
};
