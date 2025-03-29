import React from 'react';
import { Modal } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Oops from '../path/to/Oops';

// Assuming you have a ModalContent component or will create one
const ModalContent = ({ Component }) => {
  return <div className="modal-content-wrapper">{Component}</div>;
};

const ChefCookPopupModal = ({ showOptionsModal, setShowOptionsModal, handleOptionSelect }) => {
  return (
    <>
      {/* Route definition - This should actually be in your router configuration file */}
       <Route path="/ooops" element={<ModalContent Component={<Oops />} />} /> 
      
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
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ChefCookPopupModal;
