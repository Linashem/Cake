const defaultState = {
  inCart: true,
};
const goodInGood = "goodInGood";
export const goodInGoogReducer = (state = defaultState, action) => {
  switch (action.type) {
    case goodInGood:
      return {
        ...state,
        // inCart: !(state.inCart),
      };

    default:
      return state;
  }
};


export const goodInGoogAction =(payload)=>({type:goodInGood, payload})