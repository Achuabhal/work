import LOGO from './pages/login';
import CONTACT from './pages/contact';
import ACCOUNT from './pages/MyAccount';
import ABOUT from './pages/about';
import ABDUL from './pages/abdul';
import Oops from './pages/oops';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGO/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
