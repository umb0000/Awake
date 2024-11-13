import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../output.css';

const Move = () => {
  const actions = [
    "노래 들으며 춤추기",
    "창문 열어 환기하기",
    "청소기 돌리기",
    "스트레칭 하기",
    "어깨돌리기 10회",
    "세수하기",
    "컵에 물 채우기",
    "제자리에서 폴짝",
  ];

  const [currentAction, setCurrentAction] = useState('');
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('시작');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * actions.length);
    setCurrentAction(actions[randomIndex]);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsRunning(false);
      setShowSuccessPopup(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  useEffect(() => {
    if (timer === 5) {
      const warningSound = new Audio('/img/Analog Watch Alarm Sound.mp3');
      warningSound.play();
    }
  }, [timer]);

  const handleButtonClick = () => {
    if (isRunning) {
      setIsRunning(false);
      setButtonText('시작');
      if (timer > 0) {
        setShowSuccessPopup(true);
      }
    } else {
      setIsRunning(true);
      setButtonText('완료');
    }
  };
  const navigate = useNavigate();
  const handleReturnToMain = () => {
    setShowSuccessPopup(false);
    setTimer(60);
    setCurrentAction(actions[Math.floor(Math.random() * actions.length)]);
    setButtonText('시작');
    navigate('/kit/forest'); // 클릭 시 '/kit/forest' 경로로 이동
  };
  return (
    <div className="relative w-full h-[800px] flex flex-col justify-center items-center pt-10">
      <div className="self-stretch h-[646px] flex-col justify-center items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2 flex">
        <div className="w-[95%] h-[53px] flex-col justify-center items-center mb-5 flex text-center">
          <div className="text-black text-[28px] font-bold font-['Pretendard'] leading-normal tracking-wide">
            몸 움직이기
          </div>
          

            <div className="w-[340px] h-4 px-4 justify-center items-center gap-px inline-flex">
              <div className="w-[254px] h-4 text-center text-black text-[12px] font-medium font-['Pretendard'] leading-normal tracking-wide">
                무기력 탈출, 지금 시작하세요!<br />랜덤 행동으로 활력을 찾아봐요
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[500px] flex-col justify-start items-center gap-2 flex">
            <div className="self-stretch h-[350px] justify-center items-start gap-2 inline-flex">
              <div className="w-[330px] h-[330px] relative">
                <img
                  className="w-[330px] h-[330px] left-0 top-0 absolute object-cover"
                  src="/img/move_body.png"
                  alt="move-body"
                />
                <div className="w-[47px] h-[47px] left-[142px] top-[85px] absolute justify-center items-center inline-flex">
                  <img className="w-[47px] h-[47px]" src="/img/emoji_cat.png" alt="emoji icon" />
                </div>
                <div className={`w-[145px] h-[33px] left-[92px] top-[165px] absolute text-center ${timer <= 10 ? 'text-red-500' : 'text-[#ff845a]'} text-4xl font-bold font-['Pretendard'] leading-normal tracking-wide`}>
                  {`0${Math.floor(timer / 60)} : ${timer % 60 === 0 ? '00' : timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`}
                </div>
                <div className="w-[135px] h-[23px] px-2 left-[97px] top-[140px] absolute bg-[#ff9d7b] rounded flex justify-center items-center">
                  <div className="w-[125px] text-center text-white text-[15px] font-bold font-['Pretendard'] leading-normal tracking-wide">
                    {currentAction}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] h-[45px] bg-[#ffdade] rounded-[15px] flex justify-center items-center">
              <button onClick={handleButtonClick} className="w-full h-full text-black text-[15px] font-bold font-['Pretendard'] leading-normal tracking-wide">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 성공 팝업 UI */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 transition-opacity duration-300">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-xs mx-auto flex flex-col items-center">
            <p className="text-[#333333] text-xl font-semibold mb-3">잘하셨어요!</p>
            <p className="text-[#777777] text-sm mb-6 leading-relaxed">
              이렇게라도 몸을 움직이는 게 중요해요.<br />오늘도 한 걸음 더 나아가셨습니다!
            </p>
            <button
              onClick={handleReturnToMain}
              className="w-full bg-[#FFA8A0] text-black font-medium py-3 rounded-lg shadow-md transition-transform duration-200"
            >
              마음숲 홈으로 돌아가기
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Move;
