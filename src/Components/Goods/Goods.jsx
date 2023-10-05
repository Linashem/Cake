// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../Helper/Conatants/routes";
import { useDispatch } from "react-redux";

import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "./Goods.module.scss";
import { oneGoodActions } from "../../store/oneGoodReduser";

export const Goods = () => {
  const goods = useSelector((state) => state.goods.categoryGoods);
  const dispatch = useDispatch();


  const goToGood = (item) => {
    dispatch(oneGoodActions(item));
  };

  return (
    <div className={style.goods_cards}>
      {goods.map((el) => (
        <>
          <div className={style.item}>
            <Link to={routes.good} onClick={() => goToGood(el)}>
              <img className={style.item_img} src={el.img} alt={""} />
            </Link>
            <div className={style.text}>
              <Link to={routes.good} onClick={() => goToGood(el)}>
                <h2 className={style.item_title}>{el.title}</h2>
              </Link>
              <p className={style.item_desc}>{el.desc}</p>
              <Stars />
              <div className={style.item_footer}>
                <b className={style.item_price}>{el.price}$</b>
                <CartOnGood el={el} />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
