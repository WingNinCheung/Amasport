import { getReviews } from "../../store/review";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/review";

function Reviews() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reviews = useSelector((state) => Object.values(state.review));
  const [addReview, setAddReview] = useState(false);
  const sessionUser = useSelector((state) => state.session);

  console.log("front is ", reviews);

  // useEffect(() => {
  //   dispatch(getReviews(id));
  // }, [dispatch, addReview]);

  useEffect(() => {
    let time = setTimeout(() => {
      dispatch(getReviews(id));
    }, 200);

    // dispatch(getAllReviews());
    dispatch(getReviews(id));

    return () => clearTimeout(time);
  }, [dispatch]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const reviewId = e.target.value;
    await dispatch(deleteReview(reviewId));
    await dispatch(getReviews(id));
  };

  return (
    <div className="review-container">
      <section className="left-review">
        <h3>Customer Reviews</h3>
        <h4>Review this product</h4>
        <h5>Share your thoughts with other customers</h5>
        <NavLink
          onClick={() => setAddReview(true)}
          to={`/products/${id}/reviews/new`}
        >
          Write a customer review
        </NavLink>
      </section>
      <section className="right-review">
        <div>
          <h3>Top reviews from the United States</h3>
          {reviews &&
            reviews.map((review) => (
              <div className="each-review" key={review.id}>
                <div>{review.user.username}</div>
                <div>{review.rating}</div>
                <div>{review.review_body}</div>
                <div>{review.created_at}</div>
                {sessionUser.user.id == review.user.id ? (
                  <div>
                    <NavLink to={`/products/${id}/reviews/${review.id}/edit`}>
                      Edit
                    </NavLink>
                    <button value={review.id} onClick={handleDelete}>
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
