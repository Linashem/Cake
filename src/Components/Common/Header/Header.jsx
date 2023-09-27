import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../../Helper/Conatants/routes";
import style from "./Header.module.scss";

export default function Header() {
  const state = useSelector((state) => state.cart.cart);
  const [visibleCart, setVisibleCart] = useState(false);
  const visibleHandler = () => {
    setVisibleCart((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <div className={style.logo_wrapper}>
            <Link to={routes.home}>
              <img className={style.logo} src="img/svg/logo.svg" alt="Cake" />
              <span> Cake</span>
            </Link>
          </div>
          <ul className={style.list}>
            <li className={style.list_item}>Shop</li>
            <li className={style.list_item}>Delivery</li>
            <li className={style.list_item}>About us</li>
            {/* <button className={style.list_btn} onClick={() => visibleHandler()}>
              CART
            </button> */}
            {/* <div> {visibleCart && <GoodsInCart />} </div> */}
            <Link to={routes.cart}>
              <div className={style.cart}>
                <img src="img/svg/cart.svg" alt="cart" />
                <div className={style.cart_score}>{state} </div>
              </div>
            </Link>
          </ul>
        </nav>
      </div>
      {/* <div className="presentation"></div> */}
    </header>
  );
}
