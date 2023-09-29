import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goodsActions } from "../../store/goodsReducer";

import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "./Goods.module.scss";

export const Goods = () => {
  const goods = useSelector((state) => state.goods.goods);
  const [good, setGoods] = useState([]);
  useEffect(() => {

    setGoods(goods)
  }, [])
  return (
    <div className={style.goods_cards}>
      {good.map((el) => (
        <>
          <div className={style.item}>
            <img className={style.item_img} src={el.img} alt={""} />
            <h2 className={style.item_title}>{el.title}</h2>
            <p className={style.item_desc}>{el.desc}</p>
            <Stars/>
            <div className={style.item_footer}>
              <b className={style.item_price}>{el.price}$</b>
              <CartOnGood el={el} />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
