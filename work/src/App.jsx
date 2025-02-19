import LOGO from './pages/login';
import CONTACT from './components/contact';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LOGO/>} />
        <Route path="/" element={<CONTACT/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
