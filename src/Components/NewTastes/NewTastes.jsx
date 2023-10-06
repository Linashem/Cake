import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../../Helper/Conatants/routes";
import { categoryActions, newTasteActions } from "../../store/goodsReducer";
import style from "./NewTastes.module.scss";

export const NewTastes = () => {
  // const dispatch = useDispatch();

  // const goToGood = (item) => {
  //   dispatch(oneGoodActions(item));
  // };
  const dispatch = useDispatch();

  // const chooseCategory = (cat) => {
  //   dispatch(categoryActions(cat));
  // };
  const goToNew = (el) => {
    dispatch(newTasteActions(el));
  };

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

      <button onClick={() => goToNew("newTaste")}>
        {" "}
        <Link to={routes.shop}>BUTTON</Link> 
      </button>
    </div>
  );
};
