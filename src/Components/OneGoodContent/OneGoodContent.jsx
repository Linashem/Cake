import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Helper/Conatants/routes";
import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "./OneGoodContent.module.scss";

export const OneGoodContent = (props) => {
  return (
    <>
      <div key={props.goodData.id} className={style.good_wrapper}>
        <div className={style.img_block}>
          <img src={props.goodData.img} alt={props.goodData.title} />
        </div>
        <div className={style.text_block}>
          <h1 className={style.title}> {props.goodData.title}</h1>
          <Stars />
          <span className={style.desc}>{props.goodData.desc} </span>
          <div className={style.footer}>
            <p className={style.price}>{props.goodData.price}$</p>
            <CartOnGood el={props.goodData} />
          </div>
        </div>
        <Link className={style.back} to={routes.shop}>back</Link>
      </div>
    </>
  );
};
