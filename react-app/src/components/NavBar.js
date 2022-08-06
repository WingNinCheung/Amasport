import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import cartIcon from "../images/cartIcon.png";
import { getCart, addProduct, updateQuantity } from "../store/cart";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const cart = useSelector((state) => Object.values(state.cart));
  const userId = sessionUser.id;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

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
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
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
