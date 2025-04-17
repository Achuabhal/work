import React, { useState } from "react";
import NavbarOne from "../components/NavbarOne";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import PopupBox from "../components/popup/HouseholdPopUp";
import "../styles/household.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Household() {
  const [selectedService, setSelectedService] = useState(null);

  const cleaningServices = [
    { id: 1, imageUrl: "/person.png", label: "Sweeping", alt: "Sweeping", price: 299 },
    { id: 2, imageUrl: "/mopping.png", label: "Mopping", alt: "Mopping", price: 349 },
    { id: 3, imageUrl: "/wash.png", label: "Utensil Washing", alt: "Utensil Washing", price: 199 },
    { id: 4, imageUrl: "/toilet.png", label: "Washroom Cleaning", alt: "Washroom Cleaning", price: 399 },
    { id: 5, imageUrl: "/sofa.png", label: "Sofa And Carpet Cleaning", alt: "Sofa And Carpet Cleaning", price: 599 },
    { id: 6, imageUrl: "/home.png", label: "Full House Cleaning", alt: "Full House Cleaning", price: 899 }
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClosePopup = () => {
    setSelectedService(null);
  };

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
        <h1
          className="d-block d-none d-md-block text-dark text-md-end mb-0 display-3 ms-5 ps-5"
          style={{ fontWeight: 400 }}
        >
          Deep Cleaning Services For A Spotless Home
        </h1>
      </div>

      <div className="container-fluid rounded-4 mt-2 mx-0 px-md-4" style={{ backgroundColor: '#FFC794' }}>
        <h2
          className="text-center text-dark mb-5 display-5 mt-5"
          style={{ fontFamily: 'Salsa', fontWeight: 400 }}
        >
          Household Cleaning
        </h2>

        <div className="container mt-5 px-md-3">
          <div className="row">
            {cleaningServices.map((service) => (
              <div key={service.id} className="col-4 mb-4 d-flex">
                <div
                  className="card border-0 bg-transparent cleaning-card w-100"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCardClick(service)}
                >
                  <img
                    src={service.imageUrl}
                    alt={service.alt}
                    className="card-img-top rounded-3"
                  />
                  <div className="card-body p-0 pt-2 text-center">
                    <h6 className="card-title text-dark fw-bold">{service.label}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />

      {/* Popup Modal */}
      {selectedService && (
        <PopupBox
          show={!!selectedService}
          handleClose={handleClosePopup}
          title={selectedService.label}
          image={selectedService.imageUrl}
          price={selectedService.price}
        />
      )}
    </div>
  );
}

export default Household;
