import React, { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopupBox = () => {
  const [show, setShow] = useState(true);
  const [price] = useState(299); // You can change this price as needed

  const handleClose = () => setShow(false);
  const handleAdd = () => {
    // Add your logic for the add button here
    alert('Item added!');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body style={{ backgroundColor: '#FFD5A4', padding: '20px', borderRadius: '8px' }}>
      <CloseButton 
          onClick={handleClose}
          style={{
            position: 'absolute',
            right: '10px',
            top: '10px'
          }}
        /> 
        <div className="d-flex align-items-center p-md-5" style={{ fontFamily: 'Outfit'}}>
          <img 
            src="/person.png" // Replace with your actual image
            alt="Sweeping service"
            style={{ marginRight: '20px' }}
            width="100"
            height="100"
          />
          
          <div>
            <h3 className='mb-2 fw-bold text-dark'>Sweeping</h3>
            <p className='mb-4'>Starts at Rs {price}</p>
            <Button className='primary p-2 col-8 rounded-5' 
              onClick={handleAdd}
              style={{
                backgroundColor: 'black',
                borderColor: 'black',
              }}
            >
              Add
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopupBox;