import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AddShippingAddressModal from "../modal/addShippingAddressModal";
function Checkout() {
  const [user, setUser] = useState({});
  const cart = useSelector((state) => Object.values(state.cart));
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  console.log("street is ", street);

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
          <div>
            <AddShippingAddressModal
              setStreet={setStreet}
              setCity={setCity}
              setState={setState}
              setZip={setZip}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
