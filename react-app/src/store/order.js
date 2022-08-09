const LOAD_ORDERS = "ORDER/LOAD_ORDERS";
const CREATE_ORDER = "ORDER/CREATE_ORDER";
const DELETE_ORDER = "ORDER/DELETE_ORDER";
const UPDATE_STATUS = "ORDER/UPDATE_STATUS";

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

const deleteOrder = (order) => {
  return {
    type: DELETE_ORDER,
    order,
  };
};

const update = (order) => {
  return {
    type: UPDATE_STATUS,
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
  const res = await fetch(`/api/orders/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const order = await res.json();

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
    dispatch(addOrder(order));
    return order;
  }
};

export const updateStatus = (data, id) => async (dispatch) => {
  const res = await fetch(`/api/orders/${id}/edit-status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const order = await res.json();
    dispatch(addOrder(order));
    return order;
  }
};

export const removeOrder = (id) => async (dispatch) => {
  console.log("hit");
  const res = await fetch(`/api/orders/${id}/delete`, {
    method: "DELETE",
  });

  console.log("res,", res);
  if (res.ok) {
    dispatch(deleteOrder(id));
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
    case DELETE_ORDER:
      newState = { ...state };
      delete newState[action.order];
      return newState;
    default:
      return state;
  }
};

export default orderReducer;
