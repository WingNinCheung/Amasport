import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import AddShippingAddress from "../checkout/addShippingAddress";

function AddShippingAddressModal({ setStreet, setCity, setState, setZip }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-plus"></i> Add a new address
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddShippingAddress
            setStreet={setStreet}
            setCity={setCity}
            setState={setState}
            setZip={setZip}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default AddShippingAddressModal;
