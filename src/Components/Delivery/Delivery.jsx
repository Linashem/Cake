import React from "react";
import style from "./Delivery.module.scss";

export const Delivery = () => {
  return (
    <div className={style.delivery_wrapper}>
      <div className={style.text}>
        <h1>Terms of delivery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          sed adipisci ad hic quo quas similique autem amet rerum qui debitis
          magnam nobis ut accusantium, doloremque facere impedit eaque
          excepturi?
        </p>
      </div>
      <div className={style.img}>
        <img src="img/delivery.jpg" alt="" />
      </div>
    </div>
  );
};
