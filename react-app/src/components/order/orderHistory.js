import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, updateStatus } from "../../store/order";
import "./order.css";

function OrderHistory() {
  const sessionUser = useSelector((state) => state.session.user);
  const orderData = useSelector((state) => Object.values(state.order));
  const order = orderData.reverse();
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    order.forEach((item) => {
      // orderTime is in "Sun, 12 Feb 2023 17:09:43 GMT" format
      let orderTime = item.created_at;
      // This process is to ensure the timezone information is not taken into account when creating the date object,
      // which can cause issues when comparing dates in different timezones.
      orderTime = orderTime.split(" ");
      orderTime.pop();
      orderTime.join("");
      orderTime = new Date(orderTime);


      let twoHoursLater = new Date(orderTime);
      let twoDaysLater = new Date(orderTime);
      let currentTime = new Date();
      // shipment date defined as two hours
      twoHoursLater.setHours(orderTime.getHours() + 2);
      // delivery date defined as two days after
      twoDaysLater.setDate(orderTime.getDate() + 2);

      // it compares the current time to two hours&days after users place their orders
      // if it pasts two hours and not two days, the order status will change to shipped
      // or else it will change it delivered
      // Default status is pending
      if (currentTime >= twoHoursLater && currentTime < twoDaysLater) {
        setStatus("Shipped");
        const data = {
          delivery_status: "Shipped",
        };
        dispatch(updateStatus(data, item.id));
      } else if (currentTime >= twoDaysLater) {
        setStatus("Delivered");
        const data = {
          delivery_status: "Delivered",
        };
        dispatch(updateStatus(data, item.id));
      }
    });
  }, [dispatch, status]);

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch, status]);

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
                    src={item.product.image}
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
