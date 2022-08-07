import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditAddressModal from "./modal/editAddressModal";

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
    <div>
      <div>
        <h3>Manage your Profiles</h3>
      </div>
      <div>
        <h3>{user.username}</h3>
        <div>Account holder</div>
      </div>
      <section className="contact-container">
        <div>
          <h4>Contact Details</h4>
          <h5>Email Address</h5>
          <div>{user.email}</div>
        </div>
      </section>
      <section className="address-container">
        <div>
          <h4>Physical Address</h4>
          <div>
            {!user.street ? (
              <div>
                <h5>No address found in our record </h5>
                <div>Add here</div>
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
      <div>The account holder's profile cannot be removed.</div>
    </div>
  );
}

export default Profile;
