import React from "react";
import NavbarOne from "../components/NavbarOne";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import SpaWomen from "../components/SpaWomen";

function WomenSpa() {
  return (
    <div className="d-flex flex-column p-2 m-2" style={{ minHeight: "100vh" }}>
     
      <NavbarOne />
    <div className=""><Banner /></div>
      
    
      <div className="flex-grow-1 min-vh-100">
        <SpaWomen />
      </div>

      <div className="mt-0 pt-0"> 
        <Footer />
      </div>
      <Copyright />
    </div>
  );
}

export default WomenSpa;
