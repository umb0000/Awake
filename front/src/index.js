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
import Kit from './Kit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="main-content pb-[80px]">
        <Routes>
          {/* Main 라우트 */}
          <Route path="/" element={<Main />} />

          {/* Kit 네비게이션을 추가한 라우트 */}
          <Route path="/Kit" element={<Kit />}>
            {/* Kit 하위 라우트 */}
            <Route path="Anxiety" element={<Anxiety />} />
            <Route path="Angry" element={<Angry />} />
            <Route path="Depression" element={<Depression />} />
          </Route>

          {/* 개별 경로에 대한 라우트 */}
          <Route path="/main" element={<Main />} />
          <Route path="/Anxiety" element={<Anxiety />} />
          <Route path="/Angry" element={<Angry />} />
          <Route path="/Depression" element={<Depression />} />
        </Routes>
      </div>

      {/* Navigation 컴포넌트 */}
      <Navigation />
    </Router>
  </React.StrictMode>
);
