import style from "./Categories.module.scss";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryActions, newTasteActions } from "../../store/goodsReducer";
import { NewTastes } from "../NewTastes/NewTastes";
import { fetchGoodsCategory, fetchGoodsNew } from "../../asyncActions/goods";
import { Link } from "react-router-dom";

export const Categories = () => {
  const categories = [
    {
      key: "birthday cake",
      name: "birthday cake",
    },
    {
      key: "cupcakes",
      name: "cupcakes",
    },
    {
      key: "wedding cake",
      name: "wedding cake",
    },
    {
      key: "cheesecake",
      name: "cheesecake",
    },
    {
      key: "all",
      name: "all",
    },
  ];
  const dispatch = useDispatch();

  const chooseCategory = (cat) => {
    dispatch(categoryActions(cat));
  };
  useEffect(() => {
    dispatch(categoryActions("all"));
  }, []);

  // useEffect(()=>{
  //   dispatch(newTasteActions(true))
  // }, [<NewTastes/>])

  return (
    <div className={style.categories_wrapper}>
      {categories.map((el) => (
        <button className={style.category} key={el.key} onClick={() =>(dispatch( fetchGoodsCategory(el.name)))}>
          {el.name}
        </button>
      ))}
        {/* <Link to={routes.shop}> */}
        {/* <button onClick={() => dispatch(fetchGoodsNew())}>NEEEW</button> */}
      {/* </Link> */}
    </div>
  );
};
