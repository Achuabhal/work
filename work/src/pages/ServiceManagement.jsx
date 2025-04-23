import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const ServiceManagement = () => {
  return (
    <div className="m-0  rounded border m-2" >

    <div style={{ display: 'flex', height: '100vh' }}>
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
        <Link style={{textDecoration:"none"}} to={"/dashboard"}><ListGroup.Item>Dashboard</ListGroup.Item></Link>
        <Link style={{textDecoration:"none"}} to={"/partner"}><ListGroup.Item>Partner Management</ListGroup.Item></Link>
                  <ListGroup.Item>Service Management</ListGroup.Item>
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
        <h3 style={{ fontWeight: 'bold' }}>Service Management</h3>
        <hr style={{ border: '1px solid black', marginTop: 0, marginBottom: '20px' }} />

        {/* Tabs */}
        

        {/* Search Input */}
        <Form.Group className="mb-4" controlId="search">
          <Form.Control type="text" placeholder="Search" style={{
            maxWidth: '300px',borderRadius:"20px"
          }} />
        </Form.Group>
<span className='d-flex justify-content-start mb-5'>+ Add Categeory</span>
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
              <Col xs={2}><strong>Category</strong></Col>
              <Col xs={2}>Pricing</Col>
              <Col xs={8} className="d-flex justify-content-end gap-2">
              <a variant="outline-dark text-dark" href="#">Update</a>
            

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

export default ServiceManagement;
