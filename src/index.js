import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Anxiety from './Anxiety/Anxiety';
import reportWebVitals from './reportWebVitals';
import Angry from './angry/angry';
import Main from './main';
import Navigation from './Navigation';
import Depression from './Depression';
import Kit from './Kit';
import AnxietyBook from './Anxiety/AnxietyBook';
import Addtodo from './AddTodo';
import AnxietyBook2 from './Anxiety/AnxietyBook2';
import Breath from './Breath';
import ConflictResolution from './angry/ConflictResolution';
import ConflictBoard from './angry/ConflictBoard';
import ConflictBoardadd from './angry/ConflictBoardadd';
import TrashCan from './depression/trashcan';
import Calender from './calender';

// 서버 주소를 설정합니다.
const SERVER_URL = 'http://112.152.14.116:10201';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Addtodo 라우트 - 네비게이션 제외 */}
        <Route path={`${SERVER_URL}/addTodo`} element={<Addtodo />} />
        <Route path={`${SERVER_URL}/AnxietyBook`} element={<AnxietyBook />} />
        <Route path={`${SERVER_URL}/AnxietyBook2/:id`} element={<AnxietyBook2 />} />
        <Route path={`${SERVER_URL}/Breath`} element={<Breath />} />
        <Route path={`${SERVER_URL}/ConflictResolution`} element={<ConflictResolution />} />
        <Route path={`${SERVER_URL}/ConflictBoard`} element={<ConflictBoard />} />
        <Route path={`${SERVER_URL}/ConflictBoardadd`} element={<ConflictBoardadd />} />
        <Route path={`${SERVER_URL}/trashcan`} element={<TrashCan />} />

        {/* 네비게이션을 포함한 모든 다른 라우트 */}
        <Route
          path="*"
          element={
            <div className="main-content pb-[80px]">
              <Routes>
                {/* Main 라우트 */}
                <Route path={`${SERVER_URL}/`} element={<Main />} />

                {/* Kit 네비게이션을 추가한 라우트 */}
                <Route path={`${SERVER_URL}/Kit`} element={<Kit />}>
                  {/* Kit 하위 라우트 */}
                  <Route path="Anxiety" element={<Anxiety />} />
                  
                  <Route path="Angry" element={<Angry />} />
                  <Route path="Depression" element={<Depression />} />
                </Route>

                {/* 개별 경로에 대한 라우트 */}
                <Route path={`${SERVER_URL}/main`} element={<Main />} />
                <Route path={`${SERVER_URL}/Anxiety`} element={<Anxiety />} />
                <Route path={`${SERVER_URL}/Angry`} element={<Angry />} />
                <Route path={`${SERVER_URL}/Depression`} element={<Depression />} />
                <Route path={`${SERVER_URL}/calender`} element={<Calender />} />
              </Routes>

              {/* Navigation 컴포넌트 */}
              <Navigation />
            </div>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
