import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LOGO from './pages/login';
import Sample from './pages/Sample';
import CONTACT from './pages/contact';
import ACCOUNT from './pages/MyAccount';
import ABDUL from './pages/abdul';
import Oops from './pages/oops';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ChefModal from "./components/popup/ChefModal";
import WomanSalon from './pages/WomanSalon';
import CHEF from "./pages/chefforparty";
import CheckoutPage from './pages/checkoutPage';
import SalonPopUp from './components/popup/SalonPopUp';
import Chefformeal from "./pages/chefformeal";
import Chefformonth from "./pages/chefformonth";
import WomenSpa from './pages/WomenSpa';
import HairStudioo from './pages/HairStudioo';
import Appliance from './pages/Appliance';
import ACRepair from './pages/ACRepair';
import TVRepair from './pages/TVRepair';
import FanRepair from './pages/FanRepair';
import WashingMachineRepair from './pages/WashingMachineRepair';

// ModalContent Component to wrap any component inside a Modal
const ModalContent = ({ component }) => {
  return (
    <modal isOpen={true}>
      {component}
    </modal>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGO />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/c" element={<CONTACT />} />
        <Route path="/d" element={<ACCOUNT />} />
        <Route path="/abdul" element={<ABDUL />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Route that shows a modal with the Slot component */}
        <Route path="/ooops" element={<ModalContent component={<Oops />} />} />
        <Route path="/sample" element={<Sample/>}/>
        <Route path="/salon" element={<WomanSalon />} />
        <Route path="/chef" element={<CHEF />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/popup" element={<SalonPopUp />} />
        <Route path="/chef-meal" element={<Chefformeal />} />
        <Route path="/chef-modal" element={<ChefModal />} />
        <Route path="/chef-month" element={<Chefformonth />} />
        <Route path="/spawomen" element={<WomenSpa/>} />
        <Route path="/hairstudio" element={<HairStudioo/>} />
        <Route path="/appliance" element={<Appliance/>} />
        <Route path="/acrepair" element={<ACRepair/>} />
        <Route path="/tvrepair" element={<TVRepair/>} />
        <Route path="/fanrepair" element={<FanRepair/>} />
        <Route path="/washing" element={<WashingMachineRepair/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
