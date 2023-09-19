const defaultState = {
  goodsInCart: [],
};

const addGoods = "addGoods";
const removeGoods = "removeGoods";

export const cartGoodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addGoods:
      return {
        ...state,
        goodsInCart: [...state.goodsInCart, action.payload],
      };
    case removeGoods:
      return {
        ...state,
        goodsInCart: state.goodsInCart.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};

export const cartGoodsReducerActions = (payload) => ({
  type: addGoods,
  payload,
});

export const removeGoodsReducerActions = (payload) => ({
  type: removeGoods,
  payload,
});
