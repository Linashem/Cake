import style from "./Categories.module.scss";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../store/goodsReducer";

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
    dispatch(categoryActions('all'));
   
  }, []);
  return (
    <div>
      {categories.map((el) => (
        <button key={el.key}  onClick={()=>chooseCategory(el.name)} >{el.name}</button>
      ))}
    </div>
  );
};
