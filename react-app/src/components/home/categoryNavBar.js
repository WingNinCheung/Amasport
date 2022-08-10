import React from "react";
import { NavLink } from "react-router-dom";

const CategoryNavBar = () => {
  return (
    <nav>
      <span>
        <NavLink to={`/search/All/~`}>All</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Basketball/~`}>Basketball</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Tennis/~`}>Tennis</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Training/~`}>Training</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Sneakers/~`}>Sneakers</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Shirts&Tops/~`}>Shirts & Tops</NavLink>
      </span>
      <span>
        <NavLink to={`/search/Skateboarding/~`}>Skateboarding</NavLink>
      </span>
    </nav>
  );
};
export default CategoryNavBar;
