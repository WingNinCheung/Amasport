const LOAD_REVIEWS = "PRODUCT/LOAD_REVIEWS";
const ADD_REVIEW = "PRODUCT/ADD_REVIEWS";
const OTHER = "PRODUCT/ERROR";

// Action
const error = (reviews) => {
  return {
    type: OTHER,
    reviews,
  };
};

const load = (reviews) => {
  return {
    type: LOAD_REVIEWS,
    reviews,
  };
};

const addOneReview = (reviews) => {
  return {
    type: ADD_REVIEW,
    reviews,
  };
};

// Thunk
export const getReviews = (productId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${productId}/`);

  if (res.ok) {
    const reviews = await res.json();
    console.log("normal data ", reviews.reviews);

    if (reviews !== 1) {
      dispatch(load(reviews));
    } else {
      dispatch(error(reviews));
    }
    return reviews;
  }
};

export const addReview = (review, productId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${productId}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("create data ", data.reviews[0].id);
    dispatch(addOneReview(data));
    return data;
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
    case ADD_REVIEW:
      if (!state[action.reviews.reviews[0].id]) {
        newState = {
          ...state,
          [action.reviews.reviews[0].id]: action.reviews.reviews[0],
        };
        return newState;
      }
    // newState = {
    //   ...state,
    //   [action.reviews.reviews[0].id]: {
    //     ...state[action.reviews.reviews[0].id],
    //     ...action.reviews.reviews[0],
    //   },
    // };
    // return newState;
    case OTHER:
      return {};
    default:
      return state;
  }
};

export default reviewReducer;
