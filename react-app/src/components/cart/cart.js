import { getCart } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Quantity from "./quantity";

function Cart() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const cart = useSelector((state) => Object.values(state.cart));
  const userId = sessionUser.user.id;

  console.log("c", cart);

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  return (
    <div>
      <div className="upper-cart">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-container">
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
      </div>
    </div>
  );
}

export default Cart;
