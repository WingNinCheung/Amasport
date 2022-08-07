import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddShippingAddressModal from "../modal/addShippingAddressModal";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";
function Checkout() {
  const [user, setUser] = useState({});
  const cart = useSelector((state) => Object.values(state.cart));
  const [changed, setChanged] = useState(false);

  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalPrice += item.products.price * item.quantity;
    totalQuantity += item.quantity;
  });
  totalPrice = totalPrice.toFixed(2);

  let tax = (totalPrice * 0.00863).toFixed(2);
  let finalPrice = Number(tax) + Number(totalPrice);

  let today = new Date();
  let delivery_date = new Date();

  delivery_date.setDate(today.getDate() + 2);
  delivery_date.setHours(17);
  delivery_date.setMinutes(0);
  delivery_date.setMilliseconds(0);
  delivery_date = delivery_date.toDateString().split(" ");
  delivery_date.shift();
  delivery_date = delivery_date.join(" ");

  let cutOff = new Date();
  cutOff.setDate(today.getDate() + 1);
  cutOff.setHours(0);
  cutOff.setMinutes(0);
  cutOff.setMilliseconds(0);

  let expiredDate = Math.abs(cutOff - today) / 36e5;
  expiredDate = expiredDate.toFixed(2).split(".");

  let street = window.localStorage.getItem("street");
  let city = window.localStorage.getItem("city");
  let state = window.localStorage.getItem("state");
  let zip = window.localStorage.getItem("zip");

  useEffect(() => {}, [street, city, state, zip, changed, cutOff]);

  const sessionUser = useSelector((state) => state.session);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${sessionUser.user.id}`);
      const user = await response.json();
      setUser(user);
    })();
  }, []);

  console.log(cart);

  return (
    <div className="checkout-container">
      <section className="shipping-address">
        <h2>1 Choose a shipping address</h2>
        <div>
          <h3>Your address</h3>
          <input type="radio" value="default" name="address" />
          <label>
            {user.street}, {user.city}, {user.state}, {user.zip_code},{" "}
            {user.country}
          </label>
          <h3>Other addresses</h3>
          {street && (
            <div>
              <input type="radio" name="address" />
              <label>
                {" "}
                {street}, {city}, {state}, {zip}, {user.country}
              </label>
            </div>
          )}
          {!street && (
            <div>
              <AddShippingAddressModal
                setChanged={setChanged}
                changed={changed}
              />
            </div>
          )}
        </div>
      </section>
      <section className="payment-method">
        <h2>2 Payment method</h2>
        <div>VISA ending with 2231</div>
      </section>
      <section className="shipping-method">
        <h2>3 Review items and shipping</h2>
        <div>
          <div>
            Delivery date: {delivery_date} if you order in the next{" "}
            {expiredDate[0]} hour and {expiredDate[1]} minutes
          </div>
          <div className="product-review">
            {cart.map((item) => (
              <div key={item.id}>
                <img src={item.products.image} alt="product"></img>
                <div>
                  <h5>{item.products.name}</h5>
                  <div>
                    ${item.products.price}
                    <img
                      style={{ height: "30px" }}
                      src={primeIcon}
                      alt="prime"
                    ></img>
                  </div>
                  <div>Qty: {item.quantity}</div>
                  <div>Sold by: {item.products.manufacturer}</div>
                </div>
                <div></div>
              </div>
            ))}
            <div>
              <h4>Your Prime delivery Info:</h4>
              <div>
                <input type="radio" name="prime" checked />
                <label>{delivery_date}</label>
                <div>FREE 2-day Prime Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="summary">
        <button>Place your order</button>
        <div>
          By placing your order, you agree to Amasport's privacy notice and
          conditions of use.
        </div>
        <div>
          <h3>Order Summary</h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Items ({totalQuantity}):</td>
                  <td>{totalPrice}</td>
                </tr>
                <tr>
                  <td>Shipping & handling:</td>
                  <td>$0.00</td>
                </tr>

                <tr>
                  <td>Total before tax:</td>
                  <td>${totalPrice}</td>
                </tr>
                <tr>
                  <td>Estimated tax to be collected:</td>
                  <td>${tax}</td>
                </tr>
                <tr>
                  <td>
                    <h3>Order total:</h3>
                  </td>
                  <td>
                    <h3>${finalPrice}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
