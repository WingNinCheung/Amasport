import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AddShippingAddress({ setShowModal, setChanged, changed }) {
  const [newStreet, setNewStreet] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("AL");
  const [newZip, setNewZip] = useState("");
  const [validationError, setValidationError] = useState([]);

  const history = useHistory();

  // validation errors handling

  useEffect(() => {
    let errors = [];

    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    if (newStreet.trim().length === "" || newCity.trim() === "") {
      errors.push("Street and City name cannot be empty or all spaces");
    }

    if (newStreet.length > 50) {
      errors.push("Street cannot be more than 50 characters");
    }
    if (newCity.length > 22) {
      errors.push("City name cannot be more than 22 characters");
    }
    if (!isValidZip.test(newZip)) {
      errors.push("Invalid zip code");
    }
    setValidationError(errors);
  }, [newStreet, newCity, newState, newZip]);

  const handleChange = async (e) => {
    e.preventDefault();
    setShowModal(false);
    setChanged(!changed);
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
          onChange={(e) => {
            setNewStreet(e.target.value);
            localStorage.setItem("street", e.target.value);
          }}
          value={newStreet}
        ></input>
        <label>
          {" "}
          City
          <input
            onChange={(e) => {
              setNewCity(e.target.value);

              localStorage.setItem("city", e.target.value);
            }}
            value={newCity}
          ></input>
        </label>
        <label>
          State
          <select
            onChange={(e) => {
              setNewState(e.target.value);
              localStorage.setItem("state", e.target.value);
            }}
            value={newState}
          >
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
          <input
            onChange={(e) => {
              setNewZip(e.target.value);
              localStorage.setItem("zip", e.target.value);
            }}
            value={newZip}
          ></input>
        </label>
        <button onClick={handleChange} disabled={validationError.length}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddShippingAddress;
