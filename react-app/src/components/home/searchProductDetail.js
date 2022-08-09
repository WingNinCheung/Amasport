import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/product";
import { NavLink, useParams } from "react-router-dom";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";

function SearchProductDetail() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => Object.values(state.product));
  const { category, text } = useParams();
  let searchProduct;

  console.log("here", text);

  if (category === "All") {
    searchProduct = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });
    if (!searchProduct.length) {
      searchProduct = allProducts;
    }
  } else {
    searchProduct = allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(text.toLowerCase()) &&
        product.category.toLowerCase() === category.toLowerCase()
      );
    });
    if (!searchProduct.length) {
      searchProduct = allProducts.filter((product) => {
        return product.category.toLowerCase() === category.toLowerCase();
      });
    }
  }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {searchProduct &&
        searchProduct.map((product) => (
          <div key={product.id}>
            {text !== "~" ? <h4>Search results for "{text}"</h4> : null}
            <NavLink to={`/products/${product.id}`}>
              <img src={product.image} alt="products"></img>
              <div>{product.name}</div>
            </NavLink>
            <div>${product.price}</div>
            <div>
              <img style={{ height: "30px" }} src={primeIcon} alt="prime"></img>
              FREE Two-Day
            </div>
            <div>FREE Shipping by {product.manufacturer}</div>
          </div>
        ))}
      {!searchProduct.length && (
        <div>
          <h3>Sorry. No products found matching your search "{text}"...</h3>
        </div>
      )}
    </div>
  );
}

export default SearchProductDetail;
