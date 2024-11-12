import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './output.css';

const Back = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(2);
  const [animateOut, setAnimateOut] = useState(false);

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const handleBack = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setAnimateOut(false);
      setCurrentStep((prevStep) => prevStep - 1);
      navigate(-1); // 페이지 이동 추가
    }, 500);
  };

  return (
    <div className="relative">
      {/* 상단 상태 표시 */}
      <div className="fixed left-0 top-0 w-full h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px] bg-white z-50">
        <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#1d1b20] whitespace-nowrap">
          9:30
        </div>
        <img
          width="46"
          height="17"
          src={process.env.PUBLIC_URL + "/img/right_iconsI1_276.png"}
          alt="status icons"
        />
      </div>

      {/* 상단 뒤로가기 버튼 */}
      <div className="fixed top-[45px] w-screen h-[45px] flex items-center justify-start py-[5px] px-[23px] bg-transparent z-50">
        <button onClick={handleBack}>
          <img width="12" height="24" src={process.env.PUBLIC_URL + "/img/back.png"} alt="back" />
        </button>
      </div>
    </div>
  );
};

export default Back;
