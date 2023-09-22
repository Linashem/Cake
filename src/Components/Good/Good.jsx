import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  cartGoodsReducerActions,
  removeGoodsReducerActions,
} from "../../store/cartGoodsReducer";
import {
  cartDecrementAction,
  cartIncrementAction,
} from "../../store/cartReducer";
import style from "./Good.module.scss";

export const Good = (props) => {
  const dispatch = useDispatch();
  const addGood = () => {
    dispatch(cartIncrementAction());
  };
  const deliteGood = () => {
    dispatch(cartDecrementAction());
  };

  const [cart, setCart] = useState(true);
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
    // console.log(item.id);
    dispatch(cartGoodsReducerActions(item));
  };

  const removeGoodInCart = (item) => {
    // console.log(item.id);
    dispatch(removeGoodsReducerActions(item.id));
  };

  return (
    <>
      <div className={style.item}>
        <img className={style.item_img} src={props.good.img} alt={""} />
        <h2 className={style.item_title}>{props.good.title}</h2>
        <p className={style.item_desc}>{props.good.desc}</p>
        <b className={style.item_price}>{props.good.price}$</b>
        <div onClick={() => cartHandler()}>
          {cart ? (
            <div
              onClick={() =>
                addGoodInCart(
                  // // { props }
                  <div>
                    id={props.good.id}
                    {/* <img src={props.good.img} alt={""} /> */}
                    <h2>{props.good.title}</h2>
                    <p>{props.good.desc}</p>
                    <b>{props.good.price}$</b>
                    {props.id}
                    <button onClick={() => removeGoodInCart(props.good)}>
                      x
                    </button>
                  </div>
                )
              }
            >
              <div className={style.add_to_cart} onClick={addGood}>
                <div onClick={() => countHandlerIncrement()}>+</div>
              </div>
            </div>
          ) : (
            <div>
              <div onClick={() => deliteGood()}>
                <button onClick={() => countHandlerDecrement()}>-</button>
              </div>
              <div> {count}</div>
              <div onClick={addGood}>
                <button onClick={() => countHandlerIncrement()}>+</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
