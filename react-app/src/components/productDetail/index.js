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
  const history = useHistory();

  // product id
  const { id } = useParams();

  let about;
  let product;

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

  return (
    <div className="product-container">
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
                <div>FREE Prime delivery {date}. Order by 5 p.m of today</div>
                <h4>In Stock</h4>
                <AddToCartModal />
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
