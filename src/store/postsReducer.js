const defaultState = {
  posts: [],
  onePost: {},
};

const getPosts = "getPosts";
const onePost = "onePost";
export const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case getPosts:
      return {
        ...state,
        posts: action.payload,
      };
    case onePost:
      return {
        ...state,
        onePost: action.payload,
      };

    default:
      return state;
  }
};
export const getPostsActions = (repos) => ({
  type: getPosts,
  payload: repos,
});
export const onePostActions = (repo) => ({
  type: onePost,
  payload: repo,
});
