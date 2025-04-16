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
      // Don't reset selectedOption here!
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
    let timeout;
    if (selectedOption && !show) {
      timeout = setTimeout(() => {
        if (selectedOption === "Option A") {
          setShowFirstSubModal(true);
        } else if (selectedOption === "Option B") {
          setShowSecondSubModal(true);
        }
        setSelectedOption(null); // ✅ Reset only after using it
      }, 300);
    }
  
    return () => clearTimeout(timeout);
  }, [selectedOption, show]);
  
  

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
        <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#e0f7fa" }}>
          <Modal.Title className="fw-bold w-100 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#e0f7fa" }}>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {services.map(({ name, path }, index) => (
              <Link
                key={index}
                to={path}
                className="text-decoration-none text-dark"
                onClick={handleClose}
              >
                <div className="text-center">
                  <div
                    className="mx-auto mb-2"
                    style={{
                      width: "161px",
                      height: "161px",
                      backgroundColor: "#ffffff",
                      borderRadius: "19px",
                    }}
                  />
                  <p className="fw-bold">{name}</p>
                </div>
              </Link>
            ))}
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
                    backgroundColor: "#ffffff",
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
                    backgroundColor: "#ffffff",
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
          { name: "A1 Service", path: "/optionA1" },
          { name: "A2 Service", path: "/optionA2" },
          { name: "A3 Service", path: "/optionA3" },
          { name: "A4 Service", path: "/optionA4" },
          { name: "A5 Service", path: "/optionA5" },
          { name: "A6 Service", path: "/optionA6" },
        ]}
      />

      <SubModal
        show={showSecondSubModal}
        handleClose={handleCloseAll}
        title="Option B Services"
        services={[
          { name: "B1 Service", path: "/optionB1" },
          { name: "B2 Service", path: "/optionB2" },
          { name: "B3 Service", path: "/optionB3" },
          { name: "B4 Service", path: "/optionB4" },
          { name: "B5 Service", path: "/optionB5" },
          { name: "B6 Service", path: "/optionB6" },
        ]}
      />
    </>
  );
}

export default BuyAppliances;
