import { getCart } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import Quantity from "./quantity";

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
    <div>
      <div className="upper-cart">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-container">
        <div className="left-section">
          {cart.length ? (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div>
                  <img src={item.products.image} alt="item"></img>
                </div>
                <div>{item.products.name}</div>
                <div>
                  <h3>${item.products.price}</h3>
                </div>
                <h5>In Stock</h5>
                <h4>prime & FREE Returns</h4>
                <Quantity product={item} />
              </div>
            ))
          ) : (
            <h2>Your Amasport Cart is empty.</h2>
          )}
          {cart.length !== 0 && (
            <div className="right-section">
              <span>
                Subtotal ({totalQuantity} items): ${totalPrice}
              </span>
              <NavLink to="cart/checkout">Proceed to checkout</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
