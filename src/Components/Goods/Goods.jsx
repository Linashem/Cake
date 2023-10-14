import { Link } from "react-router-dom";
import { routes } from "../../Helper/Conatants/routes";
import { useDispatch } from "react-redux";
import { CartOnGood } from "../CartOnGood/CartOnGood";
import { Stars } from "../Stars/Stars";
import style from "./Goods.module.scss";
import React from "react";
import { oneGoodActions } from "../../store/goodsReducer";

export const Goods = (props) => {
  const goods = props.goods;
  const dispatch = useDispatch();

  const goToGood = (item) => {
    dispatch(oneGoodActions(item));
  };


  return (
    <div className={style.goods_cards}>
      {goods.map((el) => (
        <>
          <div className={style.item} key={el.id}>
            <Link className={style.img_link}  to={`/shop/${el.id}`} onClick={() => goToGood(el)}>
              <img className={style.item_img} src={el.img} alt={""} />
              {el.newTaste && <div className={style.new}>New</div>}
            </Link>
            <div className={style.text}>
              <Link   to={`/shop/${el.id}`} onClick={() => goToGood(el)}>
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
