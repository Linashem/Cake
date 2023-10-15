import React from "react";
import { ListItem} from "./ListItem";
import style from "./BlogContent.module.scss";


export const BlogContent = (props) => {
  return (
    <div className={style.blog_wrapper}>
      <h1 className={style.blog_title} > Our blog</h1>
      <div> 
        {props.posts.map((post)=> <ListItem key={post.id} post={post} /> )}
      </div>
    </div>
  );
};
