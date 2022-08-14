import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditAddressModal from "./modal/editAddressModal";
import AddAddressModal from "./modal/addAddressModal";
import "./profile.css";

function Profile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const [changes, setChanges] = useState(false);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId, changes]);

  if (!user) {
    return null;
  }

  return (
    <div className="profile-container">
      <div className="title-container">
        <h3 id="profile-title">Manage your Profiles</h3>
      </div>
      <div className="name-profile">
        <div className="upper-profile">
          <h3 className="profile-name">{user.username}</h3>
          <div id="acc-holder">Account holder</div>
        </div>
      </div>
      <section className="contact-container">
        <div>
          <h4 className="contact">Contact Details</h4>
          <h5>Email Address</h5>
          <div>{user.email}</div>
        </div>
      </section>
      <section className="contact-container">
        <div>
          <h4 className="contact">Physical Address</h4>
          <div>
            {user.street === null ? (
              <div>
                <h5>No address found in our record </h5>
                <span>
                  <AddAddressModal
                    user={user}
                    setUser={setUser}
                    setChanges={setChanges}
                    changes={changes}
                  />
                </span>
              </div>
            ) : (
              <div>
                <div>
                  {user.street}, {user.city}, {user.state}, {user.zip_code},{" "}
                  {user.country}
                </div>
                <span>
                  <EditAddressModal
                    user={user}
                    setUser={setUser}
                    setChanges={setChanges}
                    changes={changes}
                  />
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className="profile-last">
        The account holder's profile cannot be removed.
      </div>
    </div>
  );
}

export default Profile;
