import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const PartnerLocation = () => {
  return (
    <div className="m-0 rounded border m-2">
      <div style={{ display: 'flex', height: '100vh', borderRadius: '20px' }}>
        {/* Sidebar */}
        <div style={{
          width: '250px',
          backgroundColor: '#F5F5F5',
          borderRight: '1px solid #ccc',
          padding: '20px 10px'
        }}>
          <div className="mx-0 mb-4">
            <img src="duzo_logo.png" width="150px" alt="Logo" />
          </div>
          <ListGroup variant="flush" className='m-2'>
        <Link style={{textDecoration:"none"}} to={"/dashboard"}><ListGroup.Item>Dashboard</ListGroup.Item></Link>
                  <ListGroup.Item>Partner Management</ListGroup.Item>
                  <Link style={{textDecoration:"none"}} to={"/service"}><ListGroup.Item>Service Management</ListGroup.Item></Link>
                  <Link style={{textDecoration:"none"}} to={"/order"}><ListGroup.Item>Order Management</ListGroup.Item></Link>
                  <Link style={{textDecoration:"none"}} to={"/CustomerSupport"}><ListGroup.Item>Customer Support</ListGroup.Item></Link>
                  <Link style={{textDecoration:"none"}} to={"/analytics"}><ListGroup.Item>Analytics and Insights</ListGroup.Item></Link>
                </ListGroup>
        </div>

        {/* Main Content */}
        <div style={{
          backgroundColor: '#FFB980',
          padding: '30px',
          flex: 1,
          overflowY: 'auto'
        }}>
          <h3 className="fw-bold">Partner Management</h3>

          {/* Tabs */}
          <div style={{ marginTop: '15px', marginBottom: '20px' }}>
          <Link to={"/partner"}><span style={{  textDecoration: 'underline', marginRight: '20px',color:"black"  }}>Partner Table</span></Link>
                    <span style={{fontWeight: 'bold', marginRight: '20px',textDecoration: 'underline',color:"black" }}>Location</span>
                    <Link to={"/partnerpayment"}><span style={{ marginRight: '20px',textDecoration: 'underline',color:"black" }}>Payments</span></Link>
                    <Link to={"/partnernotifications"}><span style={{ marginRight: '20px',textDecoration: 'underline',color:"black" }}>Notifications</span></Link>
                  </div>

          {/* Dropdown */}
          <div className="mt-4 mb-3">
            <Form.Select style={{ width: '200px', borderRadius: '10px' }}>
              <option>Select Location</option>
              <option>New York</option>
              <option>Delhi</option>
              <option>London</option>
            </Form.Select>
          </div>

          {/* Map Placeholder */}
          <div style={{
            backgroundColor: '#EFEFEF',
            height: '250px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '24px',
            marginBottom: '20px'
          }}>
            Map
          </div>

          {/* Partner Info Table */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '15px',
            borderRadius: '10px',
            fontWeight: '500'
          }}>
            <Row className="fw-bold mb-2">
              <Col>Partner Name</Col>
              <Col>Address he/she is working at in that location</Col>
            </Row>
            {/* Sample Rows */}
            {/* {[1, 2].map((item, index) => (
              <Row key={index} className="mb-2">
                <Col>John Doe</Col>
                <Col>123 Main Street, Area XYZ</Col>
              </Row>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLocation;
