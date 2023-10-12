const defaultState = {
  goods: [],
  category: "",
  newTastes: 0,
};
const goods = "goods";
const category = "category";
const newTastes = "newTastes";
export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case goods:
      return {
        ...state,
        goods: action.payload,
      };
    case category:
      return {
        ...state,
        category: action.payload,
      };
    case newTastes:
      return {
        ...state,
        newTastes: action.payload,
      };
    default:
      return state;
  }
};

export const getGoodsActions = (repos) => ({
  type: goods,
  payload: repos,
});

export const categoryActions = (payload) => ({
  type: category,
  payload,
});

export const newTastesActions = (payload) => ({
  type: newTastes,
  payload,
});
