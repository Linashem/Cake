const defaultState = {
  cart: 0,
  goodCount: 0,
};

const incrementCart = "incrementCart";
const decrementCart = "decrementCart";
const goodCountIncrement = "goodCountIncrement";

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case incrementCart:
      return { ...state, cart: state.cart + 1 };
    case decrementCart:
      return {
        ...state,
        cart: state.cart - 1,
      };
    case goodCountIncrement:
      return { ...state, goodCount: state.goodCount + 1 };

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

export const oneGoodCountIncrementAction = () => ({
  type: goodCountIncrement,
});
