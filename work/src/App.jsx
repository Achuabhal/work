import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LOGO from './pages/login';
import CONTACT from './pages/contact';
import ACCOUNT from './pages/MyAccount';
import ABDUL from './pages/abdul';
import Oops from './pages/oops';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Modal from "./components/modal"; // Reusable Modal component using CSS modules

// ModalContent Component to wrap any component inside a Modal
const ModalContent = ({ component }) => {
  return (
    <Modal isOpen={true}>
      {component}
    </Modal>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
