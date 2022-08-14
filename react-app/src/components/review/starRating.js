import { useSelector } from "react-redux";

function StarRating({ review }) {
  return (
    <div className="star-rating">
      {[...Array(review.rating)].map((star) => {
        return (
          <span className="star">
            <i class="fa-solid fa-star" id="review-star"></i>
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
