import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      } else {
        history.push("/home");
      }
    }
  };

  useEffect(() => {
    let errors = [];

    if (username.trim() === "") {
      errors.push("User name cannot be empty");
    }
    if (email.trim() === "") {
      errors.push("Email cannot be empty");
    }

    if (!email.includes("@") || !email.includes(".")) {
      errors.push("Invalid email address");
    }

    if (password !== repeatPassword) {
      errors.push("Password and repear password do not match");
    }
    setErrors(errors);
  }, [username, email, password, repeatPassword]);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
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
      <form className="form-container" onSubmit={onSignUp}>
        <div className="signin">Create Account</div>
        <div className="errors">
          {errors.map((error, ind) => (
            <div key={ind}>! {error}</div>
          ))}
        </div>
        <div>
          <div>
            <label className="email">User Name</label>
          </div>
          <input
            className="input-signin"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <div>
            <label className="email">Email</label>
          </div>
          <input
            className="input-signin"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <div>
            <label className="email">Password</label>
          </div>
          <input
            className="input-signin"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <div>
            <label className="email">Repeat Password</label>
          </div>
          <input
            className="input-signin"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button className="logout-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
