import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBolt, FaWrench, FaTools } from "react-icons/fa";

const ServiceModal = ({ show = true, onHide = () => window.history.back(), serviceType = "Electrician" }) => {
  const navigate = useNavigate();
  const [showOptionsModal, setShowOptionsModal] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Service type icons and pricing
  const serviceDetails = {
    Electrician: {
      icon: <FaBolt size={24} />,
      price: "xxx",
      options: [
        { title: "Electrical ", image: "/electrician-repair.png" },
      ]
    },
    Plumber: {
      icon: <FaWrench size={24} />,
      price: "xxx",
      options: [
        { title: "Plumber", image: "/plumber-pipe.png" },
        
      ]
    },
    Carpenter: {
      icon: <FaTools size={24} />,
      price: "xxx",
      options: [
        { title: "Carpenter", image: "/carpenter-furniture.png" },
        
      ]
    }
  };

  const currentService = serviceDetails[serviceType] || serviceDetails.Electrician;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptionsModal(false);
  };

  const handleContinue = () => {
    if (termsAccepted) {
      // Process the form submission or navigation
      console.log("Terms accepted, continuing with", selectedOption);
      onHide(); // Close the modal when done
      
      // Navigate based on selected option after accepting terms
      navigate(`/${serviceType.toLowerCase()}`, { state: { selectedService: selectedOption } });
    }
  };

  const handleBack = () => {
    if (!showOptionsModal) {
      setShowOptionsModal(true); // Go back to options
    } else {
      onHide(); // Close the modal if already on options screen
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="md"
      contentClassName="p-0 border-0 bg-transparent"
      dialogClassName="modal-dialog-no-white responsive-modal"
      backdrop="static"
      keyboard={false}
    >
      <div className="rounded-4 overflow-hidden">
        {showOptionsModal ? (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold d-flex align-items-center">
                <span className="me-2">{currentService.icon}</span>
                {serviceType} Services
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              <div className="d-flex flex-column gap-3 gap-md-4">
                {currentService.options.map((option, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-center rounded-4 p-2 p-md-3 cursor-pointer"
                    style={{ cursor: 'pointer', backgroundColor: '#ffd5a4' }}
                    onClick={() => handleOptionSelect(option.title)}
                  >
                    {/* Image on the left - Responsive sizing */}
                    <div
                      className="me-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        maxWidth: "25%",
                        borderRadius: "10px",
                        overflow: "hidden",
                        flexShrink: 0
                      }}
                    >
                      <img
                        src={option.image}
                        alt={option.title}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.src = `/${serviceType.toLowerCase()}.png`;
                        }}
                      />
                    </div>
                    
                    {/* Text and button on the right */}
                    <div className="d-flex flex-column flex-grow-1">
                      <h6 className="fw-bold mb-1">{option.title}</h6>
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div>
                          <h6 className="text-bold mb-0 mb-md-1">Starts at</h6>
                          <span className="fw-bold ms-1">{currentService.price}</span>
                        </div>
                        <Button
                          variant="warning"
                          size="sm"
                          className="rounded-pill px-2 py-1 mt-2 mt-md-0"
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <Button variant="dark" className="px-3 rounded-pill" onClick={onHide}>
                  Back to Home
                </Button>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold d-flex align-items-center">
                <span className="me-2">{currentService.icon}</span>
                {selectedOption}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              {serviceType === "Electrician" ? (
                <>
                  <div className="mb-3 mb-md-4">
                    <ul className="text-start fs-6">
                      <li className="mb-2">Professional electrician services</li>
                      <li className="mb-2">Certified and experienced technicians</li>
                      <li className="mb-2">Safety-first approach</li>
                      <li className="mb-2">90-day service warranty</li>
                      <li className="mb-2">Transparent pricing</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3 mb-md-4">
                    <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                      <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
                    </div>
                    <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                      <ul className="text-start fs-6">
                        <li className="mb-2">No electrical materials provided</li>
                        <li className="mb-2">No high-voltage industrial work</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : serviceType === "Plumber" ? (
                <>
                  <div className="mb-3 mb-md-4">
                    <ul className="text-start fs-6">
                      <li className="mb-2">Expert plumbing solutions</li>
                      <li className="mb-2">Leak detection and repair</li>
                      <li className="mb-2">Fixture installation</li>
                      <li className="mb-2">60-day service guarantee</li>
                      <li className="mb-2">Upfront pricing</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3 mb-md-4">
                    <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                      <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
                    </div>
                    <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                      <ul className="text-start fs-6">
                        <li className="mb-2">No plumbing materials included</li>
                        <li className="mb-2">No sewage line replacement</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3 mb-md-4">
                    <ul className="text-start fs-6">
                      <li className="mb-2">Skilled carpentry services</li>
                      <li className="mb-2">Furniture assembly and repair</li>
                      <li className="mb-2">Door and window work</li>
                      <li className="mb-2">30-day workmanship guarantee</li>
                      <li className="mb-2">Clear pricing structure</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3 mb-md-4">
                    <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                      <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
                    </div>
                    <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                      <ul className="text-start fs-6">
                        <li className="mb-2">No materials or wood provided</li>
                        <li className="mb-2">No custom furniture manufacturing</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
              <Form.Check
                type="checkbox"
                id="termsCheck"
                label="I have read the above conditions carefully"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mt-3 mt-md-4 text-start"
              />
              
              <div className="d-flex justify-content-between align-items-center flex-wrap mt-3 gap-2">
                <Button
                  variant="outline-dark"
                  className="px-3 rounded-pill order-2 order-md-1"
                  onClick={handleBack}
                >
                  Back
                </Button>
                
                <div className="d-flex align-items-center gap-2 order-1 order-md-2">
                  <div className="text-end">
                    <p className="mb-0 fw-bold">Starts at</p>
                    <h4 className="text-primary mb-0">{currentService.price}</h4>
                  </div>
                  <Button
                    variant="warning"
                    className="px-4 rounded-pill"
                    onClick={handleContinue}
                    disabled={!termsAccepted}
                  >
                    ADD
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </>
        )}
      </div>

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
          z-index: 1040 !important;
        }
        
        /* Ensure modal appears above everything */
        .modal {
          z-index: 1050 !important;
        }
        
        /* Responsive modal width */
        .responsive-modal {
          width: 95% !important;
          max-width: 500px !important;
          margin: 1.75rem auto;
        }
        
        /* Make option cards transparent */
        .modal-body .bg-white {
          background-color: transparent !important;
        }
        
        /* Responsive font sizes */
        @media (max-width: 576px) {
          .modal-title {
            font-size: 1.1rem;
          }
          h5 {
            font-size: 1rem;
          }
          h6, .fs-6 {
            font-size: 0.9rem;
          }
          .btn {
            font-size: 0.85rem;
          }
        }
      `}
      </style>
    </Modal>
  );
};

export default ServiceModal;
