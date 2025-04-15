import React from "react";
import NavbarOne from "../components/NavbarOne";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import HouseholdCleaning from "../components/HouseholdCleaning"; // Add this import
import "../styles/household.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Household(){
    return (
         <div className="d-flex flex-column p-2 m-0" style={{ minHeight: "100vh" }}>
             <NavbarOne />
             
             <div 
                className="container-fluid rounded-4 mt-2 py-5 px-3 px-sm-5 text-center shadow-sm"
                style={{ 
                    backgroundColor: '#FDCC82',
                    fontFamily: 'Salsa, cursive'
                }}
             >
                <div className="text-start d-block d-md-none">
                    <h1>Find the Best !!</h1>
                </div>
                <h1 className="d-block d-none d-md-block text-dark text-md-end mb-0 display-3 ms-5 ps-5" 
                    style={{ fontWeight: 400 }}>
                    Deep Cleaning Services For A Spotless Home
                </h1>
             </div>

    
             <div className="container-fluid rounded-4 mt-2 mx-0 px-md-4" style={{backgroundColor:'#FFC794'}}>
      <h2 className="text-center text-dark mb-5 display-5 mt-5" style={{ 
        fontFamily: 'Salsa', 
    
        fontWeight: 400
      }}>
        Household Cleaning
      </h2>
      <div className="px-0"><HouseholdCleaning /></div>
      </div>

             <div className="mt-0 pt-0"> 
                <Footer />
             </div>
             <Copyright />
         </div>
    );
}

export default Household;