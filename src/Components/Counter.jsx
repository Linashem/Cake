import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGoodsReducerActions } from "../store/cartGoodsReducer";
import { cartDecrementAction, cartIncrementAction } from "../store/cartReducer";

export const Counter = (props) => {
  const dispatch = useDispatch();

  const addGood = () => {
    dispatch(cartIncrementAction());
  };

  const deliteGood = () => {
    dispatch(cartDecrementAction());
  };
  const [count, setCount] = useState(1);

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
  const removeGoodInCart = (item) => {
    console.log(item);
    dispatch(removeGoodsReducerActions(item));
  };

  return (
    <div>
      <div>
        {count === 1 ? (
          <div onClick={() => deliteGood()}>
            <button onClick={() => removeGoodInCart(props.item.id)}>-%</button>
          </div>
        ) : (
          <div onClick={() => deliteGood()}>
            <button onClick={() => countHandlerDecrement()}>=-</button>
          </div>
        )}
      </div>
      <div> {count}</div>
      <div onClick={addGood}>
        <button onClick={() => countHandlerIncrement()}>+</button>
      </div>
    </div>
  );
};
