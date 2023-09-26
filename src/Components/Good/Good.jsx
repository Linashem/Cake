import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartGoodsReducerActions } from "../../store/cartGoodsReducer";
import {
  cartDecrementAction,
  cartIncrementAction,
} from "../../store/cartReducer";
import { goodInGoogAction } from "../../store/inCartReducer";
import style from "./Good.module.scss";

export const Good = (props) => {
  const dispatch = useDispatch();

  const addGood = () => {
    dispatch(cartIncrementAction());
  };

  const deliteGood = () => {
    dispatch(cartDecrementAction());
  };

  const inCart = useSelector((state) => state.inCart.inCart);

  const [cart, setCart] = useState({ inCart });
  const goodInCart = () => {
    dispatch(goodInGoogAction(!count && setCart((prev) => !prev)));
  };

  const [count, setCount] = useState(0);

  let countHandlerIncrement = () => {
    let test = count;
    test += 1;
    setCount(test);
  };

  let countHandlerDecrement = () => {
    let test = count;
    if (test > 0) {
      test -= 1;
    }
    setCount(test);
  };

  let cartHandler = () => {
    if (count === 0) {
      setCart((prev) => !prev);
    }
  };

  const addGoodInCart = (item) => {
    dispatch(cartGoodsReducerActions(item));
  };

  return (
    <>
      <div onClick={() => goodInCart()}>
        {cart ? (
          <div onClick={() => addGoodInCart(props.el)}>
            <div className={style.add_to_cart} onClick={addGood}>
              <div onClick={() => countHandlerIncrement()}>+</div>
            </div>
          </div>
        ) : (
          <p>good in cart</p>
        )}
      </div>
    </>
  );
};
