import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import { removeOrder } from "../../store/order";
import "./order.css";

function DeleteOrder({ setShowModal, id, myOrder }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();

  let createdAt = myOrder.created_at;
  createdAt = createdAt.split(" ");
  createdAt.pop();
  createdAt.join(" ");
  createdAt = new Date(createdAt);
  let expiredAt = new Date();
  expiredAt.setDate(createdAt.getDate());
  expiredAt.setHours(createdAt.getHours() + 2);
  expiredAt.setMinutes(createdAt.getMinutes());

  expiredAt = expiredAt.toString().split(" ").slice(1, 5).join(" ");

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(removeOrder(id));
    history.push("/order-history");
  };

  return (
    <div>
      {myOrder.delivery_status === "Pending" ? (
        <div>
          <h2>Are you sure you want to cancel this order?</h2>
          <div>
            <button
              className="addCart-button"
              id="cancel-btn"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
          <div>
            <button
              className="addCart-button"
              id="cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3>Sorry your order is either shipped or delivered already.</h3>
          <div>
            <img
              className="sorryimg"
              src="https://media.istockphoto.com/vectors/sad-dog-cartoon-illustration-vector-id494059175?k=20&m=494059175&s=612x612&w=0&h=DZSc3Tow29THc9nfSe_sEQWV6Cd5BbFlXoTOG2Z4OVE="
              alt="product"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteOrder;
