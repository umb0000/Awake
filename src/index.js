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
import TrashCan_i from './depression/trashcan_inside';
import Move from './depression/move.js';
import Onion from './depression/Onion.js';
import InsultFeedbackExample from './angry/insultPrevent.js'
import Forest from './forest/forest.js'
import AnxietyBookIndex from './Anxiety/AnxietyBookIndex.js'
import Profile from './Profile'
import Back from './go_back';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* 뒤로가기 버튼이 필요한 페이지 */}
        <Route path="/AnxietyBook" element={<><Back /><AnxietyBook /></>} />
        <Route path="/AnxietyBook2/:id" element={<><Back /><AnxietyBook2 /></>} />
        <Route path="/Breath" element={<><Back /><Breath /></>} />
        <Route path="/ConflictResolution" element={<><Back /><ConflictResolution /></>} />
        <Route path="/ConflictBoard" element={<><Back /><ConflictBoard /></>} />
        <Route path="/ConflictBoardadd" element={<><Back /><ConflictBoardadd /></>} />
        <Route path="/trashcan" element={<><Back /><TrashCan /></>} />
        <Route path="/trashcan_i" element={<><Back /><TrashCan_i /></>} />
        <Route path="/move" element={<><Back /><Move /></>} />
        <Route path="/onion" element={<><Back /><Onion /></>} />
        <Route path="/insult" element={<><Back /><InsultFeedbackExample /></>} />
        <Route path="/forest" element={<><Back /><Forest /></>} />
        <Route path="/AnxietyBookIndex" element={<><Back /><AnxietyBookIndex /></>} />


        {/* 네비게이션을 포함한 모든 다른 라우트 */}
        <Route
          path="*"
          element={
            <div className="main-content pb-[80px]">
              <Routes>
                {/* Main 라우트 */}
                <Route path="/" element={<Main />} />

                {/* Kit 네비게이션을 추가한 라우트 */}
                <Route path="/Kit" element={<Kit />}>
                  {/* Kit 하위 라우트 */}
                  <Route path="Forest" element={<Forest />} />
                  <Route path="Anxiety" element={<Anxiety />} />
                  <Route path="Angry" element={<Angry />} />
                  <Route path="Depression" element={<Depression />} />
                </Route>

                {/* 개별 경로에 대한 라우트 */}
                <Route path="/main" element={<Main />} />
                <Route path="/Anxiety" element={<Anxiety />} />
                <Route path="/Angry" element={<Angry />} />
                <Route path="/Depression" element={<Depression />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/profile" element={<Profile />} />
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
