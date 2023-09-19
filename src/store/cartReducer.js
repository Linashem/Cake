import { type } from "@testing-library/user-event/dist/type";

const defaultState = {
  cart: 0,
};

const incrementCart = "incrementCart";
const decrementCart = "decrementCart";

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case incrementCart:
      return { ...state, cart: state.cart + 1 };
    case decrementCart:
      if (state.cart > 0) {
        return {
          ...state,
          cart: state.cart - 1,
        };
      }

    default:
      return state;
  }
};
export const cartIncrementAction = (payload) => ({
  type: incrementCart,
  payload,
});
export const cartDecrementAction = (payload) => ({
  type: decrementCart,
  payload,
});
