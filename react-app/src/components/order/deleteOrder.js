import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import { removeOrder } from "../../store/order";

function DeleteOrder({ setShowModal, id }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(removeOrder(id));
    history.push("/order-history");
  };

  return (
    <div>
      <h2>Are you sure you want to remove this order?</h2>
      <div>
        <button onClick={handleDelete}>Yes</button>
      </div>
      <div>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteOrder;
