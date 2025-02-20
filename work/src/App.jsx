import LOGO from './pages/login';
import CONTACT from './pages/contact';
import ACCOUNT from './pages/MyAccount';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGO/>} />
        <Route path="/c" element={<CONTACT/>} />
        <Route path="/d" element={<ACCOUNT/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
