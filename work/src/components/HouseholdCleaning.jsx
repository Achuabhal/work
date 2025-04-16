import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/household.css";

const CleaningCard = ({ imageUrl, label, altText }) => (
    <div className="col-4 mb-4 d-flex">
      <div className="card border-0 bg-transparent cleaning-card w-100">
        <img 
          src={imageUrl}
          alt={altText}
          className="card-img-top rounded-3"
        />
        <div className="card-body p-0 pt-2 text-center">
          <h6 className="card-title text-dark fw-bold">{label}</h6>
        </div>
      </div>
    </div>
  );
  
  const HouseholdCleaning = () => {
    const cleaningServices = [
      { id: 1, imageUrl: "/person.png", label: "Sweeping", alt: "Sweeping" },
      { id: 2, imageUrl: "/mopping.png", label: "Mopping", alt: "Mopping" },
      { id: 3, imageUrl: "/wash.png", label: "Utensil Washing", alt: "Utensil Washing" },
      { id: 4, imageUrl: "/toilet.png", label: "Washroom Cleaning", alt: "Washroom Cleaning" },
      { id: 5, imageUrl: "/sofa.png", label: "Sofa And Carpet Cleaning", alt: "Sofa And Carpet Cleaning" },
      { id: 6, imageUrl: "/home.png", label: "Full House Cleaning", alt: "Full House Cleaning" }
    ];
  
    return (
      <div className="container mt-5 px-md-3">
        <div className="row">
          {cleaningServices.map((service) => (
            <CleaningCard
              key={service.id}
              imageUrl={service.imageUrl}
              label={service.label}
              altText={service.alt}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default HouseholdCleaning;