import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../asyncActions/posts";
import { BlogContent } from "../Components/BlogContent/BlogContent";

export const Blog = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts);
  }, []);

  return (
    <>
      <BlogContent posts={posts} />
    </>
  );
};
