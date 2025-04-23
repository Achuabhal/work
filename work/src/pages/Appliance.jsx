import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import Banner from "../components/appliancebanner";
import "bootstrap/dist/css/bootstrap.min.css";

const Appliance = () => {
  const sectionRefs = useRef([]);
  const navigate = useNavigate();
  
  // Added useLocation hook to access navigation state
  const location = useLocation();
  const { category, option } = location.state || {};

  // Scroll to the clicked section on the right
  const scrollToSection = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Added useEffect to handle scrolling based on navigation state
  useEffect(() => {
    // If category and option are passed, scroll to the appropriate section
    if (category && option) {
      // Find the index of the category
      const categoryIndex = category === "Home" ? 1 : 0; // Assuming Kitchen is index 0 and Home is index 1
      
      // Scroll to the category section
      scrollToSection(categoryIndex);
      
      // You could also highlight the selected option if needed
      // This could be done by setting some state to track the selected option
    }
  }, [category, option]);

  // Function to handle service click
  const handleServiceClick = (serviceName) => {
    // Navigate to the appropriate page based on service name
    if (serviceName === "AC Repair") {
      navigate("/acrepair");
    }
      else if (serviceName === "TV Repair") {
        navigate("/tvrepair"); 
      }// Navigate to TV Repair page
      else if (serviceName === "Fan Repair") {
        navigate("/fanrepair"); 
      }
      // Navigate to TV Repair page
      else if (serviceName === "Washing Machine Repair") {
        navigate("/washing"); 
      }
      else if (serviceName === "Geyser Repair") {
        navigate("/geyser"); 
      }
      else if (serviceName === "Invertor Repair") {
        navigate("/inverter"); 
      }
      else if (serviceName === "Iron Repair") {
        navigate("/iron"); 
      }
      else if (serviceName === "Laptops and Mobile Repair") {
        navigate("/laptop"); 
      }
      else if (serviceName === "Chimney Repair") {
        navigate("/chimney"); 
      }
      else if (serviceName === "Water-Purifier Repair") {
        navigate("/water"); 
      }
      else if (serviceName === "Gas Stove Repair") {
        navigate("/gas"); 
      }
      else if (serviceName === "Induction Repair") {
        navigate("/induction"); 
      }
      else if (serviceName === "Refrigerator Repair") {
        navigate("/fridge"); 
      }
      else if (serviceName === "Mixer Repair") {
        navigate("/mixer"); 
      }
      else if (serviceName === "Microwave Repair") {
        navigate("/oven"); 
      }
      else if (serviceName === "Dishwasher Repair") {
        navigate("/dishwasher"); 
      }
    // Add more conditions for other services as needed
  };

  // Array of additional repair services
  const additionalServices = [
    { name: "Induction Repair", price: "xxx" },
    { name: "Refrigerator Repair", price: "xxx" },
    { name: "Microwave Repair", price: "xxx" },
    { name: "Mixer Repair", price: "xxx" },
    { name: "Dishwasher Repair", price: "xxx" },
    { name: "AC Repair", price: "xxx" },
    { name: "TV Repair", price: "xxx" },
    { name: "Fan Repair", price: "xxx" },
    { name: "Washing Machine Repair", price: "xxx" },
    { name: "Geyser Repair", price: "xxx" },
    { name: "Invertor Repair", price: "xxx" },
    { name: "Iron Repair", price: "xxx" },
    { name: "Laptops and Mobile Repair", price: "xxx" },
  ];

  return (
    <div className="mx-1 px-1">
      {/* Navbar */}
      <NavbarOne />
      
      {/* Banner with mt-2 and mb-2 margins */}
      <div className="mt-2 mb-2">
        <Banner />
      </div>
      
      {/* Main Content */}
      <Container fluid className="p-3 p-md-4 rounded-4 mt-2 mb-2 shadow" style={{ backgroundColor: "#ffbc7f" }}>
        <Row className="gx-0 d-flex flex-column flex-md-row flex-grow-1 main-wrapper h-100 p-0 m-0">
          {/* Left Sidebar */}
          <Col
            md={3}
            xs={12}
            className="p-3 border-end border-black fixed-sidebar m-0"
            style={{
              backgroundColor: "#ffbc7f",
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            <h4 className="fw-bold text-center">Appliances Repair</h4>
            <p className="text-center">Select your service</p>
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {[
                { image: "/kitchen-table.png", title: "Kitchen " },
                { image: "/living-room.png", title: "Home " },
                
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
                    onError={(e) => {
                      e.target.src = "/appliance-default.jpg"; // Fallback image
                    }}
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
            className="p-2 main-content m-0"
            style={{
              backgroundColor: "#ffbc7f",
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            {[
              {
                section: "Kitchen ",
                services: [
                  { image: "/chemny.png", title: "Chimney Repair" },
                  { image: "/appliance.png", title: "Water-Purifier Repair" },
                  { image: "/stove.png", title: "Gas Stove Repair" },
                  { image: "/induction-stove.png", title: "Induction Repair" },
                  { image: "/fridge.png", title: "Refrigerator Repair" },
                  { image: "/oven.png", title: "Microwave Repair" },
                  { image: "/mixer-blender.png", title: "Mixer Repair" },
                  { image: "/dishwasher.png", title: "Dishwasher Repair" },
                ],
              },
              {
                section: "Home",
                services: [
                  { image: "/air-conditioner.png", title: "AC Repair" },
                  { image: "/television.png", title: "TV Repair" },
                  { image: "/fan.png", title: "Fan Repair" },
                  { image: "/washing-machine.png", title: "Washing Machine Repair" },
                  { image: "/water-boiler.png", title: "Geyser Repair" },
                  { image: "/battery.png", title: "Invertor Repair" },
                  { image: "/iron.png", title: "Iron Repair" },
                  { image: "/phone-tablet-and-laptop.png", title: "Laptops and Mobile Repair" },
                ],
              },
              //
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
                    maxHeight: "350px",
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
                          width="80"
                          height="80"
                          className="img-fluid rounded-4"
                          style={{ objectFit: "cover" }}
                          onError={(e) => {
                            e.target.src = "/appliance-default.jpg"; // Fallback image
                          }}
                        />
                        <div 
                          onClick={() => handleServiceClick(service.title)}
                          style={{ cursor: "pointer" }}
                        >
                          <h5 className="fw-bold">{service.title}</h5>
                          <p>Starts at Rs xxx</p>
                        </div>
                        <Button 
                          variant="dark" 
                          className="ms-auto rounded-pill"
                          onClick={() => handleServiceClick(service.title)}
                        >
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
              max-height: none !important;
              border-right: none;
              border-bottom: 1px solid black;
            }
            .main-content {
              height: auto !important;
              max-height: none !important;
              padding-top: 10px;
            }
            .scroll-container {
              max-height: 300px !important;
            }
          }
        `}</style>
      </Container>
      
      {/* Footer */}
      <Container
        fluid
        className="p-4 rounded-4 mt-2 text-center"
        style={{ backgroundColor: "#FFD29E" }}
      >
        <Footer />
      </Container>

      {/* Copyright Section */}
      <div
        className="mt-2 rounded-4 text-center d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#D28E26", height: "2rem" }}
      >
        <Copyright />
      </div>
    </div>
  );
};

export default Appliance;
