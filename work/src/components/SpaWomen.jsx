import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SpaWomen = () => {
  const sectionRefs = useRef([]);

  const scrollToSection = (idx) => {
    if (sectionRefs.current[idx]) {
      sectionRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sidebarItems = [
    { image: "/post_natal.png", title: "Post Natal" },
    { image: "/stress_relief.png", title: "Stress Relief" },
    { image: "/pain_relief.png", title: "Pain Relief" },
    { image: "/skincare.png", title: "Skin Care" },
  ];

  const serviceCategories = [
    {
      section: "Post Natal",
      services: [
        { image: "/post_natal1.png", title: "Post Natal Massage" },
      ],
    },
    {
      section: "Stress Relief",
      services: [
        { image: "/hectic.png", title: "Hectic Day Massage" },
        { image: "/spafullbody.png", title: "Full Body Massage" },
        { image: "/shoulder.png", title: "Head and Shoulder Massage" },
        { image: "/spafoot.png", title: "Foot Massage" },
        { image: "/face_massage.png", title: "Face Massage" },
        { image: "/headspa.png", title: "Head Massage" },
      ],
    },
    {
      section: "Pain Relief",
      services: [
        { image: "/legpain.png", title: "Leg Pain Relief Massage" },
        { image: "/backpain.png", title: "Back Pain Relief Massage" },
      ],
    },
    {
      section: "Skin Care",
      services: [
        { image: "/lastspa.png", title: "Full Body Massage and Scrub" },
      ],
    },
  ];

  return (
    <Container fluid className="p-0 m-0">
      <Row className="gx-0 d-flex flex-md-nowrap min-vh-100">
        {/* Sidebar */}
        <Col md={3} xs={12} className="p-3 sidebar border-end border-black">
          <h4 className="fw-bold text-center">Salon for Women</h4>
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
                        <p>xxx</p>
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

export default SpaWomen;
