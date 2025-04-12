import React, { useRef, useEffect } from "react";
import NavbarOne from "../components/NavbarOne";
import HairStudio from "../components/HairStudio";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function MenMassage() {
  const sectionRefs = useRef([]);

  const scrollToSection = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarOne />
      <div className=""><Banner /></div>

      {/* Main content container with flex-grow to push footer to bottom */}
      <div className="flex-grow-1">
        <Container fluid className="p-0 m-0">
          <Row className="gx-0 d-flex flex-column flex-md-row p-0 m-0">
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
              <h4 className="fw-bold text-center">Massage for Men</h4>
              <p className="text-center">Select your service</p>

              <div className="d-flex flex-wrap justify-content-start gap-3 m-2">
                {[
                  { image: "/painrelief.png", title:"Pain Relief" },
                  { image: "/stressrelief.png", title: "Stress Relief" },
                  { image: "/postworkout.png", title: "Post Workout" },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="text-center cursor-pointer"
                    onClick={() => scrollToSection(index)}
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
                  section: "Pain Relief",
                  services: [
                    { image: "/backpainmen.png", title: "Back Pain Relief Massage" },
                    { image: "/legpainmen.png", title: "Leg Pain Relief Massage" },
                    { image: "/deeptissue.png", title: "Deep Tissue Pain Relief Massage" },
                    { image: "/deeptissue1.png", title: "Deep Tissue with Head,Neck and Shoulder Massage" },
                  ],
                },
                {
                  section: "Stress Relief",
                  services: [
                    { image: "/fullbody1.png", title: "Full Body Massage" },
                    { image: "headneck.png", title: "Head,Neck and Shoulder Massage" },
                    { image: "/headmassagemen.png", title: "Head Massage" },
                    { image: "/footmassage1.png", title: "Foot Massage" },
                    { image: "/neckandshoulder.png", title: "Neck and Shoulder Massage" },
                    { image: "/hydrating.png", title: "Hydrating Face Massage" },
                  ],
                },
                {
                  section: "Post Workout",
                  services: [
                    { image: "/postworkout1.png", title: "Sports Recovery Massage" },
                  ],
                },
              ].map((category, idx) => (
                <div
                  key={idx}
                  ref={(el) => (sectionRefs.current[idx] = el)}
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
                            <p> Rs xxx</p>
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
        </Container>

        {/* Inline styles */}
        <style jsx>{`
          .scroll-container::-webkit-scrollbar {
            display: none;
          }
          .scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-behavior: smooth;
            overflow-y: auto;
          }

          .fixed-sidebar::-webkit-scrollbar {
            display: none;
          }
          .fixed-sidebar {
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-y: auto;
          }

          .main-content::-webkit-scrollbar {
            display: none;
          }
          .main-content {
            -ms-overflow-style: none;
            scrollbar-width: none;
            overflow-y: auto;
          }

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
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
      <Copyright />
    </div>
  );
}

export default MenMassage;
