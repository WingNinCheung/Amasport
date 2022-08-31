import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import AddShippingAddress from "../checkout/addShippingAddress";

function AddShippingAddressModal({ setChanged, changed }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="addCart-button"
        id="checkout-address"
        onClick={() => setShowModal(true)}
      >
        <i class="fa-solid fa-plus"></i> Add a new address
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddShippingAddress
            setShowModal={setShowModal}
            setChanged={setChanged}
            changed={changed}
          />
        </Modal>
      )}
    </>
  );
}

export default AddShippingAddressModal;
