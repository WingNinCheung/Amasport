const LOAD_REVIEWS = "PRODUCT/LOAD_REVIEWS";
const OTHER = "PRODUCT/ERROR";

// Action
const load = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

const error = (reviews) => {
  return {
    type: OTHER,
    reviews,
  };
};

// Thunk
export const getReviews = (productId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${productId}/`);

  console.log(res);
  if (res.ok) {
    const reviews = await res.json();
    console.log("This", reviews);
    if (reviews !== 1) {
      dispatch(load(reviews));
    } else {
      console.log("in else");
      dispatch(error(reviews));
    }
    return reviews;
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
    case OTHER:
      return {};
    default:
      return state;
  }
};

export default reviewReducer;
