import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect, useState } from "react";
import Reviews from "../review/review";
import { getReviews } from "../../store/review";
import AddToCart from "./addToCart";
import AddToCartModal from "./addToCartModal";
import "./productDetail.css";

function ProductDetails() {
  const dispatch = useDispatch();

  // product id
  const { id } = useParams();

  let about;
  // let product;
  let [product, setProduct] = useState(null);
  let today = new Date();
  // let date = new Date().toDateString().split(" ");
  let date = new Date();
  date.setDate(today.getDate() + 2);
  date.setHours(today.getHours());
  date.setMinutes(today.getMinutes());
  date.setMilliseconds(today.getMilliseconds());
  date = date.toDateString().split(" ").slice(1, 4).join(" ");

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
  const initialSelectedImage = product ? product.images[0] : null;
  const [selectedImage, setselectedImage] = useState(initialSelectedImage);

  useEffect(() => {
    const fetchProductData = async () => {
      let item = allProducts.find((item) => item.id == id);
      setProduct(item);
      setselectedImage(item ? item.images[0] : "");
    };

    fetchProductData();
  }, [product]);

  return (
    <div className="product-container">
      {allProducts && product && (
        <div>
          <div className="middle-container">
            <div className="detail-img">
              {product.images.map((image) => (
                <img
                  className={`pro-img ${
                    selectedImage === image ? "selected" : ""
                  }`}
                  src={image}
                  alt="product"
                  onClick={() => setselectedImage(image)}
                ></img>
              ))}
            </div>
            <div>
              <img className="main-img" src={selectedImage}></img>
            </div>
            <div className="main-product">
              <div className="prod-name">{product.name}</div>
              <div className="price-product">
                <span className="dollar-sign">$</span>
                {product.price}
                <span className="free-ship"> & FREE Two-Day Shipping</span>
              </div>
              <span>
                <h4 className="small-div">Category:</h4>
                <span>{product.category}</span>
              </span>
              <div>
                <h4 className="small-div">Brand:</h4>
                <span>{product.brand}</span>
              </div>
              <div>
                <h4 className="small-div">Item Dimension:</h4>
                <span>{product.dimensions} inches</span>
              </div>
              <div>
                <h3>About this item:</h3>
                <ul>
                  {about.map((sentence) => (
                    <li className="ul-about" key={sentence}>
                      {sentence}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="price-section">
              <div className="price-product">
                <span className="dollar-sign">$</span>
                {product.price}
              </div>
              <div className="free-ship">& FREE Returns</div>
              <div className="free-ship">
                FREE Prime delivery
                <span className="detail-date">
                  {" "}
                  {date}.<span className="reg"> Order by</span>
                  <span className="time"> 5 p.m of today</span>
                </span>
              </div>
              <h4 className="stock">In Stock</h4>
              <AddToCartModal />
            </div>
          </div>

          <section className="description-section">
            <h3 className="second-title">Product Description</h3>
            <div className="second-des">{product.description}</div>
          </section>
          <section className="productInfo-section">
            <h3 className="second-title">Product information</h3>
            <table>
              <thead>
                <tr>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col">Item Package Dimensions L x W x H</td>
                  <td className="row">{product.dimensions}</td>
                </tr>
                <tr>
                  <td className="col">Brand Name</td>
                  <td className="row">{product.brand}</td>
                </tr>
                <tr>
                  <td className="col">Manufacturer</td>
                  <td className="row">{product.manufacturer}</td>
                </tr>
                <tr>
                  <td className="col">ASIN</td>
                  <td className="row">{product.asin}</td>
                </tr>
                <tr>
                  <td className="col">Date First Available</td>
                  <td className="row2">{product.date_available}</td>
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
