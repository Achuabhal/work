import React from "react";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Container, Row, Col } from "react-bootstrap";

const BuySofaa = () => {
  // Sample images for each category (replace with your actual image paths)
  const products = {
    "Single Seater": [
      { img: "/images/single1.jpg", type: "Classic Single", price: "₹499/mo" },
      { img: "/images/single2.jpg", type: "Foldable Single", price: "₹399/mo" },
      { img: "/images/single3.jpg", type: "Wooden Single", price: "₹599/mo" },
    ],
    "Two Seater": [
      { img: "/images/double1.jpg", type: "Classic Double", price: "₹699/mo" },
      { img: "/images/double2.jpg", type: "Modern Double", price: "₹799/mo" },
      { img: "/images/double3.jpg", type: "Storage Double", price: "₹899/mo" },
    ],
    "Three Seater": [
      { img: "/images/queen1.jpg", type: "Standard Queen", price: "₹999/mo" },
      { img: "/images/queen2.jpg", type: "Luxury Queen", price: "₹1099/mo" },
      { img: "/images/queen3.jpg", type: "Storage Queen", price: "₹1199/mo" },
    ],
  };

 const renderProductGrid = (category) => (
  <div className="my-4" key={category}>
    <h5 className="fw-bold mb-3">{category}</h5>
    <Row className="gx-4 gy-4 justify-content-start">
      {products[category].map((product, index) => (
        <Col key={index} xs="12" sm="6" md="4" lg="3" className="d-flex justify-content-center">
          <div
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "250px",
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {/* Optional content here */}
          </div>
          <div className="text-center mt-2">
            <p className="fw-semibold">{product.type || "Type 2"}</p>
            <p className="fw-semibold">{product.price || "Price"}</p>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);



  return (
    <div className="m-2">
      <div className="my-3">
        <NavbarOne />

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
                Quick Fixes For All  <br /> Home Appliances
                </h1>
              </div>
            </Container>
        
      </div>

      <div
        className="py-5"
        style={{
          backgroundColor: "#FFBC7F",
          width: "100%",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRadius: "20px",
        }}
      >
        <Container>
          <h1
            style={{ fontFamily: "'Salsa', cursive" }}
            className="d-flex justify-content-center"
          >
           Buy Sofas
          </h1>

          <Row className="g-4 px-2" style={{ marginTop: "77px" }}>
          {[
  { title: "Single Seater" },
  { title: "Two Seater" },
  { title: "Three Seater" },

].map((item, idx) => (
  <Col key={idx} xs={6} sm={4} md={3} className="text-center">
    <div
      style={{
        width: "120px",
        height: "120px",
        backgroundColor: "#D9D9D9",
        borderRadius: "7.27px",
        margin: "0 auto",
      }}
    ></div>
    <p className="fw-semibold mt-2">{item.title}</p>
  </Col>
))}
          </Row>

          {renderProductGrid("Single Seater")}
          {renderProductGrid("Two Seater")}
          {renderProductGrid("Three Seater")}
          
        </Container>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default BuySofaa;
