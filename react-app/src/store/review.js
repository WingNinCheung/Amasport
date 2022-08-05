const LOAD_REVIEWS = "PRODUCT/LOAD_REVIEWS";
const ADD_REVIEW = "PRODUCT/ADD_REVIEWS";
const OTHER = "PRODUCT/ERROR";
const DELETE_REVIEW = "PRODUCT/DELETE_REVIEW";

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

const deleteOneReview = (reviews) => {
  return {
    type: DELETE_REVIEW,
    reviews,
  };
};

// Thunk
export const getReviews = (productId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${productId}/`);

  if (res.ok) {
    const reviews = await res.json();

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
    dispatch(addOneReview(data));
    return data;
  }
};

export const deleteReview = (reviewId) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${reviewId}/delete`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteOneReview(reviewId));
  }
};

export const updateReview = (data, id) => async (dispatch) => {
  const res = await fetch(`/api/reviews/${id}/edit`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const review = await res.json();

    console.log("review in thunkkk", review);
    dispatch(addOneReview(review));
    return review;
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
      newState = {
        ...state,
        [action.reviews.reviews[0].id]: {
          ...state[action.reviews.reviews[0].id],
          ...action.reviews.reviews[0],
        },
      };
      return newState;
    case DELETE_REVIEW:
      newState = { ...state };
      delete newState[action.reviewId];
      return newState;
    case OTHER:
      return {};
    default:
      return state;
  }
};

export default reviewReducer;
