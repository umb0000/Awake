import { useState } from 'react';
import './output.css'; // 스타일 시트를 포함

const Breath = () => {
  const [selectedTime, setSelectedTime] = useState(null); // 선택된 시간 저장
  const [isStartEnabled, setIsStartEnabled] = useState(false); // 시작하기 버튼 활성화 여부

  // 시간 버튼 클릭 시 처리
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsStartEnabled(true); // 시간 선택 시 시작하기 버튼 활성화
  };

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단 영역 */}
      <div className="absolute left-0 top-[57px] w-[100%] h-[646px] flex flex-col items-center justify-center py-0 px-[10px]">
        <div className="h-[642px] flex flex-col items-center justify-start gap-[30px] p-[10px]">

          {/* 제목과 설명 */}
          <div className="w-[95%] flex flex-col items-center justify-center gap-[3px]">
            <div className="w-[100%] flex flex-row items-center justify-center p-[5px] px-[16px]">
              <div className="text-[24px] font-bold text-[#000]">숨 고르기</div>
            </div>
            <div className="w-[100%] flex flex-row items-center font-['Pretendard_Variable'] justify-center py-0 px-[16px]">
              <div className="text-[11px] font-light text-[#000] text-center">
                분노로 가득 찬 마음을 잠시 진정시켜요.
              </div>
            </div>
          </div>

          {/* 시간 선택 버튼 */}
          <div className="w-[80%] h-auto flex justify-center  p-[10px] gap-[10px]">
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

          {/* clock 이미지와 시작하기 버튼 */}
          <div className="w-[95%] flex flex-col items-center justify-start gap-[10px]">
            {/* clock 이미지 */}
            <img
              className="w-full max-w-[340px]"
              src={process.env.PUBLIC_URL + "/img/clock.png"} // 이미지 경로 수정
              alt="clock"
            />
            
            {/* 시작하기 버튼 */}
            <button
              style={{
                backgroundColor: isStartEnabled ? '#8090FF' : '#d3d3d3',
                color: isStartEnabled ? '#FFFFFF' : '#FFFFFF',
              }}
              className="w-[266px] h-[40px] flex items-center justify-center rounded-[15px] font-['Pretendard_Variable'] font-medium"
              disabled={!isStartEnabled} // 버튼 비활성화
            >
              <div className="text-[11px]">시작하기</div>
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Breath;
