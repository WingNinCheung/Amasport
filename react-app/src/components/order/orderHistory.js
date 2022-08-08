import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function OrderHistory() {
  const sessionUser = useSelector((state) => state.session.user);

  console.log("here", sessionUser);
  return (
    <div>
      <h2>Order His</h2>
    </div>
  );
}

export default OrderHistory;
