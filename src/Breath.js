import { useState, useEffect, useRef } from 'react';
import './output.css';

const Breath = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [breathPhase, setBreathPhase] = useState('inhale');
  const [currentText, setCurrentText] = useState("호흡으로 마음을 진정시켜요.");
  const [isPaused, setIsPaused] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true); // 음악 활성화 상태
  const [textFadeClass, setTextFadeClass] = useState("");
  const audioRef = useRef(null);
  const textIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleStartStop = () => {
    if (isCountingDown) {
      setIsCountingDown(false);
      setIsPaused(true);
      audioRef.current.pause();
      clearInterval(textIntervalRef.current);
      clearInterval(timerIntervalRef.current);
    } else {
      const timeInSeconds = selectedTime === '1분' ? 60 : selectedTime === '3분' ? 180 : selectedTime === '5분' ? 300 : 600;
      setRemainingTime(timeInSeconds);
      setIsCountingDown(true);
      setIsPaused(false);
      setBreathPhase('inhale');
      setCurrentText("코로 숨을 깊게 들이쉬고...");
      audioRef.current.currentTime = 0;
      if (audioEnabled) audioRef.current.play();
      startTextAnimation();
      startTimer();
    }
  };

  const handlePauseResume = () => {
    if (isPaused) {
      setIsPaused(false);
      setIsCountingDown(true);
      if (audioEnabled) audioRef.current.play();
      startTextAnimation();
      startTimer();
    } else {
      setIsPaused(true);
      setIsCountingDown(false);
      audioRef.current.pause();
      clearInterval(textIntervalRef.current);
      clearInterval(timerIntervalRef.current);
    }
  };

  const handleAudioToggle = () => {
    setAudioEnabled((prev) => !prev);
    if (audioEnabled) {
      audioRef.current.pause();
    } else if (!isPaused && isCountingDown) {
      audioRef.current.play();
    }
  };

  const handleExit = () => {
    setIsCountingDown(false);
    setSelectedTime(null);
    setRemainingTime(null);
    setBreathPhase('inhale');
    setCurrentText("호흡으로 마음을 진정시켜요.");
    setIsPaused(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    clearInterval(textIntervalRef.current);
    clearInterval(timerIntervalRef.current);
  };

  const startTextAnimation = () => {
    clearInterval(textIntervalRef.current);
    textIntervalRef.current = setInterval(() => {
      setTextFadeClass("fade-out");
      setTimeout(() => {
        setBreathPhase((prev) => (prev === 'inhale' ? 'exhale' : 'inhale'));
        setCurrentText((prev) =>
          prev === "코로 숨을 깊게\n 들이쉬고..." ? "입으로 천천히\n 후~ 내쉬세요." : "코로 숨을 깊게\n 들이쉬고..."
        );
        setTextFadeClass("fade-in");
      }, 500);
    }, 5000);
  };

  const startTimer = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
  };

  useEffect(() => {
    if (remainingTime === 0 && isCountingDown) {
      setIsCountingDown(false);
      setCurrentText("호흡 완료");
      setBreathPhase('inhale');
      clearInterval(textIntervalRef.current);
      clearInterval(timerIntervalRef.current);

      const fadeOutInterval = setInterval(() => {
        if (audioRef.current.volume > 0.1) {
          audioRef.current.volume -= 0.1;
        } else {
          audioRef.current.pause();
          clearInterval(fadeOutInterval);
        }
      }, 100);

      return () => clearInterval(fadeOutInterval);
    }
  }, [remainingTime, isCountingDown]);

  return (
    <div className="relative w-[100%] h-screen bg-[#fff] overflow-hidden">
      <audio ref={audioRef} src="/audio/breath.mp3" loop />

      {!isCountingDown && !isPaused ? (
        <FirstScreen
          selectedTime={selectedTime}
          onTimeSelect={handleTimeSelect}
          onStart={handleStartStop}
          currentText={currentText}
        />
      ) : (
        <SecondScreen
          remainingTime={remainingTime}
          breathPhase={breathPhase}
          onPauseResume={handlePauseResume}
          onExit={handleExit}
          currentText={currentText}
          isPaused={isPaused}
          textFadeClass={textFadeClass}
          audioEnabled={audioEnabled}
          handleAudioToggle={handleAudioToggle}
        />
      )}
    </div>
  );
};

const FirstScreen = ({ selectedTime, onTimeSelect, onStart, currentText }) => (
  <div className="relative w-full h-[800px] flex flex-col justify-center items-center">
    <div className="h-[642px] flex flex-col items-center justify-start gap-[10px] pt-0">
      <div className="w-[95%] flex flex-col items-center justify-center gap-[1px] p-[1px]">
        <div className="text-[28px] font-bold font-['Pretendard_Variable'] text-[#000]">숨 고르기</div>
        <div className="text-[12px] font-['Pretendard_Variable'] font-medium">호흡으로 몸과 마음을 이완해요</div>
      </div>
      <img className="w-full max-w-[340px] bg-[#ECB838]" src={process.env.PUBLIC_URL + "/img/clock.png"} alt="clock" />
      <div className="w-[80%] flex justify-center p-[10px] gap-[10px] mb-1">
        {['1분', '3분', '5분', '10분'].map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
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
      <div className="w-[80%] flex justify-center p-[10px] gap-[10px] mb-1">

      <button
        onClick={onStart}
        style={{ backgroundColor: selectedTime ? '#8090FF' : '#d3d3d3', color: '#FFFFFF' }}
        className=" bottom-5 w-[266px] h-[40px] flex items-center justify-center rounded-full bg-[#8090FF] text-white font-['Pretendard_Variable'] font-medium hover:bg-[#ff6b6b] transition-colors"
        disabled={!selectedTime}
      >
        <div className="h-[40px] mt-4 text-[15px]">시작하기</div>
      </button>
      </div>
      
    </div>
  </div>
);

const SecondScreen = ({ remainingTime, breathPhase, onPauseResume, onExit, currentText, isPaused, textFadeClass, audioEnabled, handleAudioToggle }) => (
  <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#e0f7fa] to-[#ffffff] p-5">
    <button onClick={onExit} className="absolute top-5 right-5 text-2xl text-gray-500 z-20">✕</button>
    <div className="absolute top-5 left-5 z-20">
    <button onClick={handleAudioToggle}>
      <img 
        src={audioEnabled ? (process.env.PUBLIC_URL + "/img/volume.png") : (process.env.PUBLIC_URL + "/img/mute.png")} 
        alt="audio toggle" 
        className="w-6 h-6" 
      />
    </button>

    </div>
    <div className="absolute top-5 right-[60px] text-[19px] text-[#8090FF]  font-['Pretendard_Variable'] font-bold z-10">
      {Math.floor(remainingTime / 60).toString().padStart(2, '0')} : {(remainingTime % 60).toString().padStart(2, '0')}
    </div>
    <div className="relative flex flex-col items-center justify-center mt-[30vh] z-0">
      <div
        className="circle-container"
        style={{ animation: isPaused ? 'none' : 'pulse 10s ease-in-out infinite' }}
      >
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      <div className={`text-[20px]  font-['Pretendard_Variable'] font-semibold text-gray-700 z-10 ${textFadeClass}`}>
        {currentText}
      </div>
    </div>
    <button
      onClick={onPauseResume}
      className={`relative bottom-20px w-[266px] h-[40px] flex items-center justify-center rounded-full mt-[30vh] fixed ${
        isPaused ? 'bg-[#8090FF]' : 'bg-[#243642]'
      } text-white font-['Pretendard_Variable'] font-medium transition-colors z-10`}
    >
      {isPaused ? '다시 시작하기' : '멈추기'}
    </button>
  </div>
);

export default Breath;
