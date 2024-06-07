import React from "react";

const Modal = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div id="my_modal_3" className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => setModalOpen(false)}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
