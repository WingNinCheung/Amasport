const OTHER = "PRODUCT/ERROR";
const LOAD_CARTS = "CART/LOAD_CART";
const UPDATE_QUANTITY = "CART/UPDATE_QUANTITY";
const ADD_ITEM = "CART/ADD_ITEM";
const REMOVE_ITEM = "CART/REMOVE_ITEM";
const REMOVE_ALL = "CART/REMOVE";
const DELETE_CART = "CART/DELELE_ALL";

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

const addItem = (cart) => {
  return {
    type: ADD_ITEM,
    cart,
  };
};

const deleteItem = (cart) => {
  return {
    type: REMOVE_ITEM,
    cart,
  };
};

const removeAll = () => {
  return {
    type: REMOVE_ALL,
  };
};

const deleteCart = (cart) => {
  return {
    type: DELETE_CART,
    cart,
  };
};

// Thunk
export const getCart = (userId) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}`);

  if (res.ok) {
    const cart = await res.json();
    dispatch(load(cart));
  }
};

export const updateQuantity = (userId, productId, qty) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}/${productId}/${qty}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: qty,
  });

  if (res.ok) {
    const cart = await res.json();
    dispatch(changeQuantity(cart));
    return cart;
  }
};

export const addProduct = (userId, productId, qty) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}/${productId}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: 1,
  });

  if (res.ok) {
    const cart = await res.json();

    // dispatch(changeQuantity(cart));
    // return cart;
  }
};

export const deleteProduct = (userId, productId) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}/${productId}/delete`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteItem(res));
  }
};

export const removeAllCart = () => async (dispatch) => {
  dispatch(removeAll());
};

export const removeCart = (userId) => async (dispatch) => {
  const res = await fetch(`/api/carts/${userId}/delete`, {
    method: "DELETE",
  });

  if (res.ok) {
    const cart = await res.json();

    dispatch(deleteCart(cart));
  }
};
// Reducer

const cartReducer = (state = {}, action) => {
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
    case REMOVE_ITEM:
      newState = { ...state };
      delete newState[action.cart];
      return newState;
    case REMOVE_ALL:
      return {};
    case DELETE_CART:
      newState = { ...state };
      action.cart.cart.forEach((item) => {
        delete newState[item];
      });
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
