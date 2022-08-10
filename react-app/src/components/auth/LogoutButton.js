import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { removeAllCart } from "../../store/cart";
import "../navbar.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(removeAllCart());
    localStorage.clear();
  };

  return (
    <div className="log-container">
      <button className="logout-btn" onClick={onLogout}>
        Sign Out
      </button>
    </div>
  );
};

export default LogoutButton;
