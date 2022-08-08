import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import EditShipping from "../order/editShipping";

function EditShippingModal({ myOrder, id }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        Edit shipping address
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditShipping myOrder={myOrder} id={id} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditShippingModal;
