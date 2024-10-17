import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CoverPage from './pages/CoverPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import DronePage from './pages/DronePage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/sf-photography" element={<CoverPage />} />
        <Route path="/sf-photography/welcome" element={<WelcomePage />} />
        <Route path="/sf-photography/drone" element={<DronePage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
