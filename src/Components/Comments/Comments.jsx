import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentsAction,
  deliteCommentsAction,
} from "../../store/commentReducer";

export const Comments = () => {
  const dispatch = useDispatch();
  const meRef = React.createRef();

  // const addComm = () => {
  //   const comment = {
  //     text: meRef.current.value,
  //     id: Date.now(),
  //   };
  //   dispatch({ type: "addComment", payload: comment.text});
  //   meRef.current.value = "";
  // };
  const comments = useSelector((state) => state.comments.comments);

  const addComm = (name) => {
    const comment = {
      name,
      id: Date.now(),
    };
    meRef.current.value = "";

    dispatch(addCommentsAction(comment));
  };

  const deliteComm = (comment) => {
    dispatch(deliteCommentsAction(comment.id));
  };

  return (
    <div>
      <div>
        <button onClick={() => addComm(meRef.current.value)}>
          Add comment
        </button>
      </div>
      <textarea ref={meRef}></textarea>

      <div>
        {comments.length > 0 ? (
          <div>
            {comments.map((comment) => (
              <div>
                {" "}
                <p>{comment.userName} </p>
                <p>{comment.comment} </p>
                <button onClick={() => deliteComm(comment)}>x</button>
                <div>{comment.name} </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>Please write comments</h2>
        )}
      </div>
    </div>
  );
};
