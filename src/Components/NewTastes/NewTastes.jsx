import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGoodsNew } from "../../asyncActions/goods";
import { routes } from "../../Helper/Conatants/routes";
import { newTastesActions } from "../../store/goodsReducer";

import style from "./NewTastes.module.scss";

export const NewTastes = () => {
  const dispatch = useDispatch();
  const newTasteHandler = () => {
    dispatch(newTastesActions(1));
  };
  return (
    <div className={style.taste_wrapper}>
      <h2 className={style.title}>Our new tastes </h2>
      <p className={style.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div
        className={style.link_block}
        onClick={() => dispatch(fetchGoodsNew())}
      >
        <div onClick={() => newTasteHandler()}>
          <Link className={style.link} to={routes.shop}>
            Try our new tastes <img src="img/svg/arrow.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.card1}>
          <img src="img/taste1.png" alt="new-taste" />
        </div>
        <div className={style.card2}>
          <img src="img/taste2.png" alt="new-taste" />
        </div>
        <div className={style.card3}>
          <img src="img/taste3.png" alt="new-taste" />
        </div>
      </div>
    </div>
  );
};
