import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, updateStatus } from "../../store/order";

function OrderHistory() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));
  const [status, setStatus] = useState("");
  let expiredDate = new Date();
  let dateNow = new Date();
  let deliveredDate = new Date();

  const dispatch = useDispatch();

  console.log("order", order);

  useEffect(() => {
    order.forEach((item) => {
      let orderTime = item.created_at;
      orderTime = orderTime.split(" ");
      orderTime.pop();
      orderTime.join("");
      orderTime = new Date(orderTime);
      //   let expiredDate = new Date();
      // original
      expiredDate.setDate(orderTime.getDate());
      expiredDate.setHours(orderTime.getHours() + 2);

      //   expiredDate.setHours(orderTime.getHours());

      // original
      expiredDate.setMinutes(orderTime.getMinutes());

      //   expiredDate.setMinutes(orderTime.getMinutes() + 1);

      expiredDate.setMilliseconds(0);

      //   let dateNow = new Date();
      //   let deliveredDate = new Date();
      //

      deliveredDate.setDate(orderTime.getDate() + 2);
      deliveredDate.setHours(orderTime.getHours());
      deliveredDate.setMinutes(orderTime.getMinutes());

      let expire = (expiredDate - dateNow) / 36e5;
      let isdelivered = (deliveredDate - dateNow) / 36e5;

      if (expire < 0) {
        setStatus("Confirmed");
        const data = {
          delivery_status: "Confirmed",
        };
        dispatch(updateStatus(data, item.id));
      } else if (isdelivered < 0) {
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
    setStatus("");
  }, [dispatch, status]);

  return (
    <div>
      <div>
        {order.map((item) => (
          <div key={item.id} className="order-container">
            <div className="topOrder">
              <div>
                <div>ORDER PLACED</div>
                <span>{item.created_at.split(" ").slice(1, 4).join("-")}</span>
              </div>
              <div>
                <div>Qty</div>
                <span>{item.quantity}</span>
              </div>
              <div>
                <div>TOTAL</div>
                <span>${item.price}</span>
              </div>
              <div>
                <div>SHIP TO</div>
                <span>{sessionUser.username}</span>
              </div>
            </div>
            <div className="bottomOrder">
              <div>
                <span>Order Status:</span>
                <span>{item.delivery_status}</span>
              </div>
              <div className="info-session">
                <div>
                  <img src={item.product.image} alt="product"></img>
                </div>
                <div>{item.product.name}</div>
                <div>
                  <NavLink to={`/order/${item.id}`}>View order details</NavLink>
                </div>
                <div>
                  <NavLink to={`products/${item.product.id}`}>
                    Write a product review
                  </NavLink>
                </div>
              </div>
            </div>
            <div>--------------------------------------------</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
