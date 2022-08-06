import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect, useState } from "react";
import Reviews from "../review/review";
import { getReviews } from "../../store/review";
import AddToCart from "./addToCart";
import AddToCartModal from "./addToCartModal";

function ProductDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  // product id
  const { id } = useParams();

  const [showsideMenu, setShowsideMenu] = useState(false);

  let about;
  let product;

  let today = new Date();
  let date = new Date().toDateString().split(" ");
  date.pop();
  date = date.join(" ");

  let cutOff = new Date();

  cutOff.setHours(17);
  cutOff.setMinutes(0);
  cutOff.setMilliseconds(0);
  let expiredDate = Math.abs(cutOff - today) / 36e5;
  expiredDate = expiredDate.toFixed(2).split(".");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getReviews(id));
  }, [dispatch]);

  const allProducts = useSelector((state) => Object.values(state.product));

  // to find that specific product
  if (allProducts.length !== 0) {
    product = allProducts.find((item) => item.id == id);
    about = product.about.split(".");
  }

  const addToCart = (e) => {
    e.preventDefault();
    // setShowsideMenu(true);
    <AddToCart />;
    console.log("Click");
  };

  return (
    <div>
      {allProducts && product && (
        <div>
          <div className="upper-container">
            <div>
              <img src={product.image} alt="product"></img>
            </div>
            <div>{product.name}</div>
            <div>${product.price}</div>
            <div>
              <h4>Category:</h4>
              <span>{product.category}</span>
            </div>
            <div>
              <h4>Brand:</h4>
              <span>{product.brand}</span>
            </div>
            <div>
              <h4>Item Dimension:</h4>
              <span>{product.dimensions} inches</span>
            </div>
            <div>
              <h3>About this item:</h3>
              <ul>
                {about.map((sentence) => (
                  <li key={sentence}>{sentence}</li>
                ))}
              </ul>
              <div className="price-section">
                <h3>${product.price}</h3>
                <div>& FREE Returns</div>
                <div>
                  FREE Prime delivery {date}. Order within {expiredDate[0]} hrs{" "}
                  {expiredDate[1]} mins{" "}
                </div>
                <h4>In Stock</h4>
                <button onClick={addToCart}>Add to Cart</button>
                <AddToCartModal />
                <button>Buy Now</button>
              </div>
            </div>
          </div>
          <section className="description-section">
            <h3>Product Description</h3>
            <div>{product.description}</div>
          </section>
          <section className="productInfo-section">
            <h3>Product information</h3>
            <table>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item Package Dimensions L x W x H</td>
                  <td>{product.dimensions}</td>
                </tr>
                <tr>
                  <td>Brand Name</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Manufacturer</td>
                  <td>{product.manufacturer}</td>
                </tr>
                <tr>
                  <td>ASIN</td>
                  <td>{product.asin}</td>
                </tr>
                <tr>
                  <td>Date First Available</td>
                  <td>{product.date_available}</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="review">
            <Reviews />
          </section>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
