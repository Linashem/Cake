const defaultState = {
  good: "",
};

const takeGood = "takeGood";
export const oneGoodReducer = (state = defaultState, action) => {
  switch (action.type) {
    case takeGood:
      return {
        ...state,
        good: action.payload,
      };

    default:
      return state;
  }
};
export const oneGoodActions = (payload) => ({
  type: takeGood,
  payload,
});
