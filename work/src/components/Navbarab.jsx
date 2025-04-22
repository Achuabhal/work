import React from 'react'
import { Container, Form,Navbar,Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbarab() {
  return (
    <div>
       <Navbar style={{ backgroundColor: "#FFD29E" }} expand="lg" className="rounded-4 my-3 ">
  <Container >  
    
    <Navbar.Brand className="mb-2">
                <Link to="/home">
                  <img src="/duzo.png" alt="DUZO" width="100" />
                </Link>
              </Navbar.Brand>

  
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-5" />

    <Navbar.Collapse id="basic-navbar-nav">
      <div className="d-flex flex-column w-100">
        <div className="d-flex w-100 align-items-center justify-content-between gap-3 flex-wrap">
          
          <div className="flex-grow-1">
            <Form className="w-100" style={{ minWidth: "200px", maxWidth: "400px" }}>
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
                    placeholder="How can we help you?"
                    className="form-control border-0 shadow-none bg-transparent"
                  />
                  <img src="/search.png" alt="Search" width="25" height="25" className="ms-2" />
                </div>
              </Form.Group>
            </Form>
          </div>

        
          <div style={{ minWidth: "150px", maxWidth: "200px" }}>
            <Form className="w-100">
              <Form.Group className="input-group">
                <div
                  className="d-flex align-items-center w-100 rounded-pill px-2"
                  style={{
                    backgroundColor: "#FFBE5D",
                    padding: "5px",
                    border: "none",
                  }}
                >
                  <Form.Control type="text" className="form-control border-0 shadow-none bg-transparent" />
                  <img src="/image.png" alt="Image" width="25" height="25" className="ms-2" />
                </div>
              </Form.Group>
            </Form>
          </div>

          
          <div className="d-flex align-items-center gap-2">
            <img src="/cart.png" width="26" height="26" alt="Cart" />
            <img src="/user.png" width="26" height="26" alt="Profile" />
          </div>
        </div>

        
        {/* <div className="w-100 d-flex justify-content-start mt-2 px-3">
          <Nav className="d-flex gap-3 flex-wrap">
            <Nav.Link href="#">Homes</Nav.Link>
            <Nav.Link href="#">Beauty</Nav.Link>
            <Nav.Link href="#">Automobile</Nav.Link>
            <Nav.Link href="#">Buy/Rent</Nav.Link>
          </Nav>
        </div> */}
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarab

