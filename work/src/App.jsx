import LOGO from './pages/login';
import CONTACT from './pages/contact';
import ACCOUNT from './pages/MyAccount';
import ABOUT from './pages/about';
import ABDUL from './pages/abdul';
import Oops from './pages/oops';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGO/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/c" element={<CONTACT/>} />
        <Route path="/d" element={<ACCOUNT/>} />
        <Route path="/a" element={<ABOUT/>} />
        <Route path="/abdul" element={<ABDUL/>} />
        <Route path="/oops" element={<Oops/>} />
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
