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
        {allProducts.length > 0 &&
          allProducts[0].images &&
          allProducts[0].images.length > 0 && (
            <div className="product-list">
              <div className="home-list">
                <h2>Shoot it like Curry</h2>
                <div>
                  {sessionUser === null ? (
                    <NavLink to="/login">
                      <img
                        className="product-img"
                        src={allProducts[0].images[0]}
                      ></img>
                    </NavLink>
                  ) : (
                    <NavLink to="/products/1">
                      <img
                        className="product-img"
                        src={allProducts[0].images[0]}
                      ></img>
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="home-list">
                <h2>Enjoy your personal trainer</h2>
                <div>
                  {sessionUser === null ? (
                    <NavLink to="/login">
                      <img
                        className="product-img"
                        src={allProducts[17].images[0]}
                      ></img>
                    </NavLink>
                  ) : (
                    <NavLink to="/products/18">
                      <img
                        className="product-img"
                        src={allProducts[17].images[0]}
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
                        src={allProducts[25].images[0]}
                      ></img>
                    </NavLink>
                  ) : (
                    <NavLink to="/products/26">
                      <img
                        className="product-img"
                        src={allProducts[25].images[0]}
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
                        src={allProducts[28].images[0]}
                      ></img>
                    </NavLink>
                  ) : (
                    <NavLink to="/products/29">
                      <img
                        className="product-img"
                        src={allProducts[28].images[0]}
                      ></img>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          )}
      </div>

      <div className="footer">
        <div className="icon-container">
          <img
            className="ricky"
            src="https://avatars.githubusercontent.com/u/96600317?v=4"
            alt="Ricky's icon"
          ></img>
        </div>
        <div>
          <div className="tit">Get to Know Me - Ricky</div>
          <div>
            <a
              href="https://rickycheung.dev/"
              target="popup"
              className="a-links"
            >
              <div className="a-div">Portfolio</div>
            </a>
            <a
              href="https://github.com/WingNinCheung/Amasport"
              target="popup"
              className="a-links"
            >
              <div className="a-div">Github</div>
            </a>
          </div>
        </div>
        <div>
          <div className="tit">Connect with Me</div>
          <a
            href="https://www.linkedin.com/in/wingnincheung/"
            target="popup"
            className="a-links"
          >
            <div className="a-div">LinkedIn</div>
          </a>
          <a href="mailto:wingnin.cheung415@gmail.com" className="a-links">
            <div className="a-div">Email</div>
          </a>
        </div>
        <div className="tech-container">
          <div className="tit">Technologies Used</div>
          <div className="a-div">JavaScript</div>
          <div className="a-div">React / Redux</div>
          <div className="a-div">Python / Flask</div>
          <div className="a-div">SQLAlchemy</div>
          <div className="a-div">PostgresSQL</div>
          <div className="a-div">HTML5 / CSS3</div>
          <div className="a-div">Docker</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
