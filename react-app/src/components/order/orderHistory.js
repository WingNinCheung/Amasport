import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, updateStatus } from "../../store/order";
import "./order.css";

function OrderHistory() {
  const sessionUser = useSelector((state) => state.session.user);
  const orderOri = useSelector((state) => Object.values(state.order));
  const order = orderOri.reverse();
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  let expiredDate = new Date();

  let dateNow = new Date();
  let deliveredDate = new Date();
  useEffect(() => {
    order.forEach((item) => {
      let orderTime = item.created_at;
      orderTime = orderTime.split(" ");
      orderTime.pop();
      orderTime.join("");

      orderTime = new Date(orderTime);

      expiredDate.setDate(orderTime.getDate());
      expiredDate.setHours(orderTime.getHours() + 2);

      expiredDate.setMinutes(orderTime.getMinutes());

      expiredDate.setMilliseconds(orderTime.getMilliseconds());

      deliveredDate.setDate(orderTime.getDate() + 2);
      deliveredDate.setHours(orderTime.getHours());
      deliveredDate.setMinutes(orderTime.getMinutes());
      deliveredDate.setMilliseconds(orderTime.getMilliseconds());

      let expire = (expiredDate - dateNow) / 36e5;
      let isdelivered = (deliveredDate - dateNow) / 36e5;

      if (expire < 0 && isdelivered > 0) {
        setStatus("Shipped");
        const data = {
          delivery_status: "Shipped",
        };
        dispatch(updateStatus(data, item.id));
        dispatch(getOrder(sessionUser.id));
      } else if (isdelivered < 0) {
        setStatus("Delivered");
        const data = {
          delivery_status: "Delivered",
        };
        dispatch(updateStatus(data, item.id));
        dispatch(getOrder(sessionUser.id));
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
                    Your order will be shipped in two hours. Please come back to
                    check
                  </div>
                )}
                {item.delivery_status === "Shipped" && (
                  <div className="isdeli">
                    Your order will be delivered in two days.
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
