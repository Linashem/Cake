import { Link } from "react-router-dom";
import style from "./BlogContent.module.scss";

export const Repo = (props) => {
  const post = props.post;

  return (
    <div className={style.post_wrapper}>
      <Link to={`/blog/${post.id}`}>
        <h3 className={style.title}>{post.title} </h3>
      </Link>
      <p className={style.desc}>{post.body} </p>
    </div>
  );
};
