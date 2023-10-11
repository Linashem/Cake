const defaultState = {
  posts: [],
};

const getPosts = "getPosts";
export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getPosts:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
export const getPostsActions = (repos) => ({
  type: getPosts,
  payload:repos,
});
