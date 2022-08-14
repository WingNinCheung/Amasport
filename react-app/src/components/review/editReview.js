import { NavLink, useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { getReviews } from "../../store/review";
import EditStarRating from "./editStarRating";

function EditReview() {
  // product id
  const { id, productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const allProducts = useSelector((state) => Object.values(state.product));
  const sessionUser = useSelector((state) => state.session);
  const myProduct = allProducts.find((product) => product.id == productId);

  const reviews = useSelector((state) => Object.values(state.review));
  const myReview = reviews.find((review) => review.id == id);

  const [rating, setRating] = useState(myReview?.rating);
  const [review, setReview] = useState(myReview?.review_body);
  const [validationError, setValidationError] = useState([]);

  let dateNow = new Date().toDateString().split(" ");
  dateNow.shift();
  dateNow = dateNow.join(" ");

  useEffect(async () => {
    await dispatch(getProducts());
    await dispatch(getReviews(id));
  }, [dispatch]);

  // validation errors handling
  useEffect(() => {
    let errors = [];

    if (review?.trim() === "") {
      errors.push("Review cannot be empty or all spaces");
    }
    if (review?.length > 250) {
      errors.push("Review cannot be more than 250 characters");
    }

    setValidationError(errors);
  }, [review]);

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      user_id: sessionUser.user.id,
      product_id: productId,
      rating: rating,
      review_body: review,
      created_at: dateNow,
    };

    if (!rating || !review) {
      window.alert("Rating or review cannot be empty!");
    } else {
      const edited = dispatch(updateReview(data, id));

      if (edited) {
        history.push(`/products/${productId}`);
      }
    }
  };

  return (
    <div className="createReview-container">
      {myProduct && (
        <div className="rev-body">
          <h2>Edit Review</h2>
          <div className="img-name">
            <img className="create-img" src={myProduct.image} alt="ball"></img>
            <span>{myProduct.name}</span>
          </div>
          <form onSubmit={handleEdit}>
            <h3>Overall rating</h3>
            <EditStarRating rating={rating} setRating={setRating} />

            <h3>Add a written review</h3>
            <ul>
              {validationError.map((error) => (
                <li className="errors" key={error}>
                  ! {error}
                </li>
              ))}
            </ul>

            <textarea
              className="review-area"
              onChange={(e) => setReview(e.target.value)}
              value={review}
            ></textarea>

            {review && (
              <div className="errors" id="counter">
                {review.length}/250
              </div>
            )}
            <div className="submitbtn-review">
              <button
                className="submit-review"
                disabled={validationError.length}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditReview;
