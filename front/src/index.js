import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Anxiety from './Anxiety';
import reportWebVitals from './reportWebVitals';
import Angry from './angry';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Anxiety" element={<Anxiety />} />
        <Route path="/Angry" element={<Angry />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
