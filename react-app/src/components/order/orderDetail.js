import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OrderHistory from "./orderHistory";
import BugAgain from "./buyAgain";
import DeleteOrder from "./deleteOrder";
import { getOrder } from "../../store/order";
import EditShippingModal from "../modal/editShippingModal";
import DeleteOrderModal from "../modal/deleteOrderModal";
import "./order.css";
import "../checkout/checkout.css";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(sessionUser.id));
  }, [dispatch]);

  return (
    <div>
      {myOrder && (
        <div>
          <div className="ordertitle" id="detail-statu">
            Order Details
            <div className="below-order">
              Ordered on {myOrder.created_at.split(" ").slice(1, 4).join("-")}
            </div>
          </div>
          <div className="upperOrder-section">
            <div className="shipment-detail">
              <h4 className="shipment-title">Shipping Address</h4>
              <div className="shipment-title">{sessionUser.username}</div>
              <div className="shipment-title">{myOrder.street}</div>
              <div className="shipment-title">
                {myOrder.city}, {myOrder.state}, {myOrder.state}{" "}
                {myOrder.zip_code}
              </div>
              <div>{myOrder.country}</div>
            </div>
            <div>
              <h4 className="shipment-title">Payment Method</h4>
              <img
                src="https://www.pngitem.com/pimgs/m/1-15741_visa-icon-png-high-resolution-visa-logo-png.png"
                alt="visa"
                style={{ height: "30px" }}
              ></img>
              <span className="card-num">**** 2231</span>
            </div>
            <div>
              <h4 className="shipment-title">Order Summary</h4>

              <div className="row-list">
                <div>Item(s) Subtotal:$</div>
                <div className="each-price">
                  {(myOrder.product.price * myOrder.quantity).toFixed(2)}
                </div>
              </div>

              <div className="row-list">
                <div>Shipping & Handling:</div>
                <div className="each-price">$0.00</div>
              </div>

              <div className="row-list">
                Subscribe & Save::
                <div className="each-price">$0.00</div>
              </div>
              <div className="row-list">
                <div>Total before tax: $</div>
                <div className="each-price">
                  {(myOrder.product.price * myOrder.quantity).toFixed(2)}
                </div>
              </div>
              <div className="row-list">
                <div>Estimated tax: </div>
                <div className="each-price">${tax.toFixed(2)}</div>
              </div>

              <div className="row-list">
                <div className="grand">Grand Total: </div>
                <div className="grand each-price" id="final">
                  ${myOrder.price}
                </div>
              </div>
            </div>
          </div>
          <div className="bottomOrder" id="orderDetails">
            <div className="left-order">
              <div>
                <h4 className="order-status" id="detail-status">
                  Status: {myOrder.delivery_status}
                </h4>
              </div>
              <div className="inner-ordercontainer">
                <img
                  className="ordered-img"
                  src={myOrder.product.images[0]}
                  alt="product"
                ></img>
                <NavLink
                  className="ordered-links"
                  id="detail-link"
                  to={`/products/${myOrder.product.id}`}
                >
                  <div className="ordered-name">{myOrder.product.name}</div>
                </NavLink>
              </div>
              <div className="detail-grp">
                <div>Condition: New</div>
              </div>
            </div>
            <div className="links-grp">
              <EditShippingModal myOrder={myOrder} id={id} />
              <DeleteOrderModal myOrder={myOrder} id={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
