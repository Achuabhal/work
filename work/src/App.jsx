import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/login';
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
import Checkouts from './pages/checkoutPages';
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
import GeyserRepair from './pages/GeyserRepair';
import InverterRepair from './pages/InverterRepair';
import IronRepair from './pages/IronRepair';
import LaptopsAndMobileRepair from './pages/LaptopsAndMobileRepair';
import ChimneyRepair from './pages/ChimneyRepair';
import WaterPurifierRepair from './pages/WaterPurifierRepair';
import GasStoveRepair from './pages/GasStoveRepair';
import InductionRepair from './pages/InductionRepair';
import RefrigeratorRepair from './pages/RefrigeratorRepair';
import MixerRepair from './pages/MixerRepair';
import MicrowaveRepair from './pages/MicrowaveRepair';
import DishwasherRepair from './pages/DishwasherRepair';
import ApplianceModal from './components/popup/ApplianceModal';
import MenSalon from './pages/MenSalon';
import MenMassage from './pages/MenMassage';
import Makeup from './pages/Makeup';
import FourWheeler from './pages/FourWheeler';
import TwoWheeler from './pages/TwoWheeler';
import TwoWheelerPopUp from './components/popup/TwoWheelerPopUp';
import Household from './pages/Household';

import HomeServices from './pages/HomeServices';
import RentalModal from './components/popup/RentalModal';
import BedRental from './pages/BedRental';
import ComingSoonModal from './components/popup/ComingSoonModal';
import Dashboard from './pages/Dashboard';
import PartnerManagement from './pages/PartnerManagement';
import ServiceManagement from './pages/ServiceManagement';
import OrderManagement from './pages/OrderManagement';
import CustomerSupport from './pages/CustomerSupport';
import Analytics from './pages/Analytics';



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
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<CONTACT />} />
        <Route path="/account" element={<ACCOUNT />} />
        <Route path="/abdul" element={<ABDUL />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/about" element={<AboutUs />} />
        {/* Route that shows a modal with the Slot component */}
        <Route path="/ooops" element={<ModalContent component={<Oops />} />} />
        <Route path="/sample" element={<Sample/>}/>
        <Route path="/salon" element={<WomanSalon />} />
        <Route path="/chef" element={<CHEF />} />
        <Route path="/checkout" element={<Checkouts />} />
        <Route path="/popup" element={<SalonPopUp />} />
        <Route path="/chef-meal" element={<Chefformeal />} />
        <Route path="/chef-modal" element={<ChefModal />} />
        <Route path="/chef-month" element={<Chefformonth />} />
        <Route path="/spawomen" element={<WomenSpa/>} />
        <Route path="/hairstudio" element={<HairStudioo/>} />
        <Route path="/household" element={<Household/>}/>
        <Route path="/appliance" element={<Appliance/>} />
        <Route path="/acrepair" element={<ACRepair/>} />
        <Route path="/tvrepair" element={<TVRepair/>} />
        <Route path="/fanrepair" element={<FanRepair/>} />
        <Route path="/washing" element={<WashingMachineRepair/>} />
        <Route path="/geyser" element={<GeyserRepair/>} />
        <Route path="/inverter" element={<InverterRepair/>} />
        <Route path="/iron" element={<IronRepair/>} />
        <Route path="/laptop" element={<LaptopsAndMobileRepair/>} />
        <Route path="/chimney" element={<ChimneyRepair/>} />
        <Route path="/water" element={<WaterPurifierRepair/>} />
        <Route path="/gas" element={<GasStoveRepair/>} />
        <Route path="/induction" element={<InductionRepair/>} />
        <Route path="/fridge" element={<RefrigeratorRepair/>} />
        <Route path="/mixer" element={<MixerRepair/>} />
        <Route path="/oven" element={<MicrowaveRepair/>} />
        <Route path="/dishwasher" element={<DishwasherRepair/>} />
        <Route path="/appliance-modal" element={<ApplianceModal/>} />
        <Route path="/mensalon" element={<MenSalon/>} />
        <Route path="/menmassage" element={<MenMassage/>} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path='/fourwheeler' element={<FourWheeler/>}/>
        <Route path='/twowheeler' element={<TwoWheeler/>}/>   
        <Route path='/twowheelerpopup' element={<TwoWheelerPopUp/>}/> 
        <Route path='/homeservices' element={<HomeServices/>}/>
        {/* Add more routes as needed */}
        <Route path='/rentalmodal' element={<RentalModal/>}/>
        <Route path='/bedrental' element={<BedRental/>}/>
        <Route path='/comingsoon' element={<ComingSoonModal/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/partner' element={<PartnerManagement/>}/>
        <Route path='/service' element={<ServiceManagement/>}/>
        <Route path='/order' element={<OrderManagement/>}/> 
        <Route path='/CustomerSupport' element={<CustomerSupport/>}/>
        <Route path='/analytics' element={<Analytics/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
