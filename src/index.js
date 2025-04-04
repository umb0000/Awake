import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Anxiety from './Anxiety/Anxiety';
import reportWebVitals from './reportWebVitals';
import Angry from './angry/angry';
import Main from './main'; // Main 컴포넌트에 LevelUpPopup을 포함할 예정
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
import InsultFeedbackExample from './angry/insultPrevent.js';
import Forest from './forest/forest.js';
import AnxietyBookIndex from './Anxiety/AnxietyBookIndex.js';
import Profile from './Profile';
import Back from './go_back';
import Join from './login/join.js';
import LoginLoading from './login/loginLoading.js';
import Unlogined from './login/unlogined.js';
import Login from './login/login.js'
import Help from './Help.js'
import HelpList from './HelpList.js'
import HelpListCheck from './HelpListCheck.js'
import Collect from './Collect.js'
import Explain1 from './Explain1.js'
import Explain2 from './Explain2.js'
import Explain3 from './Explain3.js'
import Center from './center';
import ActivityTable from './test';
import GenerateImage from './ai.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/*로그인 및 오프닝*/}
        <Route path='/join' element={<Join/>} />
        <Route path='/LoginLoading' element={<LoginLoading/>} />
        <Route path='/Unlogined' element={<Unlogined/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/test' element={<ActivityTable/>} />
        <Route path='/ai' element={<GenerateImage/>} />


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
        <Route path="/Help" element={<><Back /><Help /></>} />
        <Route path="/HelpList" element={<><Back /><HelpList /></>} />
        <Route path="/HelpListCheck" element={<><Back /><HelpListCheck /></>} />
        <Route path="/Collect" element={<><Back /><Collect /></>} />
        <Route path="/Explain1" element={<><Back /><Explain1 /></>} />
        <Route path="/Explain2" element={<><Back /><Explain2 /></>} />
        <Route path="/Explain3" element={<><Back /><Explain3 /></>} />
        <Route path="/Center" element={<><Back /><Center /></>} />

        {/* 네비게이션을 포함한 모든 다른 라우트 */}
        <Route
          path="*"
          element={
            <div className="main-content pb-[80px]">
              <Routes>
                <Route path="/" element={<Main />} />

                {/* Kit 네비게이션을 추가한 라우트 */}
                <Route path="/Kit" element={<Kit />}>
                  <Route path="Forest" element={<Forest />} />
                  <Route path="Anxiety" element={<Anxiety />} />
                  <Route path="Angry" element={<Angry />} />
                  <Route path="Depression" element={<Depression />} />
                </Route>

                <Route path="/main" element={<Main />} />
                <Route path="/Anxiety" element={<Anxiety />} />
                <Route path="/Angry" element={<Angry />} />
                <Route path="/Depression" element={<Depression />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/Center" element={<Center />} />
              </Routes>
              <Navigation />
            </div>
          }
        />
      </Routes>

    </Router>
  </React.StrictMode>
);
