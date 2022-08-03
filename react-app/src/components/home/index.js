import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/product";
import { NavLink } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => Object.values(state.product));

  console.log("product store is ", allProducts);

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
            <div>Get it by {product.date_available}</div>
            <div>FREE Shipping by {product.manufacturer}</div>
          </div>
        ))}
    </div>
  );
}

export default Home;
