import React, { useRef, useState } from "react";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Container, Row, Col } from "react-bootstrap";
import FourWHeelerpopup from "../components/popup/FourWHeelerpopup";

function FourWheeler() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const services = [
    { image: "/exterior.png", title: "Exterior And Interior Service (Pressure)" },
    { image: "/Seatdeep.png", title: "Seat Deep Cleaning" },
    { image: "/waterless.png", title: "Full Deep Cleaning And Coating" },
    { image: "/fullldeep.png", title: "Waterless Exterior And Interior Service" },
    { image: "/exterior1.png", title: "Exterior And Interior Service" },
    { image: "/interior.png", title: "Interior Service Only" },
    { image: "/exterioronly.png", title: "Exterior Service Only" },
    { image: "/underbody.png", title: "Exterior, Interior And Underbody" },
  ];

  return (
    <div className="my-2 mx-2">
      <NavbarOne />
      <Container
        fluid
        className="d-flex w-100 align-items-center justify-content-end my-3 rounded-4"
        style={{
          backgroundColor: "#FDCC82",
          minHeight: "300px",
          textAlign: "center",
        }}
      >
        <div className="d-flex justify-end w-100">
          <h1 className="fs-1" style={{ fontFamily: "'Salsa', cursive", marginLeft: "45vw" }}>
            Deep Cleaning Services <br /> For A Spotless Home
          </h1>
        </div>
      </Container>

      <Container fluid className="d-flex flex-column vh-100 p-0 m-0">
        <div className="d-flex flex-column flex-md-row flex-grow-1 main-wrapper p-0 m-0" style={{ height: "100%" }}>
          <div
            className="p-3 rounded-4 border-black w-100"
            style={{
              backgroundColor: "#FFBC7F",
              overflowY: "auto",
              height: "100%",
            }}
          >
            <h4 className="fw-bold text-center mb-4" style={{ marginTop: "35px" }}>
              Four Wheeler Services
            </h4>

            <Row className="g-4 px-2" style={{ marginTop: "77px" }}>
              {services.map((service, index) => (
                <Col key={index} xs={12} sm={6} md={3} className="text-center">
                  <div onClick={() => handleServiceClick(service)} style={{ cursor: "pointer" }}>
                    <img src={service.image} alt="Service" width="60" className="img-fluid mb-2" />
                    <p className="fw-bold">{service.title}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>

      {/* Popup Modal */}
      <FourWHeelerpopup show={showModal} onHide={() => setShowModal(false)} service={selectedService} />

      <Footer />
      <Copyright />
    </div>
  );
}

export default FourWheeler;
