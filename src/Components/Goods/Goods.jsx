import { useSelector } from "react-redux";

import { CartOnGood } from "../CartOnGood/CartOnGood";
import style from "./Goods.module.scss";

export const Goods = () => {
  const goods = useSelector((state) => state.goodsInCart.goods);

  return (
    <div className={style.goods_cards}>
      {goods.map((el) => (
        <>
          <div className={style.item}>
            <img className={style.item_img} src={el.img} alt={""} />
            <h2 className={style.item_title}>{el.title}</h2>
            <p className={style.item_desc}>{el.desc}</p>
            <b className={style.item_price}>{el.price}$</b>
            <CartOnGood el={el} />

          </div>
        </>
      ))}
    </div>
  );
};
