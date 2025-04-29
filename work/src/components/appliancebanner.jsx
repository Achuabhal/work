import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Banner = () => {
  return (
    <Container 
      fluid 
      className="d-flex align-items-center justify-content-center my-2 rounded-4"
      style={{
        backgroundColor: "#FDCC82",
        minHeight:"300px",
        textAlign: "right",
      }}
    >
      <div className="d-flex align-items-center w-100">
        {/* Left Image */}
        {/* <img 
          src="/bannerlogo.png" // Change to your actual image path
          alt="Beauty Icon"
          style={{ width: "200px", marginRight: "20px" }}
        /> */}

        {/* Right Text */}
        <h1 className="fw-bold" style={{ fontFamily: "cursive", flex: 1 }}>
        Quick Fixes For All <br />Home Appliances
        </h1>
      </div>
    </Container>
  );
};

export default Banner;
