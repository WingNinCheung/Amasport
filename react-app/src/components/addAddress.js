import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AddAddress({ user, setUser, setShowModal, setChanges, changes }) {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [validationError, setValidationError] = useState([]);

  const history = useHistory();

  // validation errors handling

  console.log("userid", user);
  useEffect(() => {
    let errors = [];

    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if (street.trim().length === "" || city.trim() === "") {
      errors.push("Street and City name cannot be empty or all spaces");
    }

    if (street.length > 50) {
      errors.push("Street cannot be more than 50 characters");
    }
    if (city.length > 22) {
      errors.push("City name cannot be more than 22 characters");
    }
    if (!isValidZip.test(zip)) {
      errors.push("Invalid zip code");
    }
    setValidationError(errors);
  }, [street, city, state, zip]);

  const handleChange = async (e) => {
    e.preventDefault();

    const data = {
      street,
      city,
      state,
      zip_code: zip,
      country: "USA",
    };

    const res = await fetch(`/api/users/${user.id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setUser(user);
    setShowModal(false);
    setChanges(!changes);
  };

  return (
    <div className="editAdd-container">
      <div>
        <h3>Add your address</h3>
        <div>Only a U.S address is allowed</div>
      </div>
      <form>
        <ul>
          {validationError.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <label> Street:</label>
        <input
          onChange={(e) => setStreet(e.target.value)}
          value={street}
        ></input>
        <label>
          {" "}
          City
          <input onChange={(e) => setCity(e.target.value)} value={city}></input>
        </label>
        <label>
          State
          <select onChange={(e) => setState(e.target.value)} value={state}>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </label>
        <label>
          Zip code
          <input onChange={(e) => setZip(e.target.value)} value={zip}></input>
        </label>
        <button onClick={handleChange} disabled={validationError.length}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAddress;
