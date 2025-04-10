import React from "react";
import NavbarOne from "../components/NavbarOne";
import SalonServices from "../components/SalonServices";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import MakeUp from "../components/MakeUp";

function Makeup() {
  return (
    <div className="d-flex flex-column p-2 m-2" style={{ minHeight: "100vh" }}>
     
      <NavbarOne />
    <div className=""><Banner /></div>
      
    
      <div className="flex-grow-1">
        <MakeUp />
      </div>

      <div className="mt-0 pt-0"> 
        <Footer />
      </div>
      <Copyright />
    </div>
  );
}

export default Makeup;
