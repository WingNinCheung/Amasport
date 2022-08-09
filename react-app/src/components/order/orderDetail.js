import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import BugAgain from "./buyAgain";
import DeleteOrder from "./deleteOrder";
import { getOrder } from "../../store/order";
import EditShippingModal from "../modal/editShippingModal";
import DeleteOrderModal from "../modal/deleteOrderModal";

function OrderDetails() {
  const sessionUser = useSelector((state) => state.session.user);
  const order = useSelector((state) => Object.values(state.order));
  let tax = 0;

  const { id } = useParams();
  const myOrder = order.find((order) => order.id == id);

  if (myOrder) {
    tax =
      Number(myOrder.price) - Number(myOrder.product.price * myOrder.quantity);
  }
  console.log("my order ", myOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      {myOrder && (
        <div>
          <h2>Order Details</h2>
          <div>
            Ordered on {myOrder.created_at.split(" ").slice(1, 4).join("-")}
          </div>
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
              <div>
                Item(s) Subtotal:$
                {(myOrder.product.price * myOrder.quantity).toFixed(2)}
              </div>
              <div>Shipping & Handling: $0.00</div>
              <div>Subscribe & Save:: $0.00</div>
              <div>
                Total before tax: $
                {(myOrder.product.price * myOrder.quantity).toFixed(2)}
              </div>
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
            <div>
              <EditShippingModal myOrder={myOrder} id={id} />
            </div>
            <div>
              <DeleteOrderModal myOrder={myOrder} id={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
