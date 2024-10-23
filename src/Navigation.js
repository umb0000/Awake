import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './output.css';

const Navigation = () => {
  const [activeButton, setActiveButton] = useState('home');
  const navigate = useNavigate(); // 리액트 라우터의 useNavigate 훅 사용

  const handleButtonClick = (buttonName, path) => {
    setActiveButton(buttonName); // 클릭된 버튼 상태 업데이트
    navigate(path); // 해당 경로로 이동
  };

  return (
    <div>
      {/* 상단 상태 표시 */}
      <div className="fixed left-0 top-[0px] w-[100%] h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px]">
        <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>
        <img width="46" height="17" src={process.env.PUBLIC_URL + "/img/right_iconsI1_276.png"} alt="status icons" />
      </div>

      {/* 하단 네비게이션 바 */}
      <div className="fixed left-0 w-[100%] bottom-[0px] h-[70px] flex flex-row items-start justify-center gap-[20px] py-0 px-[8px] bg-[#fff] border-[0px] border-solid border-[#d9d9d9] shadow-[0_1px_3px_1px_#00000026]">
        
        {/* 홈 버튼 */}
        <button onClick={() => handleButtonClick('home', '/main')}>
          <img
            width="64"
            height="64"
            src={activeButton === 'home' ? process.env.PUBLIC_URL + "/img/nav_home_clicked.png" : process.env.PUBLIC_URL + "/img/nav_home_unclicked.png"}
            alt="nav home"
          />
        </button>
        
        {/* 캘린더 버튼 */}
        <button onClick={() => handleButtonClick('calendar', '/calendar')}>
          <img
            width="64"
            height="64"
            src={activeButton === 'calendar' ? process.env.PUBLIC_URL + "/img/nav_calender_clicked.png" : process.env.PUBLIC_URL + "/img/nav_calender_unclicked.png"}
            alt="nav calendar"
          />
        </button>
        
        {/* 키트 버튼 */}
        <button onClick={() => handleButtonClick('kit', '/kit/anxiety')}>
          <img
            width="64"
            height="64"
            src={activeButton === 'kit' ? process.env.PUBLIC_URL + "/img/nav_kit_clicked.png" : process.env.PUBLIC_URL + "/img/nav_kit_unclicked.png"}
            alt="nav kit"
          />
        </button>
        
        {/* 프로필 버튼 */}
        <button onClick={() => handleButtonClick('profile', '/profile')}>
          <img
            width="64"
            height="64"
            src={activeButton === 'profile' ? process.env.PUBLIC_URL + "/img/nav_my_clicked.png" : process.env.PUBLIC_URL + "/img/nav_my_unclicked.png"}
            alt="nav profile"
          />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
