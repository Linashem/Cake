export const Repo = (props) => {
  const post = props.post;

  return (
    <div>
      <h3>{post.title} </h3>
      <hr />
      <h3>{post.body} </h3>

      <p></p>
    </div>
  );
};
