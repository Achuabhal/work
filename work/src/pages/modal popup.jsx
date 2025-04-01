import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Assuming you have a ModalContent component or will create one
const ModalContent = ({ Component }) => {
  return <div className="modal-content-wrapper">{Component}</div>;
};

const ChefCookPopupModal = ({ showOptionsModal, setShowOptionsModal, handleOptionSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleContinue = () => {
    if (termsAccepted) {
      // Close the modal
      setShowModal(false);
      // Process the form submission or navigation
      console.log("Terms accepted, continuing...");
    }
  };

  return (
    <>
      {/* Options Modal */}
      <Modal
        show={showOptionsModal}
        onHide={() => setShowOptionsModal(false)}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
            <Modal.Title className="fw-bold">What Are You Looking For??</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-4">
              {/* Chef for Party Option */}
              <div className="text-center" onClick={() => handleOptionSelect("Chef for Party")}>
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "161px",
                    height: "161px",
                    borderRadius: "19px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src="/baker.png"
                    alt="Chef for Party"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Chef for Party</p>
              </div>
             
              {/* Cook for One Meal Option */}
              <div className="text-center" onClick={() => handleOptionSelect("Cook for One Meal")}>
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "161px",
                    height: "161px",
                    borderRadius: "19px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src="/cook.png"
                    alt="Cook for One Meal"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Cook for One Meal</p>
              </div>
             
              {/* Cook for a Month Option */}
              <div className="text-center" onClick={() => handleOptionSelect("Cook for a Month")}>
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "161px",
                    height: "161px",
                    borderRadius: "19px",
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src="/chef-.png"
                    alt="Cook for a Month"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Cook for a Month</p>
              </div>
            </div>
            
            {/* Link to Home Page */}
            <div className="text-center mt-4">
              <Link to="/home" className="btn btn-dark px-4 rounded-pill">Back to Home</Link>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
            <Modal.Title className="fw-bold">Chef For Party</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
            <div className="mb-3 mb-md-4">
              <ul className="text-start fs-6 fs-md-5">
                <li className="mb-2">Customizable menu.</li>
                <li className="mb-2">Ingredients list will be shared in advance.</li>
                <li className="mb-2">Get dedicated party manager.</li>
                <li className="mb-2">Maintain stove and slab cleanliness.</li>
              </ul>
            </div>
            
            <div className="mb-3 mb-md-4">
              <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
              </div>
              <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                <ul className="text-start fs-6 fs-md-5">
                  <li className="mb-2">No utensil cleaning.</li>
                  <li className="mb-2">Chef does not bring any ingredients.</li>
                </ul>
              </div>
            </div>
            
            <Form.Check
              type="checkbox"
              id="termsCheck"
              label="I have read the above conditions carefully"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="mt-3 mt-md-4 text-start"
            />
            
            {/* Link to Home Page */}
            <div className="text-center mt-3">
              <Link to="/" className="btn btn-outline-dark px-4 rounded-pill">Back to Home</Link>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 justify-content-center py-2 py-md-3" style={{ backgroundColor: "#ffd5a4" }}>
            <Button
              variant="dark"
              className="px-4 px-md-5 py-2 rounded-pill"
              onClick={handleContinue}
              disabled={!termsAccepted}
            >
              Continue
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* We still need some minimal custom CSS that Bootstrap doesn't provide */}
      <style>
      {`
        .modal-dialog-no-white .modal-content {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
        
        .modal-backdrop {
          opacity: 0.7 !important;
        }
      `}
      </style>
    </>
  );
};

export default ChefCookPopupModal;
