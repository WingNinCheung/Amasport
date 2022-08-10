import React from "react";
import { NavLink } from "react-router-dom";
import "./categoryNav.css";

const CategoryNavBar = () => {
  return (
    <nav className="cate-nav">
      <span>
        <NavLink className="category" to={`/home`}>
          All
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Basketball/~`}>
          Basketball
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Tennis/~`}>
          Tennis
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Training/~`}>
          Training
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Sneakers/~`}>
          Sneakers
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Shirts&Tops/~`}>
          Shirts & Tops
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Skateboarding/~`}>
          Skateboarding
        </NavLink>
      </span>
    </nav>
  );
};
export default CategoryNavBar;
