import React, { useState, useEffect } from 'react';
import '../output.css';

const Move = () => {
  const actions = [
    "노래 들으며 몸 흔들기",
    "창문 열어 환기하기",
    "청소기 돌리기",
    "스트레칭 하기",
    "팔굽혀펴기 10회",
    "책상 정리하기",
    "컵에 물 채우기",
    "가벼운 런닝 제자리에서",
  ];

  const [currentAction, setCurrentAction] = useState('');
  const [timer, setTimer] = useState(60); // 60초 타이머
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('시작');

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
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleButtonClick = () => {
    if (isRunning) {
      setIsRunning(false);
      setButtonText('시작');
    } else {
      setIsRunning(true);
      setButtonText('완료');
    }
  };

  return (
    <div className="w-[360px] h-[800px] pb-[97px] bg-white flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch h-[646px] px-2.5 flex-col justify-center items-center pt-8 gap-4 inline-flex">
        <div className="p-2.5 flex-col justify-start items-center gap-4 flex mt-[20px]">
          <div className="w-[340px] h-[53px] px-5 flex-col justify-center items-center gap-[3px] flex">
            <div className="w-[340px] h-[30px] px-4 justify-center items-center gap-[26px] inline-flex">
              <div className="w-[115px] text-black text-2xl font-bold font-['Pretendard'] leading-normal tracking-wide">
                몸 움직이기
              </div>
            </div>
            <div className="w-[340px] h-4 px-4 justify-center items-center gap-px inline-flex">
              <div className="w-[254px] h-4 text-center text-black text-[11px] font-light font-['Pretendard'] leading-normal tracking-wide">
                랜덤으로 표시되는 행동을 1분 안에 완료하세요!
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[549px] flex-col justify-start items-center gap-2.5 flex">
            <div className="self-stretch h-[500px] justify-center items-start gap-2.5 inline-flex">
              <div className="w-[339.50px] h-[485px] relative">
                <img
                  className="w-[339.50px] h-[485px] left-0 top-0 absolute object-cover"
                  src="/img/move_body.png"
                  alt="move-body"
                />
                <div className="w-[47px] h-[47px] left-[145.75px] top-[161px] absolute justify-center items-center inline-flex">
                  <img className="w-[47px] h-[47px]" src="/img/emoji_cat.png" alt="emoji icon" />
                </div>
                {/* 타이머 */}
                <div className={`w-[145.23px] h-[33px] left-[96.75px] top-[250px] absolute text-center ${timer <= 10 ? 'text-red-500' : 'text-[#ff845a]'} text-4xl font-bold font-['Pretendard'] leading-normal tracking-wide`}>
                  {`0${Math.floor(timer / 60)} : ${timer % 60 === 0 ? '00' : timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`}
                </div>
                {/* 랜덤 액션 */}
                <div className="w-[145.23px] h-[23px] p-[19px] left-[96.75px] top-[213px] absolute bg-[#ff9d7b] rounded flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[125px] text-center text-white text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">
                    {currentAction}
                  </div>
                </div>
              </div>
            </div>
            {/* 버튼 */}
            <div className="w-[266px] h-[35px] p-1.5 bg-[#ffdade] rounded-[15px] justify-center items-center gap-1.5 inline-flex">
              <button onClick={handleButtonClick} className="w-[254px] h-4 text-center text-black text-[11px] font-medium font-['Pretendard'] leading-normal tracking-wide">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Move;
