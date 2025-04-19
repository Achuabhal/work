import React, { useRef, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';

const LoginPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([]);

  const handleOtpChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d+$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Move focus to next input if a digit was entered
    if (value && index < 3) {
      otpInputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move focus to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1].focus();
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center min-vh-100 py-3" 
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <Container 
        className="p-3 p-md-4 rounded-4 shadow-sm mx-2" 
        style={{ 
          backgroundColor: '#FDCC82', 
          maxWidth: '400px'
        }}
      >
        <div className="d-flex flex-column mb-4 position-relative">
          <div className="position-absolute end-0">
            <X size={24} className="cursor-pointer" />
          </div>
          <h2 className="m-0 fw-bolder fs-4 text-center mt-5">CREATE YOUR ACCOUNT</h2>
        </div>

        <Form>
          {/* Name Field */}
          <Form.Group className="fw-bold mb-3">
            <Form.Label>Name</Form.Label>
            <Row>
              <Col xs={10} md={8}>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  className="rounded-pill border-0 py-2 px-3 shadow-sm"
                />
              </Col>
            </Row>
          </Form.Group>

          {/* Contact Number Field */}
          <Form.Group className="fw-bold mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Row className="g-2">
              <Col xs={3} sm={2}>
                <div className="rounded-pill bg-white px-3 d-flex align-items-center justify-content-center shadow-sm h-100">
                  +91
                </div>
              </Col>
              <Col xs={9} sm={10} md={7}>
                <Form.Control 
                  type="number" 
                  placeholder="Phone number" 
                  className="rounded-pill border-0 py-2 px-3 shadow-sm"
                />
              </Col>
            </Row>
          </Form.Group>

          {/* OTP Field */}
          <Form.Group className="fw-bold mb-4">
            <Form.Label>OTP</Form.Label>
            <Row className="g-1 g-md-3">
              {[...Array(4)].map((_, i) => (
                <Col xs={3} sm={2} key={i} className="d-flex justify-content-center">
                  <Form.Control
                    ref={(el) => (otpInputs.current[i] = el)}
                    type="text"
                    maxLength={1}
                    value={otp[i]}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="rounded-pill border-0 text-center py-2 shadow-sm"
                    style={{ height: '40px' }}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>

          {/* Login Button - Centered */}
          <Row className="justify-content-center">
            <Col xs={6} sm={6}>
              <Button 
                variant="dark" 
                className="w-100 rounded-pill py-2 fw-bold"
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;