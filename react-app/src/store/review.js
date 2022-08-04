const LOAD_REVIEWS = "PRODUCT/LOAD_REVIEWS";

// Action
const load = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

// Thunk
export const getReviews = (productId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${productId}/`);

  console.log(res);
  if (res.ok) {
    const reviews = await res.json();
    console.log(reviews.reviews);
    dispatch(load(reviews));
  } else {
    console.log("else");
    return "wrong";
  }
};

// Reducer

const reviewReducer = (state = {}, action) => {
  let newState = {};
  switch (action.type) {
    case LOAD_REVIEWS:
      action.reviews.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;

    default:
      return state;
  }
};

export default reviewReducer;
