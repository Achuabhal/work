import React from "react";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Container, Row, Col } from "react-bootstrap";

const BuyBedStorage = () => {
  // Sample images for each category (replace with your actual image paths)
  const products = {
    "Wardrobe": [
      { img: "/images/single1.jpg", type: "Classic Single", price: "₹499/mo" },
      { img: "/images/single2.jpg", type: "Foldable Single", price: "₹399/mo" },
      { img: "/images/single3.jpg", type: "Wooden Single", price: "₹599/mo" },
    ],
    "Bookshelf": [
      { img: "/images/double1.jpg", type: "Classic Double", price: "₹699/mo" },
      { img: "/images/double2.jpg", type: "Modern Double", price: "₹799/mo" },
      { img: "/images/double3.jpg", type: "Storage Double", price: "₹899/mo" },
    ],
   
  };

  const renderProductGrid = (category) => (
  <div className="my-4" key={category}>
    <h5 className="fw-bold mb-3">{category}</h5>
    <Row className="g-5 justify-content-start flex-wrap">
      {products[category].map((product, index) => (
        <Col
          key={index}
          xs="auto"
          className="d-flex justify-content-start mb-4"
          style={{ minWidth: "300px", marginRight: "20px" }}
        >
          <div className="text-center">
            <div
              style={{
                width: "300px",
                height: "250px",
                backgroundColor: "#D9D9D9",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            ></div>
            <p className="fw-semibold mt-2">{product.type}</p>
            <p className="fw-semibold mt-2">{product.price}</p>
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
            Buy Bedroom Storage
          </h1>

          <Row className="g-4 px-2" style={{ marginTop: "77px" }}>
          {[
  { title: "Wardrobe" },
  { title: "Bookshelf" },
//  
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

          {renderProductGrid("Wardrobe")}
          {renderProductGrid("Bookshelf")}
        </Container>
      </div>

      <Footer />
      <Copyright />
    </div>
  );
};

export default BuyBedStorage;
