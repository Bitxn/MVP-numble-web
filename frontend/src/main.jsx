import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Output from './Output'; // ⬅️ NEW component
import WhatItDoes from './pages/WhatItDoes';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUs from './pages/AboutUs';
import GetApp from './pages/GetApp';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/output" element={<Output />} />
        <Route path="/what-it-does" element={<WhatItDoes />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/get-app" element={<GetApp />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
