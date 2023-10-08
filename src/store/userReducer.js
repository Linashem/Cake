const defaultState = {
  email: "",
  token: 0,
  loading: false,
};

const setUserEmail = "setUserEmail";
const setUserToken = "setUserToken";
const setUserLoading = "setUserLoading";
const clearUserData = "clearUserData";

export const userDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case setUserEmail:
      return {
        ...state,
        email: action.payload,
      };
    case setUserToken:
      return {
        ...state,
        token: action.payload,
      };

    case setUserLoading:
      return {
        ...state,
        loading: action.payload,
      };
    case clearUserData:
      return {
        ...defaultState,
      };
    default:
      return state;
  }
};
export const setEmailActions = (payload) => ({
  type: setUserEmail,
  payload,
});

export const setTokenActions = (payload) => ({
  type: setUserToken,
  payload,
});

export const setUserLoadingActions = (payload) => ({
  type: setUserLoading,
  payload,
});

export const clearUserDataActions = () => ({
  type: clearUserData,
});
