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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      <h2>Your Orders</h2>

      <div>
        {order.length ? (
          <OrderHistory />
        ) : (
          <div>
            <h3>Your order history is empty</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
