import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/product";
import { NavLink } from "react-router-dom";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";
import "./home.css";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => Object.values(state.product));
  const sessionUser = useSelector((state) => state.session.user);

  console.log("product is ", allProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="home-container"></div>
      {allProducts.length && (
        <div className="product-list">
          <div>
            <h2>Shoot it like Curry</h2>
            <div>
              {!sessionUser ? (
                <NavLink to="/login">
                  <img src={allProducts[0].image}></img>
                </NavLink>
              ) : (
                <NavLink to="/products/1">
                  <img src={allProducts[0].image}></img>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
