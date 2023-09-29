import { goodData } from "../listOfGoods";

const defaultState = {
  goods: goodData,
};
const goods = "goods";

export const goodsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case goods:
      return {
        ...state
      };
    default:
      return state;
  }
};

export const goodsActions = () => ({
  type: goods,
});
