import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Analytics = () => {
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
          <ListGroup.Item >Analytics and Insights</ListGroup.Item>
        </ListGroup>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: '#FFB980', padding: '70px', overflowY: 'auto' }}>
        
        {/* Header */}
        <h4 style={{ fontWeight: 'bold' }}>Analytics and Insights</h4>
        <hr style={{ borderTop: '1px solid black' }} />

        {/* Stat Cards */}
        <div className="d-flex justify-content-start align-items-end gap-3 mb-4 mt-5">
  {['Total Locations', 'Active Locations', 'Inactive Locations'].map((label, index) => (
    <Card key={index} style={{ width: '250px', height: '200px', borderRadius: '12px' }}>
      <Card.Body 
        className="d-flex justify-content-center align-items-end" 
        style={{ height: '100%' }}
      >
        <strong>{label}</strong>
      </Card.Body>
    </Card>
  ))}
</div>


        {/* Most Searched Section */}
        <div>
          <strong>Most Searched Other Locations</strong>
          <ul style={{ marginTop: '10px' }}>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Analytics;
