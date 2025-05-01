import React,{ useRef, useEffect }from 'react'
import NavbarOne from '../components/NavbarOne'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import { Container, Row,Col } from "react-bootstrap";


function FourWheeler() {
      const sectionRefs = useRef([]);
    
  return (
    <div className='my-2 mx-2'>
      <NavbarOne/>
      <Container 
      fluid 
      className="d-flex w-100 align-items-center justify-content-end my-3 rounded-4"
      style={{
        backgroundColor: "#FDCC82",
minHeight:"300px",
 textAlign: "center",
      }}
    >
      <div className="d-flex justify-end w-100">

        {/* Right Text */}
        <h1 className="fs-1"  style={{ fontFamily: "'Salsa', cursive",marginLeft:"45vw" }}
        >
        Deep Cleaning Services  <br /> For A Spotless Home
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
        height: "100%", // fixed height
      }}
    >
      <h4 className="fw-bold text-center mb-4" style={{ marginTop: "35px" }}>Four Wheeler Services</h4>

      <Row className="g-4 px-2" style={{ marginTop: "77px" }}>
        {[
          { image: "/exterior.png", title: <><span>Exterior And Interior </span><br /><span>Service(Pressure)</span></> },
          { image: "/Seatdeep.png", title: <><span>Seat Deep </span><br /><span>Cleaning</span></> },
          { image: "/waterless.png", title: <><span>Full Deep Cleaning</span><br /><span>And Coating</span></> },
          { image: "/fullldeep.png", title: <><span>Waterless Exterior</span><br /><span>And Interior Service</span></> },
          { image: "/exterior1.png", title: <><span>Exterior And Interior</span><br /><span>Service</span></> },
          { image: "/interior.png", title: <><span>Interior Service </span><br /><span>Only</span></> },
          { image: "/exterioronly.png", title: <><span>Exterior Service</span><br /><span>Only</span></>},
          { image: "/underbody.png", title: <><span>Exterior And Interior</span><br /><span> And Underbody </span></> },
        ].map((service, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="text-center">
            <div
              onClick={() => scrollToSection(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={service.image}
                alt="Service"
                width="60"
                className="img-fluid mb-2"
              />
              <p className="fw-bold">{service.title}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
</Container>


      <Footer/>
      <Copyright/>
    </div>
  )
}

export default FourWheeler
