import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector } from "react-redux";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);

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

          <LogoutButton />
        </section>
      )}
    </nav>
  );
};

export default NavBar;
