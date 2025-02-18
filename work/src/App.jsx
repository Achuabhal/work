import LOGO from './pages/login';

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
