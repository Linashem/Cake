import { useState } from "react";
import { useSelector } from "react-redux";
import { GoodsInCart } from "../../../GoodsInCart";

export default function Header() {
  const state = useSelector((state) => state.cart.cart);
  const [visibleCart, setVisibleCart] = useState(false);
  const visibleHandler = () => {
    setVisibleCart((prev) => !prev);
  };

  return (
    <header>
      <div className="style.wrapper">
        <nav>
          <span className="logo"> Cake</span>
          <ul className="list">
            <li>Shop</li>
            <li>Delivery</li>
            <li>About us</li>
            <button onClick={() => visibleHandler()}>CART</button>
            <div> {visibleCart && <GoodsInCart />} </div>
            <div>{state} </div>
          </ul>
        </nav>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
