import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const PartnerManagement = () => {
  return (
    <div className="m-0  rounded border m-2" >

    <div style={{ display: 'flex', height: '100vh',borderRadius:"20px" }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#F5F5F5',
        borderRight: '1px solid #ccc',
        padding: '20px 10px',
      }}>
       <div className='mx-0'>
         <img src="duzo_logo.png" width="150px" alt="" />
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
      <div className="m-0" style={{
        backgroundColor: '#FFB980',
        padding: '30px',
        flex: 1,
        overflowY: 'auto'
      }}>
        {/* Title */}
        <h3 style={{ fontWeight: 'bold' }}>Partner Management</h3>
        <hr style={{ border: '1px solid black', marginTop: 0, marginBottom: '20px' }} />

        {/* Tabs */}
        <div style={{ marginTop: '15px', marginBottom: '20px' }}>
          <span style={{ fontWeight: 'bold', textDecoration: 'underline', marginRight: '20px' }}>Partner Table</span>
          <Link to={"/partnerLocation"}><span style={{ marginRight: '20px',textDecoration: 'underline',color:"black" }}>Location</span></Link>
          <Link to={"/partnerpayment"}><span style={{ marginRight: '20px',textDecoration: 'underline',color:"black" }}>Payments</span></Link>
          <Link to={"/partnernotifications"}><span style={{ marginRight: '20px',textDecoration: 'underline',color:"black" }}>Notifications</span></Link>
        </div>

        {/* Search Input */}
        <Form.Group className="mb-4" controlId="search">
          <Form.Control type="text" placeholder="Search" style={{
            borderRadius: '20px',
            maxWidth: '300px'
          }} />
        </Form.Group>

        {/* Table */}
        <div style={{width:"709px"}}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Row key={index} className="align-items-center mb-3 p-2"
              style={{
                backgroundColor: 'white',
                borderRadius: '1px',
                marginRight: '10px',
                marginLeft: '1px'
              }}>
              <Col xs={2}><strong>Name</strong></Col>
              <Col xs={2}>Role</Col>
              <Col xs={8} className="d-flex justify-content-end gap-2">
              <a variant="outline-dark text-dark" href="#">View</a>
              <a variant="outline-dark text-dark" href="#">Edit</a>
              <a variant="outline-dark text-dark" href="#">Verify</a>
              <a variant="outline-dark text-dark" href="#">Assign</a>

              </Col>
            </Row>
          ))}
          <div className="d-flex justify-content-center mt-3 bold">
          <span>1 to 5 &nbsp; &gt;</span>
        </div>
        </div>

        {/* Pagination */}
        
      </div>
    </div>
    </div>
  );
};

export default PartnerManagement;
