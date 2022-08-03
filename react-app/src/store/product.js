const LOAD_PRODUCTS = "PRODUCT/LOAD_BUSINESS";

// Action
const load = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products,
  };
};

// Thunk
export const getProducts = () => async (dispatch) => {
  const res = await fetch("/api/products/");

  if (res.ok) {
    const products = await res.json();
    dispatch(load(products));
  }
};

// Reducer

const productReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_PRODUCTS:
      action.products.products.forEach((product) => {
        newState[product.id] = product;
      });
      return newState;

    default:
      return state;
  }
};

export default productReducer;
