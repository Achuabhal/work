import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SalonServices = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0; // Ensure it starts at the top
    }
  }, []);

  return (
    <Container fluid className=" d-flex flex-column mt-2  mb-2 pb-3 " style={{minHeight:"50px"}}>
      <Row>
        {/* Static Left Section */}
        <Col md={3} className="p-3 border-end border-black" style={{ backgroundColor: "#FFBC7F" }}>
          <h4 className="fw-bold text-center">Salon for Women</h4>
          <p className="text-center">Select your service</p>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            <div className="text-center">
              <img src="/depilation.png" className="cursor-pointer" alt="Waxing" width="50" />
              <p className="cursor-pointer">Waxing</p>
            </div>
            <div className="text-center">
              <img src="/manicure.png" alt="Pedicure" width="50" />
              <p>Pedicure and <br /> Manicure</p>
            </div>
            <div className="text-center">
              <img src="/facial.png" alt="Facial" width="50" />
              <p>Facial</p>
            </div>
            <div className="text-center">
              <img src="/glowingskin.png" alt="Cleanup" width="50" />
              <p>Cleanup</p>
            </div>
            <div className="text-center">
              <img src="/dye-kit.png" alt="Hair Bleach" width="50" />
              <p>Hair bleach <br />and detan</p>
            </div>
            <div className="text-center">
              <img src="/threading.png" alt="Threading" width="50" />
              <p>Threading and <br /> face waxing</p>
            </div>
          </div>
        </Col>
        {/* Scrollable Right Section without Scrollbar */}
        <Col md={9} className="p-3" style={{ backgroundColor: "#FFBC7f" }}>



  <h4 className="fw-bold">Waxing</h4>

  <div
    ref={scrollRef}
    className="scroll-container"
    style={{ maxHeight: "400px", overflowY: "scroll", scrollbarWidth: "none" }}
  >
    {/* Define an array of objects for different services */}
    {[
      { image: "/arm.png", title: "Arm Waxing" },
      { image: "/legs.png", title: "Leg Waxing" },
      { image: "/fullbody.png", title: "Full Body Waxing" },
      { image: "/back.png", title: "Back Waxing" },
      { image: "/stomach.png", title: "Stomach Waxing" },
      { image: "/bikini.png", title: "Bikini Waxing" },
      { image: "/fullarm.png", title: "Full arms,underarms and full legs Waxing" },
      
    ].map((service, index) => (
      <div key={index} className="p-3 border-bottom border-black">
        <div className="d-flex align-items-center gap-3">
          <img src={service.image} alt={service.title} width="50" />
          <div>
            <h5 className="fw-bold">{service.title}</h5>
            <p>Starts at Rs xxx</p>
            <p className="text-muted">4 options available</p>
          </div>
          <Button variant="dark" className="ms-auto">ADD</Button>
        </div>
      </div>
    ))}
  </div>
</Col>


      </Row>

      {/* Custom CSS for Hiding Scrollbar */}
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </Container>
  );
};

export default SalonServices;
