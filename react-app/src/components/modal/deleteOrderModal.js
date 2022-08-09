import React, { useState } from "react";
import { Modal } from "./modal";
import DeleteOrder from "../order/deleteOrder";

function DeleteOrderModal({ id, myOrder }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        Cencel order
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteOrder setShowModal={setShowModal} id={id} myOrder={myOrder} />
        </Modal>
      )}
    </>
  );
}

export default DeleteOrderModal;
