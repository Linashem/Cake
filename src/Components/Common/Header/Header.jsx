import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../../Helper/Conatants/routes";
import { clearUserDataActions } from "../../../store/userReducer";
import style from "./Header.module.scss";

export default function Header() {
  const state = useSelector((state) => state.cart.cart);
  const userName = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  const logoutHandler = () => {
    dispatch(clearUserDataActions());
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <nav className={style.nav}>
          <div className={style.logo_wrapper}>
            <Link to={routes.home}>
              <img className={style.logo} src="img/svg/logo.svg" alt="Cake" />
              <span className={style.span}> Cake</span>
            </Link>
          </div>
          <ul className={open ? style.list : style.list_hiden}>
            <li onClick={() => openHandler()} className={style.list_item}>
              <Link to={routes.shop}>Shop</Link>
            </li>
            <li onClick={() => openHandler()} className={style.list_item}>
              <Link to={routes.delivery}> Delivery</Link>
            </li>
            <li onClick={() => openHandler()} className={style.list_item}>
              <Link to={routes.blog}>Blog</Link>
            </li>
            <li onClick={() => openHandler()} className={style.list_item}>
              <Link to={routes.aboutUs}> About us</Link>
            </li>
          </ul>

          <div className={style.navbar}>
            <Link to={routes.cart}>
              <div className={style.cart}>
                <img src="img/svg/cart.svg" alt="cart" />
                <div className={style.cart_score}>{state} </div>
              </div>
            </Link>
            {userName ? (
              <div className={style.user}>
                <button
                  className={style.logout}
                  onClick={() => logoutHandler()}
                >
                  logout
                </button>
                <p className={style.user_name}>{userName} </p>{" "}
              </div>
            ) : (
              <Link className={style.user_icon} to={routes.auth}>
                <img src="img/svg/user.svg" alt="login" />
              </Link>
            )}
          </div>
          {open ? (
            <button className={style.burger} onClick={() => openHandler()}>
              <img src="img/svg/cross.svg" alt="x" />
            </button>
          ) : (
            <button onClick={() => openHandler()} className={style.burger}>
              <img src="img/svg/burger.svg" alt="" />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
