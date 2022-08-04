import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../store/product";
import { useEffect } from "react";
import Reviews from "../review/review";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let about;
  let product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => Object.values(state.product));

  // to find that specific product
  if (allProducts.length !== 0) {
    product = allProducts.find((item) => item.id == id);
    about = product.about.split(".");
  }

  return (
    <div>
      {allProducts && product && (
        <div>
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
