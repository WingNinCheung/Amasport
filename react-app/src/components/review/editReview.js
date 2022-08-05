import { NavLink, useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { getReviews } from "../../store/review";

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

  console.log(reviews);

  // format the date object into Month-Date-Year
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
    } else if (review?.length > 250) {
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

    const edited = dispatch(updateReview(data, id));

    if (edited) {
      history.push(`/products/${productId}`);
    }
    console.log(data);
    // const newReview = dispatch(addReview(data, id));
    // if (newReview) {
    //   history.push(`/products/${id}`);
    // }
  };

  return (
    <div className="createReview-container">
      {myProduct && (
        <div>
          <h2>Edit Review</h2>
          <div>
            <img src={myProduct.image} alt="ball"></img>
          </div>
          <div>{myProduct.name}</div>
          <form onSubmit={handleEdit}>
            <h3>Overall rating</h3>
            <select onChange={(e) => setRating(e.target.value)} value={rating}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <h3>Add a written review</h3>
            <ul>
              {validationError.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <textarea
              onChange={(e) => setReview(e.target.value)}
              value={review}
            ></textarea>
            <button disabled={validationError.length}>Edit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditReview;
