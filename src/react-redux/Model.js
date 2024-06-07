import React from "react";

const Model = ({ setShowModel, showModel, children, handleClose }) => {
  const showHideClassName = showModel
    ? "modal display-block"
    : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Model;
