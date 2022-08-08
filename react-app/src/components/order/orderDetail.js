import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import BugAgain from "./buyAgain";
import CancelOrder from "./cancelOrder";
import { getOrder } from "../../store/order";

function OrderDetails() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));

  const { id } = useParams();
  const myOrder = order.find((order) => order.id == id);

  const tax = Number(myOrder.price) - Number(myOrder.product.price);
  console.log("my order ", myOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      {order && (
        <div>
          <h2>Order Details</h2>
          <div>Ordered on {myOrder.created_at}</div>
          <div className="upperOrder-section">
            <div>
              <h4>Shipping Address</h4>
              <div>{sessionUser.username}</div>
              <div>{myOrder.street}</div>
              <div>
                {myOrder.city}, {myOrder.state}, {myOrder.state}{" "}
                {myOrder.zip_code}
              </div>
              <div>{myOrder.country}</div>
            </div>
            <div>
              <h4>Payment Method</h4>
              <img
                src="https://www.pngitem.com/pimgs/m/1-15741_visa-icon-png-high-resolution-visa-logo-png.png"
                alt="visa"
                style={{ height: "30px" }}
              ></img>
              <span>**** 2231</span>
            </div>
            <div>
              <h4>Order Summary</h4>
              <div>Item(s) Subtotal:${myOrder.product.price}</div>
              <div>Shipping & Handling: $0.00</div>
              <div>Subscribe & Save:: $0.00</div>
              <div>Total before tax: ${myOrder.product.price}</div>
              <div>Estimated tax: ${tax.toFixed(2)}</div>
              <div>Grand Total: ${myOrder.price}</div>
            </div>
          </div>
          <div className="lowerOrder-section">
            <div>
              <img src={myOrder.product.image} alt="product"></img>
            </div>
            <div></div>
            <div>{myOrder.product.name}</div>
            <div>Category: {myOrder.product.category}</div>
            <div>Brand: {myOrder.product.brand}</div>
            <div>Manufacturer: {myOrder.product.manufacturer}</div>
            <div>Condition: New</div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
