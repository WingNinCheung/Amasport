import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { removeAllCart } from "../../store/cart";
import { useHistory } from "react-router-dom";
import "../navbar.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(removeAllCart());
    localStorage.clear();
    history.push("/home");
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
