import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

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
    <>
      <h1>Your Account </h1>
      <div>
        <div>
          <NavLink to="/order-history">Your Orders</NavLink>
          <div>Track, return, or buy things again</div>
        </div>
        <div>
          <NavLink to={`/users/${sessionUser.id}`}>Your Profiles</NavLink>
          <div>
            Manage, add, remove user profiles for personalized experiences
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
