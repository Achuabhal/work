import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MakeUp = () => {
  const sectionRefs = useRef([]);

  const scrollToSection = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sidebarItems = [
    { image: "/makeupstyling.png", title: "Makeup and Styling" },
    { image: "/professional.png", title: "Professional Makeup" },
    { image: "/own.png", title: "Share your own Makeup" },
    { image: "/styling.png", title: "Styling" },
    { image: "/eyemakeup.png", title: "Eye Makeup" },

  ];

  const serviceCategories = [
    {
      section: "Makeup and Styling",
      services: [
        { image: "/basicmakeup.png", title: "Basic Makeup" },
        { image: "/LuxeMakeup.png", title: "Luxe Makeup" },
      ],
    },
    {
      section: "Professional Makeup",
      services: [
        { image: "/BasicProf.png", title: "Basic" },
        { image: "/LuxeGlamup.png", title: "Luxe Glamup" },
      ],
    },
    {
      section: "Share your own Makeup",
      services: [
        { image: "/ownstyle.png", title: "Makeup and Styling" },
        { image: "/makeuponly.png", title: "Makeup only" },
      ],
    },
    {
      section: "Styling",
      services: [
        { image: "/basichair.png", title: "Basic Hair Styling" },
        { image: "/advancedhair.png", title: "Advanced Hair Styling" },
        { image: "/saree.png", title: "Saree Drapping" },

      ],
    },

    {
        section: "Eye Makeup",
        services: [
          { image: "/eyemakeup1.png", title: "Eye Makeup" },
        ],
      },
  ];

  return (
    <Container fluid className="p-0 m-0">
      <Row className="gx-0 d-flex flex-md-nowrap min-vh-100">
        {/* Sidebar */}
        <Col md={3} xs={12} className="p-3 sidebar border-end border-black">
          <h4 className="fw-bold text-center">Makeup and Styling</h4>
          <p className="text-center">Select your service</p>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="text-center"
                onClick={() => scrollToSection(index)}
                style={{ cursor: "pointer" }}
              >
                <img src={item.image} alt={item.title} width="50" className="img-fluid" />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </Col>

        {/* Main Content */}
        <Col md={9} xs={12} className="p-3 main-content">
          {serviceCategories.map((category, idx) => (
            <div key={idx} ref={(el) => (sectionRefs.current[idx] = el)} className="mb-4">
              <h4 className="fw-bold">{category.section}</h4>
              <div className="scroll-container">
                {category.services.map((service, index, arr) => (
                  <div
                    key={index}
                    className={`p-3 ${index !== arr.length - 1 ? "border-bottom border-black" : ""}`}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img src={service.image} alt={service.title} width="50" className="img-fluid" />
                      <div>
                        <h5 className="fw-bold">{service.title}</h5>
                        <p>Rs xxx</p>
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

      <style jsx>{`
        .sidebar,
        .main-content {
          background-color: #FFBC7F;
          overflow-y: auto;
        }

        .scroll-container {
          max-height: 400px;
          overflow-y: auto;
        }

        .scroll-container::-webkit-scrollbar,
        .main-content::-webkit-scrollbar,
        .sidebar::-webkit-scrollbar {
          display: none;
        }

        .scroll-container,
        .main-content,
        .sidebar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (min-width: 768px) {
          .sidebar {
            position: sticky;
            top: 0;
            height: 100vh;
          }
        }

        @media (max-width: 767px) {
          .sidebar {
            height: auto !important;
            border-right: none;
            border-bottom: 1px solid black;
          }

          .scroll-container {
            max-height: 300px !important;
          }
        }
      `}</style>
    </Container>
  );
};

export default MakeUp;
