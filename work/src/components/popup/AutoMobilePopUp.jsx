import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function AutoMobilePopUp({ show, onHide }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onHide();
    // You can trigger other modals here if needed
  };

  const handleCloseModal = () => {
    onHide();
  };

  return (
    <div>
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
          ></Modal.Header>
          <Modal.Body
            className="p-3 p-md-4"
            style={{ backgroundColor: "#ffd5a4" }}
          >
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4">
              
              {/* Four Wheeler Card */}
              <div
                className="d-flex flex-column align-items-center text-center"
                onClick={() => handleOptionSelect("Four Wheeler")}
                style={{ cursor: "pointer" }}
              >
                                <Link className="text-decoration-none text-dark" to="/fourwheeler">

                <div
                  className="d-flex align-items-center justify-content-between px-3"
                  style={{
                    width: "250px",
                    height: "130px",
                    borderRadius: "19px",
                    backgroundColor:"#FFB864",
                  }}
                >
                  <p className="fw-bold mb-0">
                    <span>Four</span>
                    <br />
                    <span>Wheeler</span>
                  </p>
                  <img
                    src="/car.png"
                    alt="Four Wheeler"
                    width="100"
                    height="100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                </Link>
              </div>

              {/* Two Wheeler Card */}
              <div
                className="d-flex flex-column align-items-center"
                onClick={() => handleOptionSelect("Two Wheeler")}
                style={{ cursor: "pointer" }}
              >

<Link className="text-decoration-none text-dark" to="/twowheeler">

                <div
                  className="d-flex align-items-center justify-content-between px-3"
                  style={{
                    width: "250px",
                    height: "130px",
                    borderRadius: "19px",
                    backgroundColor:"#FFB864",
                  }}
                >
                  <p className="fw-bold mb-0">
                    <span>Two</span>
                    <br />
                    <span>Wheeler</span>
                  </p>
                  <img
                    src="/scooty.png"
                    alt="Two Wheeler"
                    width="100"
                    height="100"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                </Link>
              </div>

            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default AutoMobilePopUp;
