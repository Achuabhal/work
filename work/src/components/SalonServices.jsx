import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SalonServices = () => {
  const sectionRefs = useRef([]);

  // Scroll to the clicked section on the right
  const scrollToSection = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      <Row className="gx-0 d-flex flex-column flex-md-row flex-grow-1 main-wrapper h-100 p-0 m-0">
        {/* Left Sidebar */}
        <Col
          md={3}
          xs={12}
          className="p-3 border-end border-black fixed-sidebar m-0"
          style={{
            backgroundColor: "#FFBC7F",
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          <h4 className="fw-bold text-center">Salon for Women</h4>
          <p className="text-center">Select your service</p>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {[
              { image: "/depilation.png", title: "Waxing" },
              { image: "/manicure.png", title: "Pedicure and Manicure" },
              { image: "/facial.png", title: "Facial" },
              { image: "/glowingskin.png", title: "Cleanup" },
              { image: "/dye-kit.png", title: "Hair Bleach and Detan" },
              { image: "/threading.png", title: "Threading and Face Waxing" },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => scrollToSection(index)} // 👈 Scroll on click
                style={{ cursor: "pointer" }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  width="50"
                  className="img-fluid"
                />
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </Col>

        {/* Right Section - Main Content */}
        <Col
          xs={12}
          md={9}
          className="p-2 main-content"
          style={{
            backgroundColor: "#FFBC7F",
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          {[
            {
              section: "Waxing",
              services: [
                { image: "/arm.png", title: "Arm Waxing" },
                { image: "/legs.png", title: "Leg Waxing" },
                { image: "/fullbody.png", title: "Full Body Waxing" },
                { image: "/back.png", title: "Back Waxing" },
                { image: "/stomach.png", title: "Stomach Waxing" },
                { image: "/bikini.png", title: "Bikini Waxing" },
                {
                  image: "/fullarm.png",
                  title: "Full arms, underarms and full legs Waxing",
                },
              ],
            },
            {
              section: "Pedicure and Manicure",
              services: [
                { image: "/predicure.png", title: "Pedicure" },
                { image: "/manicure1.png", title: "Manicure" },
                { image: "/nails.png", title: "Cut, file and polish (hands)" },
                { image: "/nailfeet.png", title: "Cut, file and polish (feet)" },
                { image: "/footmassage.png", title: "Foot Massage" },
              ],
            },
            {
              section: "Facial",
              services: [{ image: "/facial1.png", title: "Full face facial" }],
            },
            {
              section: "Clean Up",
              services: [{ image: "/cleanup.png", title: "Full body cleanup" }],
            },
            
            {
              section: "Hair Bleach and Detan",
              services: [
                {
                  image: "/haircolor.png",
                  title: "Hair color/mehendi (only application)",
                },
                { image: "/headmassage.png", title: "Head Massage" },
                { image: "/detan.png", title: "Detan" },
                { image: "/bleach.png", title: "Bleach" },
              ],
            },
            {
              section: "Threading and Face Waxing",
              services: [
                { image: "/threading1.png", title: "Threading" },
                { image: "/facewaxing.png", title: "Face Waxing" },
              ],
            },
          ].map((category, idx) => (
            <div
              key={idx}
              ref={(el) => (sectionRefs.current[idx] = el)} // 👈 Assign ref dynamically
              className="mb-4"
            >
              <h4 className="fw-bold">{category.section}</h4>
              <div
                className="scroll-container"
                style={{
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                {category.services.map((service, index, arr) => (
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
                        src={service.image}
                        alt={service.title}
                        width="50"
                        className="img-fluid"
                      />
                      <div>
                        <h5 className="fw-bold">{service.title}</h5>
                        <p>Starts at Rs xxx</p>
                        <p className="text-muted">4 options available</p>
                      </div>
                      <Button variant="dark" className="ms-auto">
                        ADD
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

        /* Fixed Sidebar Scroll */
        .fixed-sidebar::-webkit-scrollbar {
          display: none;
        }
        .fixed-sidebar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
          .fixed-sidebar {
            height: auto !important;
            border-right: none;
            border-bottom: 1px solid black;
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
  );
};

export default SalonServices;
