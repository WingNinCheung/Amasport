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
  console.log("product is ", sessionUser);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="home-container"></div>
      <div className="bot-container">
        {allProducts.length && (
          <div className="product-list">
            <div className="home-list">
              <h2>Shoot it like Curry</h2>
              <div>
                {sessionUser === null ? (
                  <NavLink to="/login">
                    <img
                      className="product-img"
                      src={allProducts[0].image}
                    ></img>
                  </NavLink>
                ) : (
                  <NavLink to="/products/1">
                    <img
                      className="product-img"
                      src={allProducts[0].image}
                    ></img>
                  </NavLink>
                )}
              </div>
            </div>
            <div className="home-list">
              <h2>Enjoy the machine being your personal trainer</h2>
              <div>
                {sessionUser === null ? (
                  <NavLink to="/login">
                    <img
                      className="product-img"
                      src={allProducts[17].image}
                    ></img>
                  </NavLink>
                ) : (
                  <NavLink to="/products/18">
                    <img
                      className="product-img"
                      src={allProducts[17].image}
                    ></img>
                  </NavLink>
                )}
              </div>
            </div>
            <div className="home-list">
              <h2>New arrivals for summer</h2>
              <div>
                {sessionUser === null ? (
                  <NavLink to="/login">
                    <img
                      className="product-img"
                      src={allProducts[25].image}
                    ></img>
                  </NavLink>
                ) : (
                  <NavLink to="/products/26">
                    <img
                      className="product-img"
                      src={allProducts[25].image}
                    ></img>
                  </NavLink>
                )}
              </div>
            </div>
            <div className="home-list">
              <h2>Skills on wheels in this summer!</h2>
              <div>
                {sessionUser === null ? (
                  <NavLink to="/login">
                    <img
                      className="product-img"
                      src={allProducts[28].image}
                    ></img>
                  </NavLink>
                ) : (
                  <NavLink to="/products/29">
                    <img
                      className="product-img"
                      src={allProducts[28].image}
                    ></img>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
