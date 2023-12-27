import React from "react";
import { NavLink } from "react-router-dom";
import "./categoryNav.css";

const CategoryNavBar = () => {
  return (
    <nav className="cate-nav">
      <span>
        <NavLink className="category" to={`/search/All/~`}>
          <div className="nav-word">All</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Basketball/~`}>
          <div className="nav-word">Basketball</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Tennis/~`}>
          <div className="nav-word">Tennis</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Training/~`}>
          <div className="nav-word">Training</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Sneakers/~`}>
          <div className="nav-word">Sneakers</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Shirts&Tops/~`}>
          <div className="nav-word">Shirts & Tops</div>
        </NavLink>
      </span>
      <span>
        <NavLink className="category" to={`/search/Skateboarding/~`}>
          <div className="nav-word">Skateboarding</div>
        </NavLink>
      </span>
    </nav>
  );
};
export default CategoryNavBar;
