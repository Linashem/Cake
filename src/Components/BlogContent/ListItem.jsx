import style from "./BlogContent.module.scss";

export const Repo = (props) => {
  const post = props.post;

  return (
    <div className={style.post_wrapper}>
      <h3 className={style.title}>{post.title} </h3>
      <p className={style.desc}>{post.body} </p>
    </div>
  );
};
