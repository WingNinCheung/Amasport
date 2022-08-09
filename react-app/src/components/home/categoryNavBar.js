import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const CategoryNavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  //   const cart = useSelector((state) => Object.values(state.cart));
  //   const allProducts = useSelector((state) => Object.values(state.product));

  const [searchCategory, setSearchCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  //   useEffect(() => {
  //     dispatch(getCart(sessionUser?.id));
  //   }, [dispatch, sessionUser]);

  const search = (e) => {
    e.preventDefault();
    setSearchText("");
    history.push(`/search/${searchCategory}/${searchText}`);
  };

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
