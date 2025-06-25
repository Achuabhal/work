import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center my-3 rounded-4"
      style={{
        backgroundColor: "#FDCC82",
        minHeight: "216px", // Figma height
      }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100 px-3">
        {/* Left Image */}
        <img
          src="/bannerlogo.png"
          alt="Beauty Icon"
          style={{ width: "200px" }}
          className="mb-3 mb-md-0"
        />

        {/* Right Text */}
        <div
          className="text-center text-md-end"
          style={{
            width: "100%", // full width on small
            maxWidth: "742.55px", // limit width on large
          }}
        >
          <h1
            className="fw-bold m-0"
            style={{
              fontFamily: "cursive",
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            Be Your Own Kind <br /> Of Beautiful
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
