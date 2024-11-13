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
    
      {/* 상단 뒤로가기 버튼 */}
      <div className="fixed top-[20px] w-screen h-[30px] flex items-center justify-start py-[5px] px-[23px] bg-transparent z-50">
        <button onClick={handleBack}>
          <img width="12" height="24" src={process.env.PUBLIC_URL + "/img/back.png"} alt="back" />
        </button>
      </div>
    </div>
  );
};

export default Back;
