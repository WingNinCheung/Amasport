import React, { useState } from "react";
import { Modal } from "./modal";
import DeleteOrder from "../order/deleteOrder";

function DeleteOrderModal({ id }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        Delete Order
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteOrder setShowModal={setShowModal} id={id} />
        </Modal>
      )}
    </>
  );
}

export default DeleteOrderModal;
