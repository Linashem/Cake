// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { goodsActions } from "../../store/goodsReducer";

import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "../Goods/Goods.module.scss";

import React from "react";

export const Preview = () => {
  const goods = useSelector((state) => state.goods.goods);
  return (
    <div className={style.goods_cards}>
      {goods.map(
        (el, i) =>
          i < 2 && (
            <>
              <div className={style.item}>
                <img className={style.item_img} src={el.img} alt={""} />
                {/* <h2 className={style.item_title}>{el.title}</h2> */}
                
              </div>
            </>
          )
      )}
      <div className={style.more}>
        <div className={style.item}>
          <div className={style.item_img}></div>
          
        
        </div>
      </div>
    </div>
  );
};
