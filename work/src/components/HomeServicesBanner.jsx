import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeServicesBanner = () => {
  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center my-3 rounded-4"
      style={{
        backgroundColor: "#FDCC82",
        minHeight: "300px",
      }}
    >
      <div className="d-flex align-items-center w-100">
        {/* Left Image - Uncomment if you want to add an image */}
        {/* <img 
          src="/homeservices-icon.png" // Change to your actual image path
          alt="Home Services Icon"
          style={{ width: "200px", marginRight: "20px" }}
        /> */}

        {/* Desktop Text - Right aligned */}
        <h1 
          className="fw-bold d-none d-md-block" 
          style={{ 
            fontFamily: "cursive", 
            flex: 1,
            textAlign: "right" 
          }}
        >
          Expert Solutions For<br />Home Repairs
        </h1>
        
        {/* Mobile Text - Left aligned */}
        <h1 
          className="fw-bold d-block d-md-none" 
          style={{ 
            fontFamily: "cursive", 
            flex: 1,
            textAlign: "left",
            paddingLeft: "15px"
          }}
        >
          Find the Best!!
        </h1>
      </div>
    </Container>
  );
};

export default HomeServicesBanner;
