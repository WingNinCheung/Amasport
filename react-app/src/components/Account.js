import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./account.css";

function Account() {
  const [users, setUsers] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  return (
    <div className="account-container">
      <h1 className="account-title">Your Account </h1>
      <div className="account-item">
        <div className="acc-order">
          <div>
            <img
              className="order-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/order._CB660668735_.png"
              alt="order"
            ></img>
          </div>
          <div className="account-link">
            <NavLink className="account-link" to="/order-history">
              <span className="inner-acc">Your Orders</span>
            </NavLink>
            <div className="acc-des">Track, return, or buy things again</div>
          </div>
        </div>
        <div className="acc-order">
          <div>
            <img
              className="order-img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/account._CB660668669_.png"
              alt="profile"
            ></img>
          </div>
          <div className="account-link">
            <NavLink className="account-link" to={`/users/${sessionUser.id}`}>
              <span className="inner-acc">Your Profiles</span>
            </NavLink>
            <div className="acc-des">
              Manage, add, remove user profiles for personalized experiences
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
