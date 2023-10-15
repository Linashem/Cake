import React, { useState } from "react";
import style from "./Stars.module.scss";

export const Stars = () => {
  let btns = [1, 1, 1, 1, 1];

  let fullStar = <img src="./img/fs.png" alt="" className={style.star} />;
  let emptyStar = <img src="./img/es.png" alt="" className={style.star} />;
  let [star, setStar] = useState([
    emptyStar,
    emptyStar,
    emptyStar,
    emptyStar,
    emptyStar,
  ]);

  let scoreHandler = (e) => {
    let targetId = e.target.id || e.target.parentNode.id;
    let numStar = [];

    for (let i = 1; i < btns.length + 1; i++) {
      if (i <= targetId) {
        numStar.push(fullStar);
      } else {
        numStar.push(emptyStar);
      }
    }
    setStar(numStar);
  };
  return (
    <>
      <div className={style.star_block}>
        {star}
        <div className={style.star_btns}>
          {btns.map((el, ind) => (
            <button
              className={style.star_btn}
              id={ind + 1}
              onClick={scoreHandler}
            >
              {el}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
