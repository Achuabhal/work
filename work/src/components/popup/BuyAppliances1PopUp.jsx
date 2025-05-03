import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

function BuyAppliances1PopUp({ show, onHide }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onHide();
    if (option === "Buy Furniture") {
      setShowSecondModal(true);
    } else if (option === "Buy Appliances") {
      setShowThirdModal(true);
    }
  };

  const handleCloseModal = () => {
    onHide();
    setShowSecondModal(false);
    setShowThirdModal(false);
  };

  return (
    <div>
      {/* First Modal */}
      <Modal
        show={show}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
            <Modal.Title className="fw-bold w-100 text-center">What Are You Looking For?</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <div className="text-center" onClick={() => handleOptionSelect("Buy Furniture")} style={{ cursor: "pointer" }}>
                <div className="mx-auto mb-3" style={{ width: 161, height: 161, borderRadius: 19, backgroundColor: "#D9D9D9", overflow: "hidden" }}>
                </div>
                <p className="fw-bold">Buy Furniture</p>
              </div>

              <div className="text-center" onClick={() => handleOptionSelect("Buy Appliances")} style={{ cursor: "pointer" }}>
                <div className="mx-auto mb-3" style={{ width: 161, height: 161, borderRadius: 19, backgroundColor: "#D9D9D9", overflow: "hidden" }}>
                </div>
                <p className="fw-bold">Buy Appliances</p>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* Furniture Modal */}
      <Modal
        show={showSecondModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
            <Modal.Title className="fw-bold w-100 text-center">Buy Furniture</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-3" style={{ backgroundColor: "#ffd5a4", height: "500px" }}>
          <div className="d-flex flex-wrap justify-content-center gap-4">
  {[
    { label: "Buy a Bed", to: "/buy-fridge", },
    { label: "Buy Bedroom Storage", to: "/buy-fridge",  },
    { label: "Buy Tables and Chairs", to: "/buy-fridge", },


    { label: "Buy Bean Bag", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Dining Tables", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Sofas", to: "/buy-fridge", img: "/fridge.png" },

    // ... other items
  ].map((item, idx) => (
    <div
      key={idx}
      className="text-center"
      onClick={handleCloseModal}
      style={{
        cursor: "pointer",
        flex: "0 0 30%",
        maxWidth: "30%"
      }}
    >
      <Link className="text-decoration-none text-dark" to={item.to}>
        <div
          className="mx-auto mb-3"
          style={{
            width: 161,
            height: 161,
            borderRadius: 19,
            backgroundColor: "#D9D9D9",
            overflow: "hidden"
          }}
        >
        
        </div>
        <p className="fw-bold">{item.label}</p>
      </Link>
    </div>
  ))}
</div>

          </Modal.Body>
        </div>
      </Modal>

      {/* Appliances Modal */}
      <Modal
        show={showThirdModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
            <Modal.Title className="fw-bold w-100 text-center">Buy Appliances</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-3" style={{ backgroundColor: "#ffd5a4", height: "500px" }}>
          <div className="d-flex flex-wrap justify-content-center gap-4">
  {[
    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },


    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },
    { label: "Buy Refrigerator", to: "/buy-fridge", img: "/fridge.png" },

    // ... other items
  ].map((item, idx) => (
    <div
      key={idx}
      className="text-center"
      onClick={handleCloseModal}
      style={{
        cursor: "pointer",
        flex: "0 0 30%",
        maxWidth: "30%"
      }}
    >
      <Link className="text-decoration-none text-dark" to={item.to}>
        <div
          className="mx-auto mb-3"
          style={{
            width: 161,
            height: 161,
            borderRadius: 19,
            backgroundColor: "#D9D9D9",
            overflow: "hidden"
          }}
        >
          
        </div>
        <p className="fw-bold">{item.label}</p>
      </Link>
    </div>
  ))}
</div>

          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default BuyAppliances1PopUp;
