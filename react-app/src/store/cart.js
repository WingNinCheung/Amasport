const LOAD_CARTS = "CART/LOAD_CART";
const OTHER = "PRODUCT/ERROR";

// Action
const error = (cart) => {
  return {
    type: OTHER,
    cart,
  };
};

const load = (cart) => {
  return {
    type: LOAD_CARTS,
    cart,
  };
};

// Thunk
export const getCart = (userId) => async (dispatch) => {
  const res = await fetch(`api/carts/${userId}`);

  if (res.ok) {
    const cart = await res.json();
    // console.log(cart);
    dispatch(load(cart));
  }
};

// Reducer

const carrReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_CARTS:
      action.cart.cart.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;

    default:
      return state;
  }
};

export default carrReducer;
