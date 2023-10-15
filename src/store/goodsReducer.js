const defaultState = {
  goods: [],
  category: "",
  newTastes: 0,
  oneGood:{}
};
const goods = "goods";
const category = "category";
const newTastes = "newTastes";
const oneGood= 'oneGood'
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
      case oneGood:
        return {
          ...state,
          oneGood: action.payload,
        };
    default:
      return state;
  }
};

export const getGoodsActions = (payload) => ({
  type: goods,
  payload
});

export const categoryActions = (payload) => ({
  type: category,
  payload,
});

export const newTastesActions = (payload) => ({
  type: newTastes,
  payload,
});

export const oneGoodActions = (payload) => ({
  type: oneGood,
  payload,
});
