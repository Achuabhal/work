import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function BuyAppliances({ show, onHide }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFirstSubModal, setShowFirstSubModal] = useState(false);
  const [showSecondSubModal, setShowSecondSubModal] = useState(false);

  // Reset state when main modal is closed
  useEffect(() => {
    if (!show) {
      setSelectedOption(null); // Reset selectedOption only when the main modal is closed
      setShowFirstSubModal(false);
      setShowSecondSubModal(false);
    }
  }, [show]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onHide(); // Close the main modal first
  };

  // Open the corresponding submodal based on the selected option after main modal closes
  useEffect(() => {
    if (selectedOption) {
      if (selectedOption === "Option A") {
        setShowFirstSubModal(true);
      } else if (selectedOption === "Option B") {
        setShowSecondSubModal(true);
      }
      setSelectedOption(null); // Reset the selectedOption after opening the submodal
    }
  }, [selectedOption]); // Only trigger when selectedOption changes

  const handleCloseAll = () => {
    onHide();
    setShowFirstSubModal(false);
    setShowSecondSubModal(false);
  };

  const SubModal = ({ show, handleClose, title, services }) => (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="p-0 border-0 bg-transparent"
    >
      <div className="rounded-4 overflow-hidden">
        <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#FFD5A4" }}>
          <Modal.Title className="fw-bold w-100 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3 p-md-3" style={{ backgroundColor: "#FFD5A4" }}>
  <div className="container">
    <div className="row justify-content-start">
      {services.map(({ name, path }, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
          <Link
            to={path}
            className="text-decoration-none text-dark"
            onClick={handleClose}
          >
            <div className="text-center">
              <div
                className="mb-2"
                style={{
                  width: "161px",
                  height: "161px",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "19px",
                }}
              />
              <p className="fw-bold">{name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</Modal.Body>

      </div>
    </Modal>
  );

  return (
    <>
      {/* Main Modal */}
      <Modal
        show={show}
        onHide={handleCloseAll}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#FFD5A4" }}>
            <Modal.Title className="fw-bold w-100 text-center">Choose a Service</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#FFD5A4" }}>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => handleOptionSelect("Option A")}
              >
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "161px",
                    height: "161px",
                    borderRadius: "19px",
                    backgroundColor: "#FFD5A4",
                    overflow: "hidden",
                  }}
                >
                  <img src="/furniture.png" alt="Option A" width="161" height="161" style={{ objectFit: "cover" }} />
                </div>
                <p className="fw-bold">Rent Furniture</p>
              </div>

              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={() => handleOptionSelect("Option B")}
              >
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "161px",
                    height: "161px",
                    borderRadius: "19px",
                    backgroundColor: "#FFD5A4",
                    overflow: "hidden",
                  }}
                >
                  <img src="/rent_appliance.png" alt="Option B" width="161" height="161" style={{ objectFit: "cover" }} />
                </div>
                <p className="fw-bold">Rent Appliances</p>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* Sub Modals */}
      <SubModal
        show={showFirstSubModal}
        handleClose={handleCloseAll}
        title="Option A Services"
        services={[
          { name: "Rent a Bed", path: "/optionA1" },
          { name: "Rent Bedroom Storage", path: "/optionA2" },
          { name: "Rent Tables and Chairs", path: "/optionA3" },
          { name: "Rent Bean Bag", path: "/optionA4" },
          { name: "Rent Dining Tables", path: "/optionA5" },
          { name: "Rent Sofas", path: "/optionA6" },
        ]}
      />

      <SubModal
        show={showSecondSubModal}
        handleClose={handleCloseAll}
        title="Option B Services"
        services={[
          { name: "Rent a Refrigerator", path: "/optionB1" },
          { name: "Rent a Washing Machine", path: "/optionB2" },
          { name: "Rent a water purifier", path: "/optionB3" },
          { name: "Rent a Air Cooler", path: "/optionB4" },
          
        ]}
      />
    </>
  );
}

export default BuyAppliances;
