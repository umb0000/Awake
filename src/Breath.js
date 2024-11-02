import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './output.css';

const Breath = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [isStartEnabled, setIsStartEnabled] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [currentText, setCurrentText] = useState("호흡으로 마음을 진정시켜요.");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [breathPhase, setBreathPhase] = useState('inhale');

  const videoIds = {
    행복: "XppX-npRMvw",
    강아지: "uYJQIKAVBw8",
    고양이: "iKAewWqera8",
    자연: "UV0mhY2Dxr0"
  };

  const categoryEmojis = {
    행복: "😊",
    강아지: "🐶",
    고양이: "🐱",
    자연: "🌳"
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsStartEnabled(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setVideoId(videoIds[category]);
  };

  const handleStartStop = () => {
    if (isCountingDown) {
      setIsCountingDown(false);
      setRemainingTime(null);
      setCurrentText("호흡으로 마음을 진정시켜요.");
    } else {
      const timeInSeconds = selectedTime === '1분' ? 60 : selectedTime === '3분' ? 180 : selectedTime === '5분' ? 300 : 600;
      setRemainingTime(timeInSeconds);
      setIsCountingDown(true);
      setCurrentText("코로 숨을 깊게 들이쉬고...");
      setBreathPhase('inhale'); // 초기화
    }
  };

  useEffect(() => {
    if (isCountingDown && remainingTime > 0) {
      const timerId = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      const breathInterval = setInterval(() => {
        setBreathPhase((prev) => (prev === 'inhale' ? 'exhale' : 'inhale'));
        setCurrentText((prev) =>
          prev === "코로 숨을 깊게 들이쉬고..." ? "입으로 천천히 후~ 내쉬세요." : "코로 숨을 깊게 들이쉬고..."
        );
      }, 5000);

      return () => {
        clearTimeout(timerId);
        clearInterval(breathInterval);
      };
    } else if (remainingTime === 0) {
      setIsCountingDown(false);
      setCurrentText("호흡 완료");
      setBreathPhase('inhale');
    }
  }, [isCountingDown, remainingTime]);

  const playerOptions = {
    height: '200',
    width: '340',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
      start: 1
    }
  };

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-[57px] w-[100%] h-[auto] flex flex-col items-center justify-center py-0 px-[10px] z-10">
        <div className="h-[642px] flex flex-col items-center justify-start gap-[5px] p-[20px]">
          <div className="w-[95%] flex flex-col items-center justify-center gap-[1px] p-[1px]">
            <div className="w-[100%] flex flex-row items-center justify-center px-[16px]">
              <div className="text-[28px] font-bold font-['Pretendard_Variable'] text-[#000]">숨 고르기</div>
            </div>
            <div className="w-[100%] flex flex-row items-center justify-center px-[16px] text-center transition-opacity duration-1000">
              <div className="text-[14px] font-medium text-[#000] opacity-100">
                {currentText}
              </div>
            </div>
          </div>

          {!isCountingDown && (
            <div className="text-[12px] text-[#8090FF] font-medium mt-10">
              힐링 영상 카테고리를 선택하세요
            </div>
          )}

          <div className="w-[95%] flex flex-col items-center justify-start gap-[1px] mt-[1px]">
            {isCountingDown ? (
              <>
                <div className="text-[20px] font-bold text-[#8090FF]">
                  {Math.floor(remainingTime / 60).toString().padStart(2, '0')} : {(remainingTime % 60).toString().padStart(2, '0')}
                </div>
                {videoId && (
                  <YouTube
                    videoId={videoId}
                    opts={playerOptions}
                    onEnd={(e) => e.target.stopVideo()}
                  />
                )}
                <div className={`circle ${breathPhase === 'inhale' ? 'expand' : 'shrink'}`}></div>
              </>
            ) : (
              <>
                <div className="w-[95%] flex justify-center gap-[4px] my-1 mb-5">
                  {Object.keys(videoIds).map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-[80px] h-[35px] flex items-center justify-center rounded-full text-[14px] font-bold font-['Pretendard_Variable'] ${
                        selectedCategory === category ? 'bg-[#8090FF] text-white' : 'bg-white text-[#8090FF]'
                      } border border-[#8090FF]`}
                    >
                      <span className="mr-0.5">{categoryEmojis[category]}</span> {category}
                    </button>
                  ))}
                </div>

                <img
                  className="w-full max-w-[340px] bg-[#ECB838] mb-1"
                  src={process.env.PUBLIC_URL + "/img/clock.png"}
                  alt="clock"
                />

                <div className="w-[80%] flex justify-center p-[10px] gap-[10px] mb-5">
                  {['1분', '3분', '5분', '10분'].map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      style={{
                        backgroundColor: selectedTime === time ? '#FFBF19' : 'white',
                        color: selectedTime === time ? 'white' : '#FFBF19',
                        border: selectedTime === time ? 'none' : '1px solid #FFBF19',
                      }}
                      className="w-full py-2 rounded-[10px] text-[16px] font-['Pretendard_Variable'] font-bold flex items-center justify-center cursor-pointer"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </>
            )}

            <button
              onClick={handleStartStop}
              style={{
                backgroundColor: isStartEnabled ? '#8090FF' : '#d3d3d3',
                color: '#FFFFFF',
              }}
              className="w-[266px] h-[40px] flex items-center justify-center rounded-full font-['Pretendard_Variable'] font-medium"
              disabled={!isStartEnabled && !isCountingDown}
            >
              <div className="text-[11px]">{isCountingDown ? '멈추기' : '시작하기'}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breath;
