import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaHourglassHalf } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ComingSoonModal = ({ show = true, onHide = () => window.history.back() }) => {
  const navigate = useNavigate();

  // Disable body scrolling when modal is open to prevent layout shifts
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="md"
      animation={false} // Disable Bootstrap's built-in animation
      contentClassName="p-0 border-0 bg-transparent"
      dialogClassName="modal-dialog-no-white responsive-modal no-animation"
      backdrop="static"
      keyboard={false}
    >
      <div className="rounded-4 overflow-hidden">
        <Modal.Header closeButton className="border-0" style={{ backgroundColor: "#ffd5a4" }}>
          <Modal.Title className="fw-bold d-flex align-items-center">
            <span className="me-2"><FaHourglassHalf size={24} /></span>
            Coming Soon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-3 p-md-4" style={{ backgroundColor: "#ffd5a4" }}>
          <div className="text-center mb-4">
            <img 
              src="/coming-soon.png" 
              alt="Coming Soon" 
              className="img-fluid mb-3" 
              style={{ 
                maxWidth: "50px",
                borderRadius: "10px",
                width: "150px",
                height: "auto"
              }}
              onError={(e) => {
                e.target.src = "/logo.png";
              }}
            />
            <h4 className="fw-bold mb-3">We're Working On Something Amazing!</h4>
            <p className="mb-4">
              This feature is currently under development and will be available soon. 
              We're working hard to bring you the best experience possible.
            </p>
            
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="p-2 rounded-4" style={{ backgroundColor: "#ffbc7f" }}>
                <h5 className="fw-bold p-1 p-md-2 mb-0">What to expect</h5>
              </div>
              <div className="p-2 p-md-3 pt-2" style={{ backgroundColor: "#ffd5a4" }}>
                <ul className="text-start fs-6">
                  <li className="mb-2">Enhanced user experience</li>
                  <li className="mb-2">New service options</li>
                  <li className="mb-2">Faster booking process</li>
                  <li className="mb-2">Special launch offers</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-4">
              <h6 className="mb-2">Want to be notified when we launch?</h6>
              <div className="d-flex gap-2 justify-content-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="form-control" 
                  style={{ maxWidth: "250px" }}
                />
                <Button variant="warning" className="px-3 rounded-pill">
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Button variant="dark" className="px-3 rounded-pill" onClick={onHide}>
              Back to Home
            </Button>
          </div>
        </Modal.Body>
      </div>

      {/* We still need some minimal custom CSS that Bootstrap doesn't provide */}
      <style>
      {`
        /* Completely disable all animations globally for this component */
        .modal-dialog-no-white,
        .modal-dialog-no-white *,
        .modal-content,
        .modal-backdrop {
          animation: none !important;
          -webkit-animation: none !important;
          transition: none !important;
          -webkit-transition: none !important;
          transform: none !important;
          -webkit-transform: none !important;
        }
        
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
        
        /* Fixed positioning to prevent layout shifts */
        .responsive-modal {
          width: 95% !important;
          max-width: 500px !important;
          margin: 0 auto !important;
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
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

export default ComingSoonModal;
