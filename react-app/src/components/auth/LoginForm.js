import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import "../navbar.css";
import "./auth.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let errors = [];

    if (email.trim() === "") {
      errors.push("Email cannot be empty");
    }

    if (!password.length) {
      errors.push("Password cannot be empty");
    }
    setErrors(errors);
  }, [email, password]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else if (localStorage.getItem("location") !== "") {
      let link = localStorage.getItem("location");
      history.push("/products/1");
      localStorage.clear();
      // console.log(localStorage.getItem("location"));
    } else {
      history.push("/home");
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <div className="login-logo">
        <h2>Amasport</h2>
      </div>
      <img
        className="logo-img"
        src="https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png"
        alt="logo"
      ></img>
      <form className="form-container" onSubmit={onLogin}>
        <div className="signin">Sign-In</div>
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>! {error}</div>
          ))}
        </div>
        <div>
          <div>
            <label className="email" htmlFor="email">
              Email
            </label>
          </div>
          <input
            className="input-signin"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <div>
            <label className="email" htmlFor="password">
              Password
            </label>
          </div>
          <input
            className="input-signin"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div>
            <button className="logout-btn" type="submit">
              Login
            </button>
          </div>
          <button
            className="logout-btn"
            type="submit"
            onClick={() => {
              setEmail("demo@aa.io");
              setPassword("password");
            }}
          >
            Demo User
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
