import { useState, useEffect, useRef } from 'react';
import './output.css'; // 스타일 시트를 포함

const Breath = () => {
  const [selectedTime, setSelectedTime] = useState(null); // 선택된 시간 저장
  const [isStartEnabled, setIsStartEnabled] = useState(false); // 시작하기 버튼 활성화 여부
  const [isCountingDown, setIsCountingDown] = useState(false); // 카운트다운 여부
  const [remainingTime, setRemainingTime] = useState(null); // 남은 시간
  const [currentText, setCurrentText] = useState("호흡으로 마음을 진정시켜요."); // 초기 텍스트
  const [fadeClass, setFadeClass] = useState("opacity-100"); // 페이드 효과를 위한 클래스
  const [hasInitialTextShown, setHasInitialTextShown] = useState(false); // 초기 텍스트가 표시되었는지 여부

  const audioRef = useRef(null); // 오디오를 위한 참조

  // 음악 파일 초기화
  useEffect(() => {
    audioRef.current = new Audio(process.env.PUBLIC_URL + "/audio/breath.mp3"); // 음악 파일 경로
  }, []);

  // 음악 재생 함수
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play();
    }
  };

  // 음악 페이드아웃 함수
  const fadeOutAudio = () => {
    if (audioRef.current) {
      let fadeInterval = setInterval(() => {
        if (audioRef.current.volume > 0.01) {
          audioRef.current.volume -= 0.01;
        } else {
          clearInterval(fadeInterval);
          audioRef.current.pause(); // 음악을 멈춤
        }
      }, 50); // 볼륨을 천천히 줄임
    }
  };

  // 시간 버튼 클릭 시 처리
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsStartEnabled(true); // 시간 선택 시 시작하기 버튼 활성화
  };

  // 시작하기/멈추기 버튼 클릭 시 처리
  const handleStartStop = () => {
    if (isCountingDown) {
      // 멈추기 로직
      fadeOutAudio(); // 음악 페이드아웃
      setIsCountingDown(false);
      setRemainingTime(null); // 타이머 초기화
      setCurrentText("호흡으로 마음을 진정시켜요."); // 초기 텍스트로 복귀
      setHasInitialTextShown(false); // 초기 텍스트 리셋
    } else {
      // 시작하기 로직
      const timeInSeconds = selectedTime === '1분' ? 60 : selectedTime === '3분' ? 180 : selectedTime === '5분' ? 300 : 600;
      setRemainingTime(timeInSeconds);
      setIsCountingDown(true);
      setCurrentText("코로 숨을 깊게 들이쉬고..."); // 타이머 시작과 동시에 텍스트 변경
      setHasInitialTextShown(true); // 초기 텍스트가 표시되었음을 기록
      playAudio(); // 음악 재생
    }
  };

  // 카운트다운 타이머
  useEffect(() => {
    if (isCountingDown && remainingTime > 0) {
      const timerId = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timerId); // 컴포넌트 언마운트 시 타이머 정리
    } else if (remainingTime === 0) {
      setIsCountingDown(false); // 타이머가 끝나면 멈춤
      setCurrentText("코로 숨을 깊게 들이쉬고... 입으로 천천히 후~ 내쉬세요."); // 카운트다운 종료 시 텍스트 고정
      fadeOutAudio(); // 음악 페이드아웃
    }
  }, [isCountingDown, remainingTime]);

  // 텍스트 번갈아가며 표시 및 애니메이션 처리
  useEffect(() => {
    if (isCountingDown) {
      let toggle = !hasInitialTextShown; // 초기 텍스트가 이미 표시되었는지 여부에 따라 시작을 결정
      const textInterval = setInterval(() => {
        setFadeClass("opacity-0"); // 투명도 설정 (페이드 아웃)

        setTimeout(() => {
          if (toggle) {
            setCurrentText("코로 숨을 깊게 들이쉬고...");
          } else {
            setCurrentText("입으로 천천히 후~ 내쉬세요.");
          }
          setFadeClass("opacity-100"); // 다시 나타나도록 설정 (페이드 인)
          toggle = !toggle;
        }, 1000); // 페이드 아웃 후 텍스트 변경
      }, 5000); // 5초마다 텍스트 변경

      return () => clearInterval(textInterval); // 컴포넌트 언마운트 시 정리
    }
  }, [isCountingDown, hasInitialTextShown]);

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단 영역 */}
      <div className="absolute left-0 top-[57px] w-[100%] h-[auto] flex flex-col items-center justify-center py-0 px-[10px]">
        <div className="h-[642px] flex flex-col items-center justify-start gap-[30px] p-[20px]">

          {/* 제목과 설명 */}
          <div className="w-[95%] flex flex-col items-center justify-center gap-[5px] p-[10px] ">
            <div className="w-[100%] flex flex-row items-center justify-center px-[16px]">
              <div className="text-[28px] font-bold font-['Pretendard_Variable'] text-[#000]">숨 고르기</div>
            </div>
            <div className={`w-[100%] flex flex-row items-center font-['Pretendard_Variable'] justify-center px-[16px] transition-opacity duration-1000 ${fadeClass}`}>
              <div className="text-[14px] font-medium text-[#000] text-center">
                {currentText}
              </div>
            </div>
          </div>

          {/* clock 이미지와 타이머/시간 선택 버튼 */}
          <div style={{marginTop : '5%'}} className="w-[95%] flex flex-col items-center justify-start gap-[10px]">
            {/* clock 이미지 */}
            <img
              className="w-full max-w-[340px]"
              src={process.env.PUBLIC_URL + "/img/clock.png"} // 이미지 경로 수정
              alt="clock"
            />

            {/* 타이머 또는 시간 선택 버튼 */}
            {isCountingDown ? (
              // 카운트다운 표시
              <div className="text-[40px] font-bold text-[#8090FF]">
                {Math.floor(remainingTime / 60)
                  .toString()
                  .padStart(2, '0')} : {(
                  remainingTime % 60
                )
                  .toString()
                  .padStart(2, '0')}
              </div>
            ) : (
              // 시간 선택 버튼
              <div style={{marginTop : '5%'}} className="w-[80%] h-auto flex justify-center p-[10px] gap-[10px]">
                {['1분', '3분', '5분', '10분'].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    style={{
                      backgroundColor: selectedTime === time ? '#8090FF' : 'white',
                      color: selectedTime === time ? 'white' : '#8090FF',
                      border: selectedTime === time ? 'none' : '1px solid #8090FF',
                    }}
                    className="w-[100%] h-auto rounded-[10px] text-[16px] font-['Pretendard_Variable'] font-bold flex items-center justify-center cursor-pointer"
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}

            {/* 시작하기/멈추기 버튼 */}
            <button
              onClick={handleStartStop}
              style={{
                backgroundColor: isStartEnabled ? '#8090FF' : '#d3d3d3',
                color: '#FFFFFF',
              }}
              className="w-[266px] h-[40px] flex items-center justify-center rounded-[15px] font-['Pretendard_Variable'] font-medium"
              disabled={!isStartEnabled && !isCountingDown} // 카운트다운 중엔 비활성화 안 함
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
