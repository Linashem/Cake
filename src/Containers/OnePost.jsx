import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOnePost } from "../asyncActions/posts";
import { OnePostContent } from "../Components/OnePostContent/OnePostContent";

export const OnePost = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.posts.onePost);

  useEffect(() => {
    if (postId) {
      dispatch(fetchOnePost(postId));
    }
  }, [postId]);

  return <OnePostContent postData={postData} />;
};
