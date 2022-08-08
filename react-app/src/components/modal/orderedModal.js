import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import ThankYou from "../checkout/thankyou";

function OrderedModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-plus"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ThankYou />
        </Modal>
      )}
    </>
  );
}

export default OrderedModal;
