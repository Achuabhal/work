import React from "react";
import { Modal, Button } from "react-bootstrap";

const FourWHeelerpopup = ({ show, onHide, service }) => {
  if (!service) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="responsive-modal-dialog"
      contentClassName="responsive-modal-content"
    >
      <Modal.Body
        className="text-center p-3"
        style={{
          backgroundColor: "#FFD5A4",
          borderRadius: "8px",
        }}
      >
        <div className="d-flex justify-content-end">
          <Button
            variant="link"
            onClick={onHide}
            style={{
              fontSize: "1.5rem",
              color: "black",
              textDecoration: "none",
              position: "absolute",
              top: "10px",
              right: "15px",
            }}
          >
            &times;
          </Button>
        </div>

        <div>
          <img
            src={service.image}
            alt="service"
            width="120"
            className="mb-3"
            style={{ maxWidth: "100%" }}
          />
          <h4 className="fw-bold">{service.title}</h4>
          <p>Start at Rs xxx</p>
          <Button
            style={{
              backgroundColor: "black",
              border: "none",
              borderRadius: "30px",
              padding: "8px 25px",
              fontWeight: "bold",
            }}
          >
            ADD
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FourWHeelerpopup;
