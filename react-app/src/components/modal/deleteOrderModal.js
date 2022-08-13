import React, { useState } from "react";
import { Modal } from "./modal";
import DeleteOrder from "../order/deleteOrder";
import "../order/order.css";

function DeleteOrderModal({ id, myOrder }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="addCart-button"
        id="cancel-order"
        onClick={() => setShowModal(true)}
      >
        Cancel order
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
