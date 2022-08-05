import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { removeAllCart } from "../../store/cart";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(removeAllCart());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
