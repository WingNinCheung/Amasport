import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/product";
import { NavLink } from "react-router-dom";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => Object.values(state.product));

  // localStorage.removeItem("searchText");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {allProducts &&
        allProducts.map((product) => (
          <div key={product.id}>
            <NavLink to={`products/${product.id}`}>
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
    </div>
  );
}

export default Home;
