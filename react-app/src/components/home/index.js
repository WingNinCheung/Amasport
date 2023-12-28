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
        {allProducts.length > 0 && (
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
            src="https://lh3.googleusercontent.com/pw/ABLVV87fZCX22pzqvxzli66ouE-RLkmb8gjCwJP-eEMg5vNC2Cez_n6BrfhYm0YWvTU0QHFmw0ybLRg6ks9MEYJmbPUPaUH_jQtYoYIfbBPTncPYhOOXhruIJMzOY2QkBE7ocO_nagTmYhQ3U8MtJNZyh2wg4gK-qwuZGR9ZIQPRphYrSTC2NY5KqAyQdIr-yKHQHhg0LwOxwq8Cqb-zKkam7c3I8-CJMhAZM7O5HKoVpAbs4MI8BnnuAmzguQWri0W7Kq8jbcHym_aLjCJiSqYOCenvG8cP21-Or4G6oUkVaSonFbOsYgBtmquA8SuXszeulxFCaJgx05knMJHY5PmuYVAXYLVVnY6Fgwz7_gO3aLiZH4eqOXyDiC0dJGUIdzAZbaGcI13kEpLraD5aWOfirN97bDUIaDa1ptorV7A4umgcIdDm4Cy7_4u0npOt5ae48M-ndkdrZUKPEl6d8N14hAnjqUF9HYVlZvTB5KwsYG5cPI3FWA35z66ToryeZpmwkm-b7AtodP5h4gMMs-ewHa5n56c7JrUiq10oOkHoX45D8CTRzOYFEk-izCWTlc5ov5wFwd-bviBJq5FGwMA4EU2wHMeEa1ucaMqw0prwMr1vipbtWpKa_sOORmm-hBhfz1eZ_0UPo4CfMZD3DqMxQYzHvvyjm8NCkOhJm2RYOMSZy_S-qwmJwu0kCbpmqLEFSERTbOx6-FYPqTmmyaM8a31GNT7FiqPr0ww109hA4kkukvtvcRAiVn7ei6TQa7XE5A4H1cx9NGzbe1mmY1Z5t6wM7JjzbcSUScex4KL_BdV1pjSqqUKILW1KspGnxKtyhiWb2RzC4qmDQWep4ov1va-8jgEg5_FJyy-mOhXVluhYLd_dOL6Bnc-Heknba57k5Q=w996-h1328-s-no-gm?authuser=0"
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
