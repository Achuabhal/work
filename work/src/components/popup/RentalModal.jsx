import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const RentalModal = ({ show = true, onHide = () => window.history.back() }) => {
  const navigate = useNavigate();
  const [showOptionsModal, setShowOptionsModal] = useState(true);
  const [showSubcategoriesModal, setShowSubcategoriesModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Define subcategories with images for each main category
  const subcategories = {
    "Rent Furniture": [
      { name: "Rent a Bed", image: "/bed.png" },
      { name: "Rent Bean Bag", image: "/bean-bag.png" },
      { name: "Rent Bedroom Storage", image: "/bedroom-storage.png" },
      { name: "Rent Dining Tables", image: "/dining-table.png" },
      { name: "Rent Tables and Chairs", image: "/tables-chairs.png" },
      { name: "Rent Sofas", image: "/sofa.png" }
    ],
    "Rent Appliances": [
      { name: "Rent a Washing Machine", image: "/washing-machine.png" },
      { name: "Rent a Water Purifier", image: "/water-purifier.png" },
      { name: "Rent a Refrigerator", image: "/refrigerator.png" },
      { name: "Rent a Air Cooler", image: "/air-cooler.png" }
    ]
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptionsModal(false);
    setShowSubcategoriesModal(true);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowSubcategoriesModal(false);
  };

  const handleContinue = () => {
    if (termsAccepted) {
      // Process the form submission or navigation
      console.log("Terms accepted, continuing...");
      onHide(); // Close the modal when done
      
      // Navigate based on selected option and subcategory after accepting terms
      const slug = selectedSubcategory.name.toLowerCase().replace(/\s+/g, '-');
      navigate(`/${slug}`);
    }
  };

  const handleBack = () => {
    if (!showSubcategoriesModal && !showOptionsModal) {
      setShowSubcategoriesModal(true); // Go back to subcategories
    } else if (showSubcategoriesModal) {
      setShowSubcategoriesModal(false);
      setShowOptionsModal(true); // Go back to main options
    } else {
      onHide(); // Close the modal if already on options screen
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="p-0 border-0 bg-transparent"
      dialogClassName="modal-dialog-no-white"
      backdrop="static" // Prevents closing when clicking outside
      keyboard={false} // Prevents closing with keyboard
    >
      <div className="rounded-4 overflow-hidden">
        {showOptionsModal ? (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold">What Are You Looking For?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-4">
                {/* Rent Furniture Option */}
                <div className="text-center" onClick={() => handleOptionSelect("Rent Furniture")}>
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "161px",
                      height: "161px",
                      borderRadius: "19px",
                      backgroundColor: "#ffd5a4",
                      cursor: "pointer",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src="/furniture.png"
                      alt="Rent Furniture"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "/furniture-placeholder.png";
                      }}
                    />
                  </div>
                  <p className="fw-bold">Rent Furniture</p>
                </div>
               
                {/* Rent Appliances Option */}
                <div className="text-center" onClick={() => handleOptionSelect("Rent Appliances")}>
                  <div
                    className="mx-auto mb-3"
                    style={{
                      width: "161px",
                      height: "161px",
                      borderRadius: "19px",
                      backgroundColor: "#ffd5a4",
                      cursor: "pointer",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src="/rent_appliance.png"
                      alt="Rent Appliances"
                      width="161"
                      height="161"
                      style={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "/appliances-placeholder.png";
                      }}
                    />
                  </div>
                  <p className="fw-bold">Rent Appliances</p>
                </div>
              </div>
              
              {/* Back button */}
              <div className="text-center mt-4">
                <Button variant="dark" className="px-4 rounded-pill" onClick={onHide}>
                  Back to Home
                </Button>
              </div>
            </Modal.Body>
          </>
        ) : showSubcategoriesModal ? (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold">{selectedOption} Options</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {subcategories[selectedOption].map((subcategory, index) => (
                  <div 
                    key={index} 
                    className="text-center p-2 rounded-3" 
                    style={{ 
                      backgroundColor: "#ffffff", 
                      cursor: "pointer",
                      width: "calc(50% - 1rem)",
                      minWidth: "150px"
                    }}
                    onClick={() => handleSubcategorySelect(subcategory)}
                  >
                    {/* Image for subcategory */}
                    <div
                      className="mx-auto mb-2"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "10px",
                        backgroundColor: "#f8f9fa",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        width="80"
                        height="80"
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.src = `/default-${selectedOption.toLowerCase().replace(/\s+/g, '-')}.png`;
                        }}
                      />
                    </div>
                    <p className="fw-bold mb-0">{subcategory.name}</p>
                  </div>
                ))}
              </div>
              
              {/* Back button */}
              <div className="text-center mt-4">
                <Button variant="dark" className="px-4 rounded-pill" onClick={handleBack}>
                  Back
                </Button>
              </div>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
              <Modal.Title className="fw-bold">{selectedSubcategory.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
              {selectedOption === "Rent Furniture" ? (
                <>
                  <div className="mb-3 mb-md-4">
                    <ul className="text-start fs-6 fs-md-5">
                      <li className="mb-2">Wide range of {selectedSubcategory.name.toLowerCase()} options</li>
                      <li className="mb-2">Flexible rental periods (1-24 months)</li>
                      <li className="mb-2">Free delivery and installation</li>
                      <li className="mb-2">Maintenance and repair included</li>
                      <li className="mb-2">Easy returns and exchanges</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3 mb-md-4">
                    <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                      <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
                    </div>
                    <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                      <ul className="text-start fs-6 fs-md-5">
                        <li className="mb-2">No customization of rental furniture</li>
                        <li className="mb-2">No purchase option for rental items</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3 mb-md-4">
                    <ul className="text-start fs-6 fs-md-5">
                      <li className="mb-2">Premium quality {selectedSubcategory.name.toLowerCase()}</li>
                      <li className="mb-2">Installation and demo included</li>
                      <li className="mb-2">Regular maintenance service</li>
                      <li className="mb-2">Replacement guarantee</li>
                      <li className="mb-2">Energy-efficient options</li>
                    </ul>
                  </div>
                  
                  <div className="mb-3 mb-md-4">
                    <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                      <h5 className="fw-bold p-1 p-md-2 mb-0">Services we do not provide</h5>
                    </div>
                    <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                      <ul className="text-start fs-6 fs-md-5">
                        <li className="mb-2">No commercial use allowed</li>
                        <li className="mb-2">No international voltage appliances</li>
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
              
              {/* Back button for the details screen */}
              <div className="text-center mt-3">
                <Button variant="outline-dark" className="px-3 rounded-pill" onClick={handleBack}>
                  Back
                </Button>
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
      `}
      </style>
    </Modal>
  );
};

export default RentalModal;
