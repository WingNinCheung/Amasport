import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import cartIcon from "../images/cartIcon.png";
import { getCart, addProduct, updateQuantity } from "../store/cart";
import SearchProductDetail from "./home/searchProductDetail";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector((state) => Object.values(state.cart));
  const allProducts = useSelector((state) => Object.values(state.product));

  const [searchCategory, setSearchCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  useEffect(() => {
    dispatch(getCart(sessionUser?.id));
  }, [dispatch, sessionUser]);

  const search = (e) => {
    e.preventDefault();
    setSearchText("");
    history.push(`/search/${searchCategory}/${searchText}`);
  };

  return (
    <nav>
      {!sessionUser && (
        <section>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </section>
      )}
      {sessionUser && (
        <section>
          <NavLink to="/home" exact={true} activeClassName="active">
            Amasport
          </NavLink>
          <span>
            <span>
              <select
                onChange={(e) => setSearchCategory(e.target.value)}
                value={searchCategory}
              >
                <option>All</option>
                <option>Basketball</option>
                <option>Tennis</option>
                <option>Other</option>
              </select>
            </span>
            <span>
              <input
                type="text"
                placeholder="Search by product name"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              ></input>
            </span>
            <span>
              <button onClick={search} disabled={searchText.length === 0}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </span>
          </span>
          <div>
            <NavLink to="/users" exact={true} activeClassName="active">
              Hello, {sessionUser.username}
              <div>Account & Lists</div>
            </NavLink>
          </div>
          <NavLink to="/cart" exact={true} activeClassName="active">
            <img style={{ backgroundColor: "black" }} src={cartIcon}></img>
          </NavLink>
          <span>{totalQuantity}</span>
          <LogoutButton />
        </section>
      )}
    </nav>
  );
};

export default NavBar;
