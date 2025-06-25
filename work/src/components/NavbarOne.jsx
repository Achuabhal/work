import React from 'react';
import { Container, Form, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavbarOne() {
  return (
    <div>
      {/* LARGE & TABLET DEVICES NAVBAR */}
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#FFD29E", minHeight: "203px" }}
        className="rounded-4 my-0 d-none d-md-flex"
      >
        <Container fluid className="px-4 px-xl-5">
          {/* Logo */}
          <Navbar.Brand className="me-4">
            <Link to="/home">
              <img src="/duzo.png" alt="DUZO" width="120" height="80" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          {/* Main Content */}
          <div className="d-flex align-items-center flex-grow-1 gap-3 justify-content-between">
            {/* Search Bar */}
            <Form style={{ flex: "1 1 460px" }}>
              <Form.Group className="input-group">
                <div
                  className="d-flex align-items-center w-75 rounded-pill px-3"
                  style={{ backgroundColor: "#FFBE5D", height: "61px" }}
                >
                  <Form.Control
                    type="search"
                    placeholder="How can we help you?"
                    className="form-control border-0 shadow-none bg-transparent"
                  />
                  <img src="/search.png" alt="Search" width="25" height="25" className="ms-2" />
                </div>
              </Form.Group>
            </Form>

            {/* Location Input */}
            <Form style={{ width: "200px" }} className="me-2">
              <Form.Group className="input-group">
                <div
                  className="d-flex align-items-center w-100 rounded-pill px-3"
                  style={{ backgroundColor: "#FFBE5D", height: "60px" }}
                >
                  <Form.Control
                    type="text"
                    className="form-control border-0 shadow-none bg-transparent"
                  />
                  <img src="/image.png" alt="Location" width="25" height="25" className="ms-2" />
                </div>
              </Form.Group>
            </Form>

            {/* Icons */}
            <div className="d-flex align-items-center gap-2">
              <img src="/cart.png" alt="Cart" width="50" height="50" />
              <img src="/user.png" alt="Profile" width="50" height="50" />
            </div>
          </div>
        </Container>
      </Navbar>

      {/* SMALL DEVICES NAVBAR */}
      <div
        className="d-flex d-md-none flex-column align-items-start gap-3 p-3"
        style={{ backgroundColor: "#FFD29E" }}
      >
        {/* Logo */}
        <div>
          <Link to="/home">
            <img src="/duzo.png" alt="DUZO" width="120px" height="80px" />
          </Link>
        </div>

        {/* Search Input */}
        <div className="w-100">
          <Form>
            <Form.Group className="input-group">
              <div
                className="d-flex align-items-center w-100 rounded-pill px-2"
                style={{
                  backgroundColor: "#FFBE5D",
                  padding: "5px",
                  border: "none",
                }}
              >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="form-control border-0 shadow-none bg-transparent"
                />
                <img
                  src="/search.png"
                  alt="Search"
                  width="20"
                  height="20"
                  className="ms-2"
                />
              </div>
            </Form.Group>
          </Form>
        </div>

        {/* Text Input */}
        <div className="w-100">
          <Form>
            <Form.Group className="input-group">
              <div
                className="d-flex align-items-center w-100 rounded-pill px-2"
                style={{
                  backgroundColor: "#FFBE5D",
                  padding: "5px",
                  border: "none",
                }}
              >
                <Form.Control
                  type="text"
                  className="form-control border-0 shadow-none bg-transparent"
                />
                <img
                  src="/image.png"
                  alt="Image"
                  width="20"
                  height="20"
                  className="ms-2"
                />
              </div>
            </Form.Group>
          </Form>
        </div>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3">
          <img src="/cart.png" style={{ width: "40px" }} alt="Cart" />
          <img src="/user.png" style={{ width: "40px" }} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default NavbarOne;
