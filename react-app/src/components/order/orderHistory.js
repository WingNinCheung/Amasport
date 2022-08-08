import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../store/order";

function OrderHistory() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));

  console.log("order", order);

  //   console.log("here", sessionUser);
  return (
    <div>
      <div>
        {order.map((item) => (
          <div key={item.id} className="order-container">
            <div className="topOrder">
              <div>
                <div>ORDER PLACED</div>
                <span>{item.created_at}</span>
              </div>
              <div>
                <div>TOTAL</div>
                <span>{item.price}</span>
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
