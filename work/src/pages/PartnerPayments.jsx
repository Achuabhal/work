import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const PartnerPayments = () => {
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
            <Link style={{ textDecoration: "none" }} to={"/dashboard"}><ListGroup.Item>Dashboard</ListGroup.Item></Link>
            <ListGroup.Item>Partner Management</ListGroup.Item>
            <Link style={{ textDecoration: "none" }} to={"/service"}><ListGroup.Item>Service Management</ListGroup.Item></Link>
            <Link style={{ textDecoration: "none" }} to={"/order"}><ListGroup.Item>Order Management</ListGroup.Item></Link>
            <Link style={{ textDecoration: "none" }} to={"/CustomerSupport"}><ListGroup.Item>Customer Support</ListGroup.Item></Link>
            <Link style={{ textDecoration: "none" }} to={"/analytics"}><ListGroup.Item>Analytics and Insights</ListGroup.Item></Link>
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
          <Link to="/partner"> <span style={{ marginRight: '20px', textDecoration: 'underline', color:'black' }}>Partner Table</span></Link>
            <Link to="/partnerLocation">
              <span style={{ marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Location</span>
            </Link>
            
              <span style={{ fontWeight: 'bold', marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Payments</span>

            <Link to="/partnerNotifications">
              <span style={{ marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Notifications</span>
            </Link>
          </div>

          {/* Payment Summary Cards */}
          <Row className="mb-4">
            <Col md={4}>
              <Card style={{height:"200px"}} className="text-center shadow-sm">
                <Card.Body className='d-flex justify-content-center align-items-end'>
                  <Card.Title>Total Commission</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{height:"200px"}} className="text-center shadow-sm">
              <Card.Body className='d-flex justify-content-center align-items-end'>
              <Card.Title>Pending Payments</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{height:"200px"}} className="text-center shadow-sm">
              <Card.Body className='d-flex justify-content-center align-items-end'>
              <Card.Title>Payment Done</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Partner Payment List */}
          <div style={{
            backgroundColor: '#FFB980',
            padding: '15px',
            borderRadius: '10px',
            fontWeight: '500',
            width:"700px",
          }}>
<div style={{ backgroundColor: '#FFB980', padding: '20px' }}>
  <div className="bg-white p-3 rounded mb-4 shadow-sm d-flex justify-content-between">
    <span><strong>Partner Name</strong></span>
    <span><strong>Pending Payments</strong></span>
  </div>

  <div className="bg-white p-3 rounded mb-4 shadow-sm d-flex justify-content-between">
    <span><strong>Partner Name</strong></span>
    <span><strong>Pending Payments</strong></span>
  </div>

  <div className="bg-white p-3 rounded shadow-sm d-flex justify-content-between">
    <span><strong>Partner Name</strong></span>
    <span><strong>Pending Payments</strong></span>
  </div>
</div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPayments;
