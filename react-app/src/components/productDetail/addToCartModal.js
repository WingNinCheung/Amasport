import React, { useState } from "react";
import { Modal } from "../../components/modal/modal";
import AddToCart from "./addToCart";

function AddToCartModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="addCart-button" onClick={() => setShowModal(true)}>
        Add to Cart
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddToCart />
        </Modal>
      )}
    </>
  );
}

export default AddToCartModal;
