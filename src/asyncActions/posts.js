import React from "react";
import axios from "axios";
import { getPostsActions } from "../store/postsReducer";

export const apiUrl = "https://jsonplaceholder.typicode.com/posts";
export const fetchPosts = () => {
  return async (dispatch) => {
    const resp = await axios.get(apiUrl);
    dispatch(getPostsActions(resp.data));
  };
};
