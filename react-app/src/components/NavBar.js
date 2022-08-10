import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import cartIcon from "../images/cartIcon.png";
import { getCart, addProduct, updateQuantity } from "../store/cart";
import "./navbar.css";

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
    if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(searchText)) {
      window.alert("Special characters '!@#$%^&*()<>/;'[]' are not allowed");
      setSearchText("");
    } else {
      setSearchText("");
      history.push(`/search/${searchCategory}/${searchText}`);
    }
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
        <section className="navbar">
          <NavLink
            className="logo"
            to="/home"
            exact={true}
            activeClassName="active"
          >
            <div className="logo">Amasport</div>
            <img
              className="logo-img"
              src="https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png"
              alt="logo"
            ></img>
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
                <option>Training</option>
                <option>Sneakers</option>
                <option>Shirts & Tops</option>
                <option>Skateboarding</option>
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
