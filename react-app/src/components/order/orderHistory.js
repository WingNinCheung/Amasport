import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, updateStatus } from "../../store/order";
import "./order.css";

/*
This function is to render the order history of the logged-in user.
The order status by default is pending. It will change to shipped and delivered in two hours and two days after
users place their orders
*/
function OrderHistory() {
  // grab infomation and data from Redux store
  const sessionUser = useSelector((state) => state.session.user);
  const orderData = useSelector((state) => Object.values(state.order));
  // reverse the orderData array so latest orders will display first
  const order = orderData.reverse();
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  /*
    Updates order status dynamically based on the orders' dates
    Returns an array of updated orders with the updated delivery status.
   */
  const updateOrderStatus = () => {
    // loop over the order histroy array to update the status
    return orderData.map((order) => {
      let orderDate = order.created_at;
      let current = new Date();
      // The default status is set to "Pending".
      let deliveryStatus = "Pending";
      // Remove the timezone information to ensure consistent date comparison across timezones
      orderDate = orderDate.split(" ");
      orderDate.pop();
      orderDate.join("");
      orderDate = new Date(orderDate);

      // shipment date defined as two hours and two days after placing orders
      let shipmentDate = new Date(orderDate);
      let deliveryDate = new Date(orderDate);
      shipmentDate.setHours(orderDate.getHours() + 2);
      deliveryDate.setDate(orderDate.getDate() + 2);

      // The code compares the current time to two hours and two days after the user places their order.
      // If more than two hours have passed but less than two days, the order status will be changed to "Shipped".
      // Otherwise, if two days or more have passed, the order status will be changed to "Delivered".
      // The default status is set to "Pending".
      if (current >= shipmentDate && current < deliveryDate) {
        deliveryStatus = "Shipped";
        setStatus("Shipped");
      } else if (current >= deliveryDate) {
        deliveryStatus = "Delivered";
        setStatus("Delivered");
      }
      return {
        ...order,
        delivery_status: deliveryStatus,
      };
    });
  };

  // retreive the order history
  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch, status]);

  // update status by dispatching to trigger Redux actions
  useEffect(() => {
    const updatedOrder = updateOrderStatus();
    updatedOrder.forEach((item) => {
      const data = {
        delivery_status: item.delivery_status,
      };
      dispatch(updateStatus(data, item.id));
    });
  }, [dispatch]);

  // render the order history page
  return (
    <div>
      <div>
        {order.map((item) => (
          <div key={item.id} className="order-container">
            <div className="topOrder">
              <div className="order-date">
                <div>ORDER PLACED</div>
                <span>{item.created_at.split(" ").slice(1, 4).join("-")}</span>
              </div>
              <div className="order-date">
                <div>Qty</div>
                <span>{item.quantity}</span>
              </div>
              <div className="order-date">
                <div>TOTAL</div>
                <span>${item.price}</span>
              </div>
              <div className="order-date">
                <div className="ord">SHIP TO</div>
                <span>{sessionUser.username}</span>
              </div>
            </div>
            <div className="bottomOrder">
              <div className="left-order">
                <span className="order-status">Order Status: </span>
                <span className="order-status">{item.delivery_status}</span>
                {item.delivery_status === "Pending" && (
                  <div className="isdeli">
                    Your order will be shipped within two hours.
                  </div>
                )}
                {item.delivery_status === "Shipped" && (
                  <div className="isdeli">
                    Your order is shipped and will be delivered in two days.
                  </div>
                )}
                {item.delivery_status === "Delivered" && (
                  <div className="isdeli">
                    Your package was left near the front door or porch.
                  </div>
                )}
                <div className="inner-ordercontainer">
                  <img
                    className="ordered-img"
                    src={item.product.images[0]}
                    alt="product"
                  ></img>
                  <NavLink
                    className="ordered-links"
                    to={`/products/${item.product.id}`}
                  >
                    <span className="ordered-name">{item.product.name}</span>
                  </NavLink>
                </div>
              </div>
              <div className="links-grp">
                <div className="nav-btn">
                  <NavLink className="orderLinks" to={`/order/${item.id}`}>
                    <span className="order-word">View order details</span>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    className="orderLinks"
                    to={`products/${item.product.id}`}
                  >
                    <span className="order-word">Write a product review</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
