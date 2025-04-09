import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HairStudioo from "../pages/HairStudioo";

const HairStudio = () => {
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
          <h4 className="fw-bold text-center">Hair Studio For Women</h4>
          <p className="text-center">Select your service</p>

          <div className="d-flex flex-wrap justify-content-start gap-3 m-2">
            {[
{ image: "/blowdrive.png", title: (<><span>Blow Dry</span><br /><span>and Style</span></>) },
              { image: "/cutandstyle.png", title: "Cut and Style" },
              { image: "/trim.png", title: "Trim and Style" },
              { image: "/hairspa.png", title: "Hair Spa" },
              { image: "/keratin.png", title: "Keratin and Botox" },
              { image: "/haircolor2.png", title: "Hair Color" },
              { image: "/hairextension.png", title: "Hair Extension" },

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
              section: "Blow Dry and Style",
              services: [
                { image: "/womanhear.png", title: "Advanced Hairstyling" },
                { image: "/hairbun.png", title: "Advanced Buns" },
                { image: "/nounhair.png", title: "Straight and Smooth Blow Dry" },
                { image: "/back1.png", title: "In Curl/Curl Out Blow Dry" },
                { image: "/stomach1.png", title: "Hair Straighting" },
                { image: "/curls.png", title: "Curls and Waves" },
              ],
            },
            {
              section: "Cut and Style",
              services: [
                { image: "/whaircut.png", title: "HairCut" },
                { image: "/wkids.png", title: "Haircut for Kids" },
                { image: "/mother.png", title: "Haircut(Mom and Daughter" },
                { image: "/spaandcut.png", title: "Hair Spa and Cut" },
                { image: "/haircutstyle.png", title: "Haircut and Styling" },
              ],
            },
            {
              section: "Trim and Style",
              services: [
                { image: "/whairtrim.png", title: "Hair Trim" },

             { image: "/mothertrim.png", title: "Trim(Mom and daughter)" },

              { image: "/hairtrim1.png", title: "Hair Trim and Styling" },
            { image: "/hairtrimspa.png", title: "Hair Trim and Spa" },
              ],
            },
            {
                section: "Hair Spa",
                services: [
                  { image: "/keratinspa.png", title: "Keratin Hair Spa" },
  
               { image: "/hairspastyle.png", title: "Hair Spa and Styling" },
  
                { image: "/headmassagespa.png", title: "Head Massage" },
                ],
              },
            {
              section: "Keratin and Botox",
              services: [
                {
                  image: "/botox.png",
                  title: "Cut and Botox/Keratin",
                },
                { image: "/hairkeratin.png", title: "Hair Keratin" },
                { image: "/hairbotox.png", title: "Hair Botox" },
              ],
            },
            

            {
                section: "Hair Color",
                services: [
                  { image: "/cutcolor.png", title: "Cut and Color" },
                  { image: "/haircolor3.png", title: "Hair Color (only application)" },
                ],
              },

              {
                section: "Hair Extension",
                services: [
                  { image: "/fullheadextension.png", title: "Full Head Extension" },
                  { image: "/halfheadextension.png", title: "Half Head Extension" },
                  { image: "/bangsextension.png", title: "Bangs Extension" },
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

export default HairStudio;
