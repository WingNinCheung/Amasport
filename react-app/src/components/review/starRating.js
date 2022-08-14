import { useSelector } from "react-redux";

function StarRating({ review }) {
  //   const reviews = useSelector((state) => Object.values(state.review));
  //   const ratingLength =
  return (
    <div className="star-rating">
      {[...Array(review.rating)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
    </div>
  );
}

export default StarRating;
