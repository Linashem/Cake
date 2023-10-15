import React from "react";
import style from "./OnePostContent.module.scss";

export const OnePostContent = (props) => {
  const postData = props.postData;
  return (
    <div className={style.post_wrapper} key={postData.id}>
      <h2>{postData.title} </h2>
      <p>{postData.body} </p>
    </div>
  );
};
