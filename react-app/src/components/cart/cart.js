import { getCart } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const cart = useSelector((state) => Object.values(state.cart));
  const userId = sessionUser.user.id;

  const [qty, setQty] = useState(1);

  console.log(cart);
  console.log(qty);

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  const deleteCartItem = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="upper-cart">
        <h1>Shopping Cart</h1>
        <div>Price</div>
      </div>
      <div className="cart-container">
        {cart &&
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
              <div>
                <label>Qty:</label>
                <select
                  onChange={(e) => setQty(e.target.value)}
                  defaultValue={item.quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <button value={item.id} onClick={deleteCartItem}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cart;
