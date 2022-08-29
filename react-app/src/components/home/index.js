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

      <div className="footer">
        <div className="footer-title">
          <div className="tit">Get to Know Me</div>
          <div className="profile-section">
            <span className="name">Ricky Cheung</span>
            <a
              href="https://wingnincheung.github.io/"
              target="popup"
              className="a-links"
            >
              <div className="a-div">Portfolio Site</div>
            </a>
          </div>
        </div>
        <div className="connect-in">
          <div className="tit">Connect with Me</div>
          <a href="https://github.com/WingNinCheung" target="popup">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/wingnincheung/" target="popup">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="mailto:wingnin.cheung415@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div className="tech-list">
          <div className="tit">Technologies</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
