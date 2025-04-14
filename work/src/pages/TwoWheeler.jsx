import React, { useRef, useState } from 'react';
import NavbarOne from '../components/NavbarOne';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import TwoWheelerPopUp from '../components/popup/TwoWheelerPopUp';

function TwoWheeler() {
  const sectionRefs = useRef([]);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const scrollToSection = (index) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='my-2 mx-2'>
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
          <h1
            className="fs-1"
            style={{ fontFamily: "'Salsa', cursive", marginLeft: "45vw" }}
          >
            Services That Last’s <br /> Longer....
          </h1>
        </div>
      </Container>

      <Container fluid className="d-flex flex-column min-vh-100 p-0 m-0 rounded-4">
        <div className="gx-0 d-flex flex-column flex-md-row flex-grow-1 main-wrapper h-100 p-0 m-2 rounded-4">
          <div
            className="p-3 border-end border-black fixed-sidebar m-0 w-100"
            style={{
              backgroundColor: "#FFBC7F",
              overflowY: "auto",
              maxHeight: "100vh",
            }}
          >
            <h4 className="fw-bold text-center mb-4" style={{ marginTop: "35px" }}>Four Wheeler Services</h4>

            <Row className="g-4 justify-content-start px-2" style={{ marginTop: "77px" }}>
            {[
  {
    title: (
      <>
        <span className="text-decoration-none text-dark">Cleaning And <br /> Coating</span>
      </>
    ),
    onClick: () => setShowModalTwo(true),
  },
  {
    title: (
      <>
        <span>Cleaning Only </span>
      </>
    ),
  },
  {
    image: "/waterless.png",
    title: (
      <>
        <span>Coating Only</span>
      </>
    ),
  },
].map((service, index) => (
  <Col key={index} xs={12} sm={6} md={3} className="text-center d-flex flex-column align-items-center">
    {index < 2 ? (
      <div
        className="cursor-pointer d-flex align-items-center justify-content-center mb-2"
        onClick={service.onClick || (() => scrollToSection(index))}
        style={{
          height: "180px",
          width: "180px",
          backgroundColor: "#D9D9D9",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        {/* Placeholder box content */}
      </div>
    ) : (
      <img
        src={service.image}
        alt="Service"
        width="70"
        className="img-fluid mb-2"
        onClick={() => scrollToSection(index)}
        style={{ cursor: "pointer", height: "180px", width: "auto" }}
      />
    )}
    <p className="fw-bold mt-2">{service.title}</p>
  </Col>
))}

            </Row>
          </div>
        </div>

        {/* Sections to Scroll To */}
      </Container>

      <TwoWheelerPopUp show={showModalTwo} onHide={() => setShowModalTwo(false)} />
      <Footer />
      <Copyright />
    </div>
  );
}

export default TwoWheeler;
