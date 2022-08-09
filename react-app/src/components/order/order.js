import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import BugAgain from "./buyAgain";
import DeleteOrder from "./deleteOrder";
import { getOrder } from "../../store/order";

function Order() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));
  const [showOrder, setShowOrder] = useState(true);
  const [showBuyAgain, setBuyAgain] = useState(false);
  const [showCancelled, setCancelled] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      <h2>Your Orders</h2>
      <nav>
        <div>
          <span
            onClick={() => {
              setShowOrder(true);
              setBuyAgain(false);
              setCancelled(false);
            }}
          >
            Orders
          </span>
        </div>
        <div
          onClick={() => {
            setShowOrder(false);
            setBuyAgain(true);
            setCancelled(false);
          }}
        >
          <span>Buy Again</span>
        </div>
        <div
          onClick={() => {
            setShowOrder(false);
            setBuyAgain(false);
            setCancelled(true);
          }}
        >
          <span>Cancelled Orders</span>
        </div>
      </nav>
      <div>{showOrder && <OrderHistory />}</div>
      <div>{showBuyAgain && <BugAgain />}</div>
      <div>{showCancelled && <DeleteOrder />}</div>
    </div>
  );
}

export default Order;
