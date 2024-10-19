import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CoverPage from './pages/CoverPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));
const DronePage = React.lazy(() => import('./pages/DronePage'));
const DigitalPage = React.lazy(() => import('./pages/DigitalPage'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/sf-photography'>
      <Suspense fallback={<div> </div>}>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/drone" element={<DronePage />} />
          <Route path="/digital" element={<DigitalPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
