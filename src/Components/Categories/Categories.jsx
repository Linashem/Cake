import style from "./Categories.module.scss";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryActions, newTastesActions } from "../../store/goodsReducer";
// import { fetchGoodsCategory } from "../../asyncActions/goods";
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
  useEffect(() => {
    dispatch(categoryActions("all"));
  }, []);
  return (
    <div className={style.categories_wrapper}>
      {categories.map((el) => (
        <button
          className={style.category}
          key={el.key}
          onClick={() => dispatch(categoryActions(el.name))}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
};
