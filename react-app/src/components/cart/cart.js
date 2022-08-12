import { getCart } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import Quantity from "./quantity";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const cart = useSelector((state) => Object.values(state.cart));
  const userId = sessionUser.user.id;
  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalPrice += item.products.price * item.quantity;
    totalQuantity += item.quantity;
  });
  totalPrice = totalPrice.toFixed(2);

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  return (
    <div className="shoppingcart-container">
      {/* <div className="upper-cart">
        <h1 className="cart-title">Shopping Cart</h1>
      </div> */}

      <div className="Incart-container">
        <div className="left-section">
          <div></div>
          <h1 className="cart-title">Shopping Cart</h1>
          <div id="cart-price">Price</div>
          <section className="leftcart">
            {cart.length ? (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="inCart-img">
                    <img
                      className="incart-img"
                      src={item.products.image}
                      alt="item"
                    ></img>
                  </div>
                  <div className="right-item">
                    <div>{item.products.name}</div>
                    <div className="price-cart">
                      <h3>${item.products.price}</h3>
                    </div>
                    <h5 className="stock" id="cart-stock">
                      In Stock
                    </h5>
                    <div className="return">
                      <img
                        className="prime"
                        style={{ height: "25px" }}
                        src={primeIcon}
                        alt="prime"
                      ></img>
                      <div className="free-ship"> & FREE Returns</div>
                    </div>
                    <Quantity product={item} />
                  </div>
                </div>
              ))
            ) : (
              <h2>Your Amasport Cart is empty.</h2>
            )}
          </section>
        </div>
        <div className="cartright-container">
          <div className="right-section">
            {cart.length !== 0 && (
              <div>
                <span className="subtitle">
                  Subtotal ({totalQuantity} items):{" "}
                  <span id="subcheckout">${totalPrice}</span>
                </span>
                <NavLink className="proceed" to="cart/checkout">
                  <div className="addCart-button" id="proceed-btn">
                    Proceed to checkout
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
