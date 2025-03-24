import React from "react";
import NavbarOne from "../components/NavbarOne";
import SalonServices from "../components/SalonServices";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";

function WomanSalon() {
  return (
    <div className="d-flex flex-column p-2 m-2" style={{ minHeight: "100vh" }}>
     
      <NavbarOne />
      
      <Banner />

      <div className="flex-grow-1">
        <SalonServices />
      </div>

      <div className="mt-0 pt-0"> 
        <Footer />
      </div>
      <Copyright />
    </div>
  );
}

export default WomanSalon;
