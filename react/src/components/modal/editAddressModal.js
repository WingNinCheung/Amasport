import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import EditAddress from "../editAddress";

function EditAddressModal({ user, setUser, setChanges, changes }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="addCart-button"
        id="edit-add"
        onClick={() => setShowModal(true)}
      >
        <i class="fa-solid fa-pen"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditAddress
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

export default EditAddressModal;
