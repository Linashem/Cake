import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { cartGoodsReducerActions } from "../../store/cartGoodsReducer";
import { cartIncrementAction } from "../../store/cartReducer";
import style from "./CartOnGood.module.scss";

export const CartOnGood = (props) => {
  const [cart, setCart] = useState(true);
  const [count, setCount] = useState(0);

  let countHandlerIncrement = () => {
    let test = count;
    test += 1;
    setCount(test);
  };

  let cartHandler = () => {
    if (count === 0) {
      setCart((prev) => !prev);
    }
  };
  const dispatch = useDispatch();

  const addGood = () => {
    dispatch(cartIncrementAction());
  };

  const addGoodInCart = (item) => {
    dispatch(cartGoodsReducerActions(item));
  };

  return (
    <>
      <div onClick={() => cartHandler()}>
        {cart ? (
          <div onClick={() => addGoodInCart(props.el)}>
            <div  onClick={addGood}>
              
              <div  className={style.add_to_cart}   onClick={() => countHandlerIncrement()}>+</div>
            </div>
          </div>
        ) : (
          <div>
          <img className={style.cart} src="img/svg/in-cart.svg" alt="good in cart" />

          </div>
        )}
      </div>
    </>
  );
};
