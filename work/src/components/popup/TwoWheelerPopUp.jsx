import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TwoWheelerPopUp({ show, onHide }) {
  const handleCloseModal = () => {
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={handleCloseModal}
      centered
      size="md"
      contentClassName="p-0 border-0 bg-transparent"
      dialogClassName="modal-dialog-no-white"
    >
      <div className="rounded-4 overflow-hidden" style={{ backgroundColor: "#FFD5A4", borderRadius: "30px" }}>
        {/* Close Button */}
        <div className="d-flex justify-content-end p-3">
          <button
            onClick={handleCloseModal}
            className="btn btn-link text-dark fs-3 fw-bold"
            style={{ lineHeight: "1", textDecoration: "none" }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <Modal.Body className="px-4 pb-4 pt-0">
          <div className="d-flex flex-column align-items-center text-center">
            {/* Image Placeholder */}
            <div
              style={{
                backgroundColor: "#D9D9D9",
                width: "180px",
                height: "180px",
                borderRadius: "43px",
              }}
              className="mb-3"
            ></div>

            {/* Title and Price */}
            <h4 className="fw-bold mb-2">Cleaning and Coating</h4>
            <p className="mb-4">Start at Rs xxx</p>

            {/* ADD Button */}
            <button
              className="btn btn-dark px-4 py-2 rounded-pill fw-bold"
              onClick={handleCloseModal}
            >
              ADD
            </button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default TwoWheelerPopUp;
