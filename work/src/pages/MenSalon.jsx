import React, { useRef, useEffect } from "react";
import NavbarOne from "../components/NavbarOne";
import HairStudio from "../components/HairStudio";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
function MenSalon() {
  const sectionRefs = useRef([]);

    const scrollToSection = (idx) => {
        if (sectionRefs.current[idx]) {
          sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    return (
        <div className="d-flex flex-column p-2 m-2" style={{ minHeight: "100vh" }}>
         
          <NavbarOne />
        <div className=""><Banner /></div>
          
        
        <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0">
      <Row className="gx-0 d-flex flex-column flex-md-row flex-grow-1 main-wrapper h-100 p-0 m-0">
        {/* Left Sidebar */}
        <Col
          md={3}
          xs={12}
          className="p-3 border-end border-black rounded-start-4 fixed-sidebar m-0"
          style={{
            backgroundColor: "#FFBC7F",
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          <h4 className="fw-bold text-center">Salon for Men</h4>
          <p className="text-center">Select your service</p>

          <div className="d-flex flex-wrap justify-content-start gap-4 m-2">
            {[
{ image: "/haircutmen.png", title: (<><span>Haircut and
</span><br /><span>Beard Styling</span></>) },
              { image: "/Pedicure.png", title: "Pedicure" },
              { image: "/hairdye.png", title: "Hair Color" },
              { image: "/Detanmen.png", title: "Detan" },
              { image: "/menfacial.png", title: (<><span>Facial and </span><br/><span>Cleanup</span></>) },


            ].map((service, index) => (
              <div
                key={index}
                className="text-center cursor-pointer"
                onClick={() => scrollToSection(index)} //  Scroll on click
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
          className="p-2 rounded-end-4 main-content"
          style={{
            backgroundColor: "#FFBC7F",
            overflowY: "auto",
            maxHeight: "100vh",
          }}
        >
          {[
            {
              section: "Haircut and Beard Styling",
              services: [
                { image: "/haircutmen1.png", title: "Haircut (Men)" },
                { image: "/haircutkids.png", title: "Haircut (Kids)" },
                { image: "/beardtrim.png", title: "Beard Trimming and Styling" },
                { image: "/cleanshave.png", title: "Clean Shave" },
                { image: "/beardcolor.png", title: "Beard Color" },
              ],
            },
            {
              section: "Pedicure",
              services: [
                { image: "/deepcleanse.png", title: "Deep Cleanse Pedicure" },
                { image: "/sole.png", title: "Sole Rejuvanating Pedicure" },
                { image: "/expresspedicure.png", title: "Express Pedicure" },
                { image: "/footandcalf.png", title: "Foot and Calf Massage" },
                { image: "/expressmanicure.png", title: "Express Manicure" },
              ],
            },
            {
              section: "Hair Color",
              services: [
                { image: "/haircoloronly.png", title: "Hair Color (only application)" },

             { image: "/antidandruff.png", title: "Anti-dandruff Ritual" },
              ],
            },
            {
                section: "Detan",
                services: [
                  { image: "/faceandneck.png", title: "Face and Neck" },
  
               { image: "/Hands.png", title: "Hands" },
  
                ],
              },
            {
              section: "Facial and Cleanup",
              services: [
                {
                  image: "/SkinBrightening.png",
                  title: "Skin Brightening Facial",
                },
                { image: "/SkinHydrating.png", title: "Skin Hydrating Facial" },
                { image: "/Coffee.png", title: "Coffee Skin Hydrating Cleanup" },
                { image: "/Charcoal.png", title: "Charcoal de-toxifying Cleanup " },

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
          <div className="mt-0 pt-0"> 
            <Footer />
          </div>
          <Copyright />
        </div>
      );
    }

export default MenSalon
