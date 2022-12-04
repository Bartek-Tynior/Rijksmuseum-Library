import React, { useState } from "react";
import { motion } from "framer-motion";

function Modal({ imgSrc }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn_modal">
        Volledig afbeelding
      </button>

      {modal && (
        <div onClick={toggleModal} className="modal">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="image_modal"
            src={imgSrc}
          />
        </div>
      )}
    </div>
  );
}

export default Modal;
