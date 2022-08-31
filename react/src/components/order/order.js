import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import { getOrder } from "../../store/order";

function Order() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      {order && <h2 className="ordertitle">Your Orders</h2>}

      <div className="whole-container">
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
