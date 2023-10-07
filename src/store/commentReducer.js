import { commentsData } from "../Helper/arrays/listOfComments";

const defaultState = {
  // comments: [],
  comments: commentsData,

};
const addComment = "addComment";
const deliteComment = "deliteComment";
export const commentReducer = (state = defaultState, action) => {

  switch (action.type) {
    case addComment:
      return { ...state, comments: [...state.comments, action.payload] };
    case deliteComment:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export const addCommentsAction=(payload)=>({type:addComment, payload});
export const deliteCommentsAction=(payload)=>({type:deliteComment, payload})
