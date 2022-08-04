import { getReviews } from "../../store/review";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Reviews() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reviews = useSelector((state) => Object.values(state.review));
  const sessionUser = useSelector((state) => state.session);

  console.log("front is ", reviews[0].reviews[0].username);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch]);

  const createReview = (e) => {
    e.preventDefault();
  };

  // console.log("In function", reviews);

  return (
    <div className="review-container">
      <section className="left-review">
        <h3>Customer Reviews</h3>
        <h4>Review this product</h4>
        <h5>Share your thoughts with other customers</h5>
        <NavLink to={`/products/${id}/reviews/new`}>
          Write a customer review
        </NavLink>
      </section>
      <section className="right-review">
        <div>
          <h3>Top reviews from the United States</h3>
          {reviews &&
            reviews.map((review) => (
              <div className="each-review" key={review.reviews.id}>
                {/* <div>{review.users.username}</div> */}
                <div>{review.reviews.rating}</div>
                <div>{review.reviews.review_body}</div>
                <div>{review.reviews.created_at}</div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
