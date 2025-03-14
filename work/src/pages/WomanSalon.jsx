import React from 'react'
import NavbarOne from '../components/NavbarOne'
import SalonServices from '../components/SalonServices'
import Copyright from '../components/Copyright'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import "bootstrap/dist/css/bootstrap.min.css";


function WomanSalon() {
  return (
    <div>
      <NavbarOne/>
      <Banner/>
      <div className="mt-3 pb-4 mb-4">
      <SalonServices/>
      </div>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default WomanSalon;
