import React from 'react';
import { Container, Row, Col, Card, ListGroup,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const PartnerNotifications = () => {
      return (
    <div className="m-2 rounded border">
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
          
          {/* Sidebar */}
          <div style={{ width: '250px', backgroundColor: '#F5F5F5', padding: '20px', borderRight: '1px solid #ccc' }}>
            <img src="duzo_logo.png" alt="DUZO Logo" width="150px" className="mb-4" />
            <ListGroup variant="flush" className='m-2'>
            <Link style={{textDecoration:"none"}} to={"/dashboard"}><ListGroup.Item>Dashboard</ListGroup.Item></Link>
              <Link style={{textDecoration:"none"}} to={"/partner"}><ListGroup.Item>Partner Management</ListGroup.Item></Link>
              <Link style={{textDecoration:"none"}} to={"/service"}><ListGroup.Item>Service Management</ListGroup.Item></Link>
              <Link style={{textDecoration:"none"}} to={"/order"}><ListGroup.Item>Order Management</ListGroup.Item></Link>
             <ListGroup.Item>Customer Support</ListGroup.Item>
              <Link style={{textDecoration:"none"}} to={"/analytics"}><ListGroup.Item>Analytics and Insights</ListGroup.Item></Link>
            </ListGroup>
          </div>
    
          {/* Main Content */}
          <div style={{ flex: 1, backgroundColor: '#FFB980', padding: '20px', overflowY: 'auto' }}>
           <h3 className="fw-bold">Partner Management</h3>
           
                     {/* Tabs */}
                     <div style={{ marginTop: '15px', marginBottom: '20px' }}>
                     <Link to="/partner"><span style={{ marginRight: '20px', textDecoration: 'underline',color:"black"  }}>Partner Table</span></Link>
                       <Link to="/partnerLocation">
                         <span style={{ marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Location</span>
                       </Link>
                       <Link to="/partnerpayment">
                         <span style={{  marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Payments</span>
                       </Link>
                       
                         <span style={{ fontWeight: 'bold',marginRight: '20px', textDecoration: 'underline', color: 'black' }}>Notifications</span>
                
                     </div>
            {/* Message Box */}
            <Card className="mb-4" style={{ height: '400px', borderRadius: '10px', backgroundColor: '#F4F4F4' }}>
              <Card.Body className="d-flex flex-column justify-content-start gap-4">
                
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
    
    
}

export default PartnerNotifications
