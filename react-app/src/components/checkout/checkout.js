import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import AddShippingAddressModal from "../modal/addShippingAddressModal";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";
import { createOrder, getOrder } from "../../store/order";
import OrderedModal from "../modal/orderedModal";
import { removeCart } from "../../store/cart";
import "./checkout.css";

function Checkout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const cart = useSelector((state) => Object.values(state.cart));
  const order = useSelector((state) => Object.values(state.order));
  const [changed, setChanged] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  let radioResult = "default";

  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalPrice += item.products.price * item.quantity;
    totalQuantity += item.quantity;
  });
  totalPrice = totalPrice.toFixed(2);

  let tax = (totalPrice * 0.0863).toFixed(2);
  let finalPrice = Number(tax) + Number(totalPrice);

  let today = new Date();
  let delivery_date = new Date();

  let cutOff = new Date();
  cutOff.setDate(today.getDate());
  cutOff.setHours(17);
  cutOff.setMinutes(0);
  cutOff.setMilliseconds(0);

  // let expiredDate = Math.abs(cutOff.getTime() - today.getTime()) / 36e5;
  let expiredDate = (cutOff.getTime() - today.getTime()) / 36e5;
  if (expiredDate < 0) {
    cutOff.setDate(today.getDate() + 1);
    expiredDate = (cutOff.getTime() - today.getTime()) / 36e5;
    delivery_date.setDate(today.getDate() + 3);
  } else {
    delivery_date.setDate(today.getDate() + 2);
  }
  expiredDate = expiredDate.toFixed(2).split(".");

  delivery_date.setHours(17);
  delivery_date.setMinutes(0);
  delivery_date.setMilliseconds(0);
  delivery_date = delivery_date.toDateString().split(" ");
  delivery_date.shift();
  delivery_date = delivery_date.join(" ");

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

  useEffect(() => {
    dispatch(getOrder(sessionUser.user.id));
  }, [dispatch]);

  const radioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let data;

    cart.forEach((product) => {
      if (radioValue === "default") {
        street = user.street;
        city = user.city;
        state = user.state;
        zip = user.zip_code;
      }

      data = {
        user_id: user.id,
        product_id: product.product_id,
        quantity: product.quantity,
        price: (product.products.price * product.quantity * 1.0863).toFixed(2),
        street,
        city,
        state,
        zip_code: zip,
        country: "USA",
        delivery_time: 2,
        delivery_status: "Pending",
        created_at: today,
      };

      if (!radioValue) {
        window.alert("Please add or select a shipping address");
      } else {
        dispatch(createOrder(data));
      }
    });
    if (radioValue) {
      await dispatch(removeCart(user.id));
      history.push("/thank-you");
    }
  };

  console.log("radio value", radioValue);
  return (
    <div className="checkout-container">
      <section className="shipping-address">
        <h2 className="check-title">
          1<span id="choose">Choose a shipping address</span>
        </h2>
        <div className="shipping-innerContainer">
          <h3 className="inner-title">Your address</h3>
          {user.street ? (
            <div>
              <input
                className="list-address"
                type="radio"
                value="default"
                name="address"
                // checked={true}
                onClick={radioChange}
              />
              <label className="label-address">
                {user.street}, {user.city}, {user.state}, {user.zip_code},{" "}
                {user.country}
              </label>
            </div>
          ) : (
            <div style={{ marginLeft: "3%" }}>
              {" "}
              No address found in your profile
            </div>
          )}
          <h3 className="inner-title">Other address</h3>
          {street && (
            <div>
              <input
                className="list-address"
                type="radio"
                name="address"
                value="added"
                // checked
                onClick={radioChange}
              />
              <label className="label-address">
                {street}, {city}, {state}, {zip}, USA
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
        <h2 className="check-title">
          2<span id="choose">Payment method </span>
        </h2>
        <div className="shipping-innerContainer">
          <div className="inner-payment">
            <img
              id="visa-img"
              src="https://www.pngitem.com/pimgs/m/1-15741_visa-icon-png-high-resolution-visa-logo-png.png"
              alt="visa"
              style={{ height: "30px" }}
            ></img>
            <span id="cc-number">
              <span id="credit-card">VISA</span> ending with 2231
            </span>
          </div>
        </div>
      </section>
      <section className="shipping-method">
        <h2 className="check-title">
          3<span id="choose">Review items and shipping</span>
        </h2>
        <div id="before-warning">
          <div className="inner-warning">
            <div className="grp1">
              <i class="fa-solid fa-circle-exclamation"></i>
              <span id="before-order">Before you place your order:</span>
            </div>
            <div className="warning-body">
              Shop with Points allows customers to pay for Amasport.com
              purchases using credit card rewards. To see if you have rewards
              available or to change the rewards amount for this purchase,
              please contact our
              <a
                id="represent"
                href="https://www.linkedin.com/in/wingnincheung/"
                target="popup"
              >
                {" "}
                representative.
              </a>
            </div>
          </div>
        </div>
        <div className="shipping-innerContainer">
          <div className="three-container">
            <div className="delivery-info">
              Delivery date: {delivery_date}
              <span id="ifyou">
                {"  "}
                if you order in the next {expiredDate[0]} hours and{" "}
                {expiredDate[1]} minutes
              </span>
              <div className="ship-ama">Items shipped from Amasport.com</div>
              <div className="product-review">
                {cart.map((item) => (
                  <div className="checkout-item" key={item.id}>
                    <img
                      className="checkout-img"
                      src={item.products.image}
                      alt="product"
                    ></img>
                    <div className="pro-title">
                      <h5 className="pro-itemtitle">{item.products.name}</h5>
                      <div className="second-check">
                        <span id="checkout-price">${item.products.price}</span>
                        <img
                          id="prime-img"
                          style={{ height: "25px" }}
                          src={primeIcon}
                          alt="prime"
                        ></img>
                        <div id="qty">Qty: {item.quantity}</div>
                        <div id="soldby">
                          Sold by: {item.products.manufacturer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right-checkout">
              <h4>Your Prime delivery Info:</h4>
              <div>
                <input type="radio" name="prime" checked />
                <label id="delivery-label">{delivery_date}</label>
                <div id="des-date">FREE 2-day Prime Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="summary">
        <div id="place-order">
          <button className="addCart-button" onClick={placeOrder}>
            Place your order
          </button>
        </div>
        <div className="condition">
          By placing your order, you agree to Amasport's privacy notice and
          conditions of use.
        </div>
        <div>
          <h3 style={{ fontSize: "18px" }}>Order Summary</h3>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <td>Items ({totalQuantity}):</td>
                  <td className="checkout-td">${totalPrice}</td>
                </tr>
                <tr>
                  <td>Shipping & handling:</td>
                  <td className="checkout-td">$0.00</td>
                </tr>

                <tr>
                  <td>Total before tax:</td>
                  <td className="checkout-td">${totalPrice}</td>
                </tr>
                <tr>
                  <td>Estimated tax to be collected:</td>
                  <td className="checkout-td ">${tax}</td>
                </tr>
                <div className="lasttr"></div>
                <tr className="last-tr">
                  <td>
                    <h3>Order total:</h3>
                  </td>
                  <td>
                    <h3>${finalPrice.toFixed(2)}</h3>
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
