import React from "react";
import style from "./Benefits.module.scss";
export const Benefits = () => {
  return (
    <div className={style.benef_wrapper}>
        <div className={style.benef_img}>
            <img src="img/benefits.jpg" alt="" />
        </div>
      <div className={style.text}>
        <h2>Our benefits</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sequi temporibus reiciendis officiis fugiat distinctio laudantium iure
          eos nihil illum placeat tempore molestias accusantium impedit tempora
          id, eum quam rem est vero veniam sint ducimus! Placeat, assumenda ad
          praesentium sint perspiciatis similique, sit aspernatur ea accusantium
          aut tenetur suscipit amet!
        </p>
      </div>
    </div>
  );
};
