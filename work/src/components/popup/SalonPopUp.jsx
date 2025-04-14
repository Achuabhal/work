// SalonPopUp.jsx
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SalonPopUp({ show, onHide }) {
  // ✅ State for selected option and modals
  const [selectedOption, setSelectedOption] = useState(null); // Stores Selected Option
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [showThirdModal, setShowThirdModal] = useState(false);

  // ✅ Handle Option Selection in First Modal
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onHide(); // Close First Modal

    // Show Modal Based on Option Selected
    if (option === "Chef for Party") {
      setShowSecondModal(true);
    } else if (option === "Cook for One Meal") {
      setShowThirdModal(true);
    }
  };

  // ✅ Close All Modals
  const handleCloseModal = () => {
    onHide(); // Hide Parent Modal
    setShowSecondModal(false);
    setShowThirdModal(false);
  };

  return (
    <div>
      {/* ✅ First Modal */}
      <Modal
        show={show}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header
            closeButton
            className="border-0"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <Modal.Title className="fw-bold w-100 text-center">
              What Are You Looking For??
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-3 p-md-4"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-4">
              {/* Salon and Spa for Women */}
              <div
                className="text-center"
                onClick={() => handleOptionSelect("Chef for Party")}
                style={{ cursor: "pointer" }}
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
                  <img
                    src="/spa.png"
                    alt="Salon and Spa for Women"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Salon and Spa for Women</p>
              </div>

              {/* Salon and Massage for Men */}
              <div
                className="text-center"
                onClick={() => handleOptionSelect("Cook for One Meal")}
                style={{ cursor: "pointer" }}
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
                  <img
                    src="/mensalon.png"
                    alt="Salon and Massage for Men"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Salon and Massage for Men</p>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* ✅ Second and Third Modals (No Changes Needed Here) */}
      <Modal
        show={showSecondModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header
            closeButton
            className="border-0"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <Modal.Title className="fw-bold w-100 text-center">
              Salon for women
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-3 p-md-4"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link className="text-decoration-none text-dark" to="/salon">
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
                    <img
                      src="/SalonWomen.png"
                      alt="Birthday Party"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold text-decoration-none">
                    Salon for Women
                  </p>
                </Link>
              </div>

              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link className="text-decoration-none text-dark" to="/spawomen">
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
                    <img
                      src="/spawomen.png"
                      alt="Wedding Party"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Spa for Women</p>
                </Link>
              </div>

              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link
                  className="text-decoration-none text-dark"
                  to="/hairstudio"
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
                    <img
                      src="/hairstudiowomen.png"
                      alt="Wedding Party"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Hair Studio for Women</p>
                </Link>
              </div>

              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link className="text-decoration-none text-dark" to="/makeup">
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
                    <img
                      src="/makeupwomen.png"
                      alt="Wedding Party"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Makeup and Styling</p>
                </Link>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/* ✅ Third Modal (Opens when 'Cook for One Meal' is clicked) */}
      <Modal
        show={showThirdModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        contentClassName="p-0 border-0 bg-transparent"
        dialogClassName="modal-dialog-no-white"
      >
        <div className="rounded-4 overflow-hidden">
          <Modal.Header
            closeButton
            className="border-0"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <Modal.Title className="fw-bold w-100 text-center">
              Salon and Massage for Men
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            className="p-3 p-md-4"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link className="text-decoration-none text-dark" to="/mensalon">
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
                    <img
                      src="/menbeard.png"
                      alt="Vegetarian Meal"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Salon for Men</p>
                </Link>
              </div>

              <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
              >
                <Link
                  className="text-decoration-none text-dark"
                  to="/menmassage"
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
                    <img
                      src="/menmassage.png"
                      alt="Non-Vegetarian Meal"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Massage for Men</p>
                </Link>
              </div>

              {/* <div
                className="text-center"
                style={{ cursor: "pointer" }}
                onClick={handleCloseModal}
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
                  <img
                    src="/menspa.png"
                    alt="Vegetarian Meal"
                    width="161"
                    height="161"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <p className="fw-bold">Spa for men</p>
              </div> */}
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default SalonPopUp;
