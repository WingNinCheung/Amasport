import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddShippingAddressModal from "../modal/addShippingAddressModal";
function Checkout() {
  const [user, setUser] = useState({});
  const cart = useSelector((state) => Object.values(state.cart));
  const [changed, setChanged] = useState(false);

  let street = window.localStorage.getItem("street");
  let city = window.localStorage.getItem("city");
  let state = window.localStorage.getItem("state");
  let zip = window.localStorage.getItem("zip");

  useEffect(() => {
    // street = window.localStorage.getItem("street");
    // city = window.localStorage.getItem("city");
    // state = window.localStorage.getItem("state");
    // zip = window.localStorage.getItem("zip");
  }, [street, city, state, zip, changed]);

  console.log("local storage ", street, city, state, zip);

  const sessionUser = useSelector((state) => state.session);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${sessionUser.user.id}`);
      const user = await response.json();
      setUser(user);
    })();
  }, []);

  console.log("user", user);

  console.log(cart);

  return (
    <div className="checkout-container">
      <section className="shipping-address">
        <div>1 Choose a shipping address</div>
        <div>
          <h3>Your address</h3>
          <input type="radio" value="default" />
          <label>
            {user.street}, {user.city}, {user.state}, {user.zip_code},{" "}
            {user.country}
          </label>
          <h3>Other addresses</h3>
          <input type="radio" />
          <label>
            {" "}
            {street}, {city}, {state}, {zip}, {user.country}
          </label>
          <div>
            <AddShippingAddressModal
              setChanged={setChanged}
              changed={changed}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
