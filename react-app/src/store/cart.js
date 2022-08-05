const OTHER = "PRODUCT/ERROR";
const LOAD_CARTS = "CART/LOAD_CART";
const UPDATE_QUANTITY = "CART/UPDATE_QUANTITY";
const REMOVE_ALL = "CART/REMOVE";

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

const changeQuantity = (cart) => {
  return {
    type: UPDATE_QUANTITY,
    cart,
  };
};

const removeAll = () => {
  return {
    type: REMOVE_ALL,
  };
};

// Thunk
export const getCart = (userId) => async (dispatch) => {
  const res = await fetch(`api/carts/${userId}`);

  if (res.ok) {
    const cart = await res.json();
    dispatch(load(cart));
  }
};

export const updateQuantity = (userId, productId, qty) => async (dispatch) => {
  console.log("in thunk");
  const res = await fetch(`/api/carts/${userId}/${productId}/${qty}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: qty,
  });

  if (res.ok) {
    const cart = await res.json();

    console.log("review in thunkkk", cart);
    dispatch(changeQuantity(cart));
    return cart;
  }
};

export const removeAllCart = () => async (dispatch) => {
  dispatch(removeAll());
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
    case UPDATE_QUANTITY:
      newState = {
        ...state,
        [action.cart.cart[0].id]: {
          ...state[action.cart.cart[0].id],
          ...action.cart.cart[0],
        },
      };
      return newState;
    case REMOVE_ALL:
      return {};
    default:
      return state;
  }
};

export default carrReducer;
