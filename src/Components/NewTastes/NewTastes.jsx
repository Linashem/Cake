import React from "react";

import style from "./NewTastes.module.scss";

export const NewTastes = () => {
  return (
    <div className={style.taste_wrapper}>
      <h1 className={style.title}>Our new tastes </h1>
      <p className={style.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
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
