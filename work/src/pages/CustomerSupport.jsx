import React from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerSupport = () => {
  return (
<div className="m-2 rounded border">
<div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Sidebar */}
      <div style={{ width: '250px', backgroundColor: '#F5F5F5', padding: '20px', borderRight: '1px solid #ccc' }}>
        <img src="duzo_logo.png" alt="DUZO Logo" width="150px" className="mb-4" />
        <ListGroup variant="flush" className='mb-2'>
          <ListGroup.Item>Dashboard</ListGroup.Item>
          <ListGroup.Item>Partner Management</ListGroup.Item>
          <ListGroup.Item>Service Management</ListGroup.Item>
          <ListGroup.Item>Order Management</ListGroup.Item>
          <ListGroup.Item>Customer Support</ListGroup.Item>
          <ListGroup.Item>Analytics and Insights</ListGroup.Item>
        </ListGroup>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#FFB980', padding: '20px', overflowY: 'auto' }}>
        
        {/* Header */}
        <h4 style={{ fontWeight: 'bold' }}>Customer Support</h4>
        <hr style={{ borderTop: '1px solid black' }} />

        {/* Message Box */}
        <Card className="mb-4" style={{ height: '200px', borderRadius: '10px', backgroundColor: '#F4F4F4' }}>
          <Card.Body className="d-flex flex-column justify-content-center gap-4">
            
            {/* Their message */}
            <div className='d-flex align-items-center gap-3'>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#D9D9D9', borderRadius: '50%' }} />
              <span>their message</span>
            </div>

            {/* Your reply */}
            <div className='d-flex align-items-center gap-3'>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#D9D9D9', borderRadius: '50%' }} />
              <span>your reply</span>
            </div>
          </Card.Body>
        </Card>

        {/* List of queries */}
        {[1, 2].map((item, idx) => (
          <Card className="mb-2" style={{ borderRadius: '10px' }} key={idx}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <strong>From customer name</strong> &nbsp; <strong>Their query</strong>
              </div>
              <Button variant="light" style={{ backgroundColor: "#D9D9D9", borderRadius: "12px" }}>Reply</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CustomerSupport;
