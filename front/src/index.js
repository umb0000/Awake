import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Anxiety from './Anxiety';
import reportWebVitals from './reportWebVitals';
import Angry from './angry';
import Main from './main';
import Navigation from './Navigation';
import Depression from './Depression';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <div className="main-content pb-[80px]">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/Anxiety" element={<Anxiety />} />
        <Route path="/Angry" element={<Angry />} />
        <Route path="/Depression" element={<Depression />} />
      </Routes>
      </div>
      <Navigation/>
    </Router>
    
  </React.StrictMode>
);

reportWebVitals();
