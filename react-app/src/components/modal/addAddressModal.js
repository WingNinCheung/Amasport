import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import AddAddress from "../addAddress";

function AddAddressModal({ user, setUser, setChanges, changes }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddAddress
            user={user}
            setUser={setUser}
            setShowModal={setShowModal}
            setChanges={setChanges}
            changes={changes}
          />
        </Modal>
      )}
    </>
  );
}

export default AddAddressModal;
