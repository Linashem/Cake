import { goodData } from "../listOfGoods";

const defaultState = {
  goods: goodData,
  categoryGoods: [],
};
const goods = "goods";
const category = "category";
const newTaste = "newTaste";

export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case goods:
      return {
        ...state,
        goods: [...state.goods],
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
          // el.category === action.payload
        ),
      };
    case newTaste:
      return {
        ...state,
        categoryGoods: state.goods.filter((el) => el.newTaste ),
      };
    default:
      return state;
  }
};

export const goodsActions = () => ({
  type: goods,
});

export const newTasteActions = (payload) => ({
  type: newTaste,
  payload,
});

export const categoryActions = (payload) => ({
  type: category,
  payload,
});
