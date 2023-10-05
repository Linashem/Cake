import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "./OneGood.module.scss";

export const OneGood = () => {
  const good = useSelector((state) => state.good.good);

  return good ? (
    <div className={style.good_wrapper}>
      <div className={style.img_block}>
        <img src={good.img} alt={good.title} />
      </div>
      <div className={style.text_block}>
        <h1 className={style.title}> {good.title}</h1>
        <Stars />
        <span className={style.desc}>{good.desc} </span>
        <div className={style.footer}>
          <p className={style.price}>{good.price}$</p>
          <CartOnGood el={good} />
        </div>
      </div>
    </div>
  ) : (
    <Link to={"/shop"}>back</Link>
  );
};
