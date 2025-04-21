import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const ApplianceModal = ({ show = true, onHide = () => window.history.back(), initialCategory = null }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOptionsModal, setShowOptionsModal] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedOption, setSelectedOption] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Check if we're coming from the appliance page with a category selection
  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
      setShowOptionsModal(false);
    } else if (initialCategory) {
      setSelectedCategory(initialCategory);
      setShowOptionsModal(false);
    }
  }, [location.state, initialCategory]);

  const handleCategorySelect = (category) => {
    // Instead of showing options, navigate directly to appliance page
    onHide(); // Close the modal
    navigate('/appliance', { state: { selectedCategory: category } });
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (termsAccepted && selectedOption) {
      console.log("Terms accepted, continuing with:", selectedCategory, selectedOption);
      
      // Close the modal
      onHide();
      
      // Navigate based on selected option
      if (selectedOption === "AC Repair") {
        navigate("/acrepair");
      } else if (selectedOption === "TV Repair") {
        navigate("/tvrepair");
      } else if (selectedOption === "Fan Repair") {
        navigate("/fanrepair");
      } else if (selectedOption === "Washing machine Repair") {
        navigate("/washing");
      } else if (selectedOption === "Geyser Repair") {
        navigate("/geyser");
      } else if (selectedOption === "Inverter Repair") {
        navigate("/inverter");
      } else if (selectedOption === "Iron Repair") {
        navigate("/iron");
      } else if (selectedOption === "Laptops and Mobile Repair") {
        navigate("/laptop");
      } else if (selectedOption === "Chimney Repair") {
        navigate("/chimney");
      } else if (selectedOption === "Water-Purifier Repair") {
        navigate("/water");
      } else if (selectedOption === "Gas Stove Repair") {
        navigate("/gas");
      } else if (selectedOption === "Induction Repair") {
        navigate("/induction");
      } else if (selectedOption === "Refrigerator Repair") {
        navigate("/fridge");
      } else if (selectedOption === "Mixer Repair") {
        navigate("/mixer");
      } else if (selectedOption === "Microwave Repair") {
        navigate("/oven");
      } else if (selectedOption === "Dishwasher Repair") {
        navigate("/dishwasher");
      } else {
        // Default fallback
        navigate("/appliance");
      }
    }
  };

  const handleBack = () => {
    if (!showOptionsModal) {
      setShowOptionsModal(true); // Go back to options
    } else {
      onHide(); // Close the modal if already on options screen
    }
  };

  // Function to handle "Back to Home" button click - Updated to go back instead of navigating to home
  const handleBackToHome = () => {
    // Simply close the modal and let the onHide function handle the navigation
    // This will use window.history.back() as defined in the default onHide prop
    onHide();
  };

  const homeOptions = [
    "AC Repair",
    "Geyser Repair",
    "TV Repair",
    "Inverter Repair",
    "Fan Repair",
    "Iron Repair",
    "Washing machine Repair",
    "Laptops and Mobile Repair"
  ];

  const kitchenOptions = [
    "Chimney Repair",
    "Refrigerator Repair",
    "Water-Purifier Repair",
    "Mixer Repair",
    "Gas Stove Repair",
    "Microwave Repair",
    "Induction Repair",
    "Dishwasher Repair"
  ];

  // Image paths for repair options
  const repairImages = {
    "AC Repair": "/air-conditioner.png",
    "Geyser Repair": "/water-boiler.png",
    "TV Repair": "/television.png",
    "Inverter Repair": "/battery.png",
    "Fan Repair": "/fan.png",
    "Iron Repair": "/iron.png",
    "Washing machine Repair": "/washing-machine.png",
    "Laptops and Mobile Repair": "/phone-tablet-and-laptop.png",
    "Chimney Repair": "/chemny.png",
    "Refrigerator Repair": "/fridge.png",
    "Water-Purifier Repair": "/appliance.png",
    "Mixer Repair": "/mixer-blender.png",
    "Gas Stove Repair": "/stove.png",
    "Microwave Repair": "/oven.png",
    "Induction Repair": "/induction-stove.png",
    "Dishwasher Repair": "/dishwasher.png"
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="p-0 border-0 bg-transparent"
      dialogClassName="modal-dialog-no-white"
      backdrop="static"
      keyboard={false}
    >
      <div className="rounded-4 overflow-hidden">
        {showOptionsModal ? (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold">What Are You Looking For?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-4">
                {/* Home Option */}
                <div className="text-center" onClick={() => handleCategorySelect("Home")}>
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "161px",
                      height: "161px",
                      borderRadius: "19px",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      src="/living-room.png" // Replace with your actual image
                      alt="Home Repair"
                      width="120"
                      height="120"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Home</p>
                </div>
               
                {/* Kitchen Option */}
                <div className="text-center" onClick={() => handleCategorySelect("Kitchen")}>
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "161px",
                      height: "161px",
                      borderRadius: "19px",
                      backgroundColor: "#ffffff",
                      cursor: "pointer",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      src="/kitchen-table.png" // Replace with your actual image
                      alt="Kitchen Repair"
                      width="120"
                      height="120"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="fw-bold">Kitchen</p>
                </div>
              </div>
              
              {/* Back button - Updated to go back instead of navigating to home */}
              <div className="text-center mt-4">
                <Button variant="dark" className="px-4 rounded-pill" onClick={handleBackToHome}>
                  Back
                </Button>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold">{selectedCategory} Appliance Repair</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              <Row className="g-3">
                {(selectedCategory === "Home" ? homeOptions : kitchenOptions).map((option, index) => (
                  <Col xs={6} md={3} key={index}>
                    <div 
                      className={`text-center p-2 rounded-3 ${selectedOption === option ? 'bg-warning' : 'bg-white'}`}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <div 
                        className="mx-auto mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "10px",
                          backgroundColor: "#f8f9fa",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <img
                          src={repairImages[option] || "/default-repair.png"}
                          alt={option}
                          width="50"
                          height="50"
                          style={{ objectFit: "contain" }}
                          onError={(e) => {e.target.src = "/default-repair.png"}} // Fallback image
                        />
                      </div>
                      <p className="small mb-0 fw-medium">{option}</p>
                    </div>
                  </Col>
                ))}
              </Row>
              
              <Form.Check
                type="checkbox"
                id="termsCheck"
                label="I understand the service terms and conditions"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                className="mt-4 text-start"
              />
              
              <div className="text-center mt-3">
                <Button variant="secondary" className="me-2 rounded-pill" onClick={handleBack}>
                  Back
                </Button>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 justify-content-center py-2 py-md-3" style={{ backgroundColor: "#ffd5a4" }}>
              <Button
                variant="dark"
                className="px-4 px-md-5 py-2 rounded-pill"
                onClick={handleContinue}
                disabled={!termsAccepted || !selectedOption}
              >
                Continue
              </Button>
            </Modal.Footer>
          </>
        )}
      </div>

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
        
        .modal {
          z-index: 1050 !important;
        }
      `}
      </style>
    </Modal>
  );
};

export default ApplianceModal;
