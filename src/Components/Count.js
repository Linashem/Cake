import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartIncrementAction } from "../store/cartReducer";

let test = 0;
export const Count = () => {
    const dispatch = useDispatch();
    const addGood = () => {
      dispatch(cartIncrementAction());
    };
  
    const [cart, setCart] = useState(true);
    const [count, setCount] = useState(0);
    let countHandlerIncrement = () => {
      
      test += 1;
      setCount(test);
    };
    let countHandlerDecrement = () => {
     
      test -= 1;
      setCount(test);
    };
    let cartHandler = () => {
      if (count === 0) {
        setCart((prev) => !prev);
      }
      
    };

  return (
    <div onClick={() => cartHandler()}>
          {cart && test === 0 ? (
            <div className="add-to-cart" onClick={ addGood}  >
              +
            </div>
          ) : (
            <div>
               
              <button onClick={() => countHandlerDecrement()}>-</button>
              <div> {count}</div>
              <button onClick={() => countHandlerIncrement()}>+</button>
            </div>
          )}
        </div>
  );
};
