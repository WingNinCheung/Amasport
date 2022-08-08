const LOAD_ORDERS = "ORDER/LOAD_ORDERS";
const CREATE_ORDER = "ORDER/CREATE_ORDER";
// const ADD_ITEM = "CART/ADD_ITEM";
// const REMOVE_ITEM = "CART/REMOVE_ITEM";
// const REMOVE_ALL = "CART/REMOVE";

// Action

const load = (order) => {
  return {
    type: LOAD_ORDERS,
    order,
  };
};

const addOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order,
  };
};

// Thunk

export const getOrder = (userId) => async (dispatch) => {
  const res = await fetch(`/api/orders/${userId}`);

  if (res.ok) {
    const order = await res.json();
    dispatch(load(order));
  }
};

export const createOrder = (data) => async (dispatch) => {
  console.log("in thunk");
  const res = await fetch(`/api/orders/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const order = await res.json();
    console.log(order);
    dispatch(addOrder(order));
    return order;
  }
};

export const updateOrder = (data, id) => async (dispatch) => {
  const res = await fetch(`/api/orders/${id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const order = await res.json();

    console.log("review in thunkkk", order);
    dispatch(addOrder(order));
    return order;
  }
};

// Reducer

const orderReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_ORDERS:
      action.order.order.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    case CREATE_ORDER:
      if (!state[action.order.order[0].id]) {
        newState = {
          ...state,
          [action.order.order[0].id]: action.order.order[0],
        };
        return newState;
      }
      newState = {
        ...state,
        [action.order.order[0].id]: {
          ...state[action.order.order[0].id],
          ...action.order.order[0],
        },
      };
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
