import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
<div className="m-2 rounded border">
<div  style={{ display: 'flex', height: '100vh'  }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#F5F5F5',
        borderRight: '1px solid #ccc',
        padding: '20px 10px'
      }}>
        <div className='mx-0'>
         <img src="duzo_logo.png" width="150px" alt="" />
        </div>
        <ListGroup variant="flush" className='m-2'>
          <ListGroup.Item>Dashboard</ListGroup.Item>
          <Link style={{textDecoration:"none"}} to={"/partner"}><ListGroup.Item>Partner Management</ListGroup.Item></Link>
          <Link style={{textDecoration:"none"}} to={"/service"}><ListGroup.Item>Service Management</ListGroup.Item></Link>
          <Link style={{textDecoration:"none"}} to={"/order"}><ListGroup.Item>Order Management</ListGroup.Item></Link>
          <Link style={{textDecoration:"none"}} to={"/CustomerSupport"}><ListGroup.Item>Customer Support</ListGroup.Item></Link>
          <Link style={{textDecoration:"none"}} to={"/analytics"}><ListGroup.Item>Analytics and Insights</ListGroup.Item></Link>
        </ListGroup>
      </div>

      {/* Main Content */}
      <div
  style={{
    flex: 1,
    backgroundColor: '#FFB980',
    padding: '20px',
    overflowY: 'scroll',
    scrollbarWidth: 'none',         // Firefox
    msOverflowStyle: 'none'         // IE & Edge
  }}
  className="hide-scrollbar"
>

        <h3 style={{ fontWeight: 'bold' }}>Dashboard</h3>
        <hr style={{ border: '1px solid black', marginTop: 0, marginBottom: '20px' }} />

        {/* Top Small Boxes */}
        <Row className="mb-4  p-4 rounded-4" style={{ justifyContent: 'space-between',marginLeft:"1px", backgroundColor:"#F4F4F4",width:"100%" }}>
          <Col style={{ maxWidth: '220px' }}>
            <Card style={{ height: '140px', borderRadius: '10px', backgroundColor: '#D9D9D9' }}>
              <Card.Body />
            </Card>
          </Col>
          <Col style={{ maxWidth: '220px' }}>
            <Card style={{ height: '140px', borderRadius: '10px', backgroundColor: '#D9D9D9' }}>
              <Card.Body />
            </Card>
          </Col>
          <Col style={{ maxWidth: '220px' }}>
            <Card style={{ height: '140px', borderRadius: '10px', backgroundColor: '#D9D9D9' }}>
              <Card.Body />
            </Card>
          </Col>
        </Row>

        {/* Charts Section */}
        <Row className="mb-4">
          <Col md={6}>
            <Card style={{ height: '280px', borderRadius: '10px' }}>
              <Card.Body className="d-flex align-items-center justify-content-center">
                Pie Chart
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '280px', borderRadius: '10px' }}>
              <Card.Body className="d-flex align-items-center justify-content-center">
                Revenue Chart
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Alerts Section */}
        <Card className="mb-2" style={{ borderRadius: '10px' }}>
          <Card.Body>Alerts</Card.Body>
        </Card>
        <Card style={{ borderRadius: '10px' }}>
          <Card.Body>Alerts</Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
