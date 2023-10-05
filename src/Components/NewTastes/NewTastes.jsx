import React from "react";
import style from "./NewTastes.module.scss";

export const NewTastes = () => {
  return (
    <div className={style.taste_wrapper}>
      <h1>Our new tastes </h1>
      <div className={style.cards}>
        <div className={style.card}>
          <div>
          <img src="img/taste1.png" alt="new-taste" />
          </div>
        </div>
        <div className={style.card}>
          <img src="img/taste2.png" alt="new-taste" />
        </div>
        <div className={style.card}>
          <img src="img/taste3.png" alt="new-taste" />
        </div>
      </div>
    </div>
  );
};
