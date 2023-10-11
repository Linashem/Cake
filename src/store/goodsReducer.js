// import { goodData } from "../Helper/arrays/listOfGoods";

const defaultState = {
  goods: [],
  categoryGoods: [],
};
const goods = "goods";
const category = "category";
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
        categoryGoods: state.goods.filter(
          (el) => {
            if (action.payload === "all") {
              return [state.goods];
            } else {
              return el.category === action.payload;
            }
          }
        ),
      };
    default:
      return state;
  }
};

export const getGoodsActions = (repos) => ({
  type: goods,
  payload:repos,

});


export const categoryActions = (payload) => ({
  type: category,
  payload
});
