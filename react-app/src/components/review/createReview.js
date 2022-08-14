import { NavLink, useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../store/review";
import CreateStarRating from "./createStarRating";

function CreateReview() {
  // product id
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [validationError, setValidationError] = useState([]);

  const allProducts = useSelector((state) => Object.values(state.product));
  const sessionUser = useSelector((state) => state.session);
  const myProduct = allProducts.find((product) => product.id == id);

  console.log("rat", rating);
  // format the date object into Month-Date-Year
  let dateNow = new Date().toDateString().split(" ");
  dateNow.shift();
  dateNow = dateNow.join(" ");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // validation errors handling
  useEffect(() => {
    let errors = [];

    if (review.trim() === "") {
      errors.push("Review cannot be empty or all spaces");
    } else if (review.length > 250) {
      errors.push("Review cannot be more than 250 characters");
    }
    if (rating === 0) {
      errors.push("Please select a rating");
    }

    setValidationError(errors);
  }, [review, rating]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      user_id: sessionUser.user.id,
      product_id: id,
      rating,
      review_body: review,
      created_at: dateNow,
    };

    const newReview = dispatch(addReview(data, id));
    if (newReview) {
      history.push(`/products/${id}`);
    }
  };

  return (
    <div className="createReview-container">
      {myProduct && (
        <div className="rev-body">
          <h2>Create Review</h2>
          <div className="img-name">
            <img className="create-img" src={myProduct.image} alt="ball"></img>
            <span>{myProduct.name}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Overall rating</h3>
            <CreateStarRating rating={rating} setRating={setRating} />

            <h3>Add a written review</h3>
            <ul>
              {validationError.map((error) => (
                <li className="errors" key={error}>
                  ! {error}
                </li>
              ))}
            </ul>
            <div>
              <textarea
                className="review-area"
                onChange={(e) => setReview(e.target.value)}
                value={review}
              ></textarea>
              <div className="errors" id="counter">
                {review.length}/250
              </div>
            </div>
            <div className="submitbtn-review">
              <button
                className="submit-review"
                disabled={validationError.length}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateReview;
