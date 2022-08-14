import { getReviews } from "../../store/review";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../store/review";
import StarRating from "./starRating";
import "./review.css";

function Reviews() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reviews = useSelector((state) => Object.values(state.review));
  const [addReview, setAddReview] = useState(false);
  const sessionUser = useSelector((state) => state.session);

  useEffect(() => {
    let time = setTimeout(() => {
      dispatch(getReviews(id));
    }, 200);

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
        <h2>Customer Reviews</h2>
        <h4>Review this product</h4>
        <div className="share">Share your thoughts with other customers</div>
        <div className="post-review">
          <NavLink
            className="write-review"
            onClick={() => setAddReview(true)}
            to={`/products/${id}/reviews/new`}
          >
            <div className="review-btn">Write a customer review</div>
          </NavLink>
        </div>
      </section>
      <section className="right-review">
        <div>
          <h3>Top reviews from the United States</h3>
          {reviews &&
            reviews.map((review) => (
              <div className="each-review" key={review.id}>
                <span>
                  <img
                    className="profile-icon"
                    src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
                    alt="icon"
                  ></img>
                  <span className="reviewer">{review.user.username}</span>
                </span>
                <div>
                  <StarRating review={review} />
                </div>
                <div className="review-body">{review.review_body}</div>
                <div className="review-date">
                  {" "}
                  Reviewed on
                  {review.created_at &&
                    review.created_at.split(" ").slice(1, 4).join(" ")}
                </div>
                {sessionUser.user.id == review.user.id ? (
                  <div className="edit-delete">
                    <span className="editContainer">
                      <NavLink
                        className="edit-btn"
                        to={`/products/${id}/reviews/${review.id}/edit`}
                      >
                        <span className="edit">Edit</span>
                      </NavLink>
                    </span>

                    <button
                      className="rev-btn"
                      value={review.id}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            ))}
          {!reviews.length && <h4 className="noReview">No reviews yet</h4>}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
