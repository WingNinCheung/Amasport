import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";

function BugAgain() {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      <h2>Bug Again</h2>
    </div>
  );
}

export default BugAgain;
