import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Banner from "../components/appliancebanner";
import "bootstrap/dist/css/bootstrap.min.css";

const IronRepair = () => {
  // Iron repair services
  const ironServices = [
    { title: "Repair", description: "Start at Rs xxx" },
  ];

  return (
    <div className="d-flex flex-column p-2 m-2" style={{ minHeight: "100vh" }}>
      {/* Header Components */}
      <NavbarOne />
      <div className=""><Banner /></div>
      
      {/* Main Content */}
      <div className="flex-grow-1">
        <Container fluid className="d-flex flex-column p-0 m-0">
          <Row className="gx-0 d-flex flex-column flex-md-row flex-grow-1 main-wrapper h-100 p-0 m-0">
            {/* Right Section - Main Content (Full Width) */}
            <Col
              xs={12}
              className="p-2 main-content"
              style={{
                backgroundColor: "#ffbc7f",
                overflowY: "auto",
                maxHeight: "100vh",
              }}
            >
              {/* Centered Iron Repair Heading */}
              <div className="text-center mb-4">
                <h2 className="fw-bold display-5">Iron Repair</h2>
              </div>
              
              <div className="mb-4">
                <div
                  className="scroll-container"
                  style={{
                    maxHeight: "600px",
                    overflowY: "auto",
                  }}
                >
                  {ironServices.map((service, index, arr) => (
                    <div
                      key={index}
                      className={`p-3 ${
                        index !== arr.length - 1
                          ? "border-bottom border-black"
                          : ""
                      }`}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src="/iron.png"
                          alt={service.title}
                          width="80"
                          height="80"
                          className="img-fluid rounded-4"
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.target.src = "/appliance-default.jpg"; // Fallback image
                          }}
                        />
                        <div>
                          <h5 className="fw-bold">{service.title}</h5>
                          <p>{service.description}</p>
                        </div>
                        <Button 
                          variant="dark" 
                          className="ms-auto rounded-pill"
                        >
                          ADD
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </Col>
          </Row>

          {/* Styling */}
          <style jsx>{`
            /* Hide Scrollbar but Keep Scroll */
            .scroll-container::-webkit-scrollbar {
              display: none;
            }
            .scroll-container {
              -ms-overflow-style: none;
              scrollbar-width: none;
              scroll-behavior: smooth;
              overflow-y: auto;
            }
            /* Main Content Scroll */
            .main-content::-webkit-scrollbar {
              display: none;
            }
            .main-content {
              -ms-overflow-style: none;
              scrollbar-width: none;
              overflow-y: auto;
            }
            /* Media Queries for Mobile */
            @media (max-width: 768px) {
              .main-wrapper {
                flex-direction: column !important;
              }
              .main-content {
                height: auto !important;
                padding-top: 10px;
              }
              .scroll-container {
                max-height: 300px !important;
              }
            }
          `}</style>
        </Container>
      </div>
      
      {/* Footer Components */}
      <div className="mt-0 pt-0">
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default IronRepair;
