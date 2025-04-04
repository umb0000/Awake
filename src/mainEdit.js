import React, { useState } from 'react';
import './output.css';

const MainEdit = () => {
  const [taskName, setTaskName] = useState('');
  const [isTaskSelected, setIsTaskSelected] = useState(true); 
  const [selectedTime, setSelectedTime] = useState(''); 
  const [isImportant, setIsImportant] = useState(false); 
  const [isUrgent, setIsUrgent] = useState(false); 

  const isFormValid = taskName.trim() !== ''; 

  const handleTaskClick = () => {
    setIsTaskSelected(true);
  };

  const handleRoutineClick = () => {
    setIsTaskSelected(false);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const toggleImportant = () => {
    setIsImportant((prev) => !prev);
  };

  const toggleUrgent = () => {
    setIsUrgent((prev) => !prev);
  };

  const handleSubmit = () => {
    console.log({
      taskName,
      selectedTime,
      isImportant,
      isUrgent
    });
  };

  return (
    <div className="w-[360px] h-[336px] relative">
      <div className="w-[360px] h-[336px] left-0 top-0 absolute" />
      <div className="h-[316px] left-[15px] top-[25px] absolute flex-col justify-start items-start inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
        <div
          onClick={handleTaskClick}
          className={`w-[165px] h-[41px] px-[69px] py-1.5 ${isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'} rounded-tl-[10px] flex justify-center items-center gap-2.5`}
        >
          <div className="text-black text-[13px] font-bold font-['Pretendard']">할 일</div>
        </div>
        <div
          onClick={handleRoutineClick}
          className={`w-[165px] h-[41px] px-[71px] py-1.5 ${!isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'} rounded-tr-[10px] flex justify-center items-center gap-2.5`}
        >
          <div className="text-black text-[13px] font-bold font-['Pretendard']">루틴</div>
        </div>
      </div>

      <div className="self-stretch h-[275px] px-[18px] py-[15px] bg-white flex-col justify-center items-center gap-2.5 flex">
        <div className="h-[232px] flex-col justify-start items-start gap-1.5 flex">
          <div className="w-[290px] h-[42px] px-[13px] py-[3px] bg-[#f4f7f8] inline-flex">
            <input
              type="text"
              placeholder="제목을 입력하세요."
              className="w-full bg-transparent text-[#000] text-[13px] font-bold outline-none"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

         {/* 상태에 따라 다른 버튼 표시 */}
         {!isTaskSelected ? (
              <div className="w-[290px] h-10 justify-center items-start gap-[3.33px] inline-flex">
                {['아침', '점심', '저녁', '종일'].map((time) => (
                  <div
                    key={time}
                    onClick={() => handleTimeClick(time)}
                    className={`w-[70px] h-10 px-[12.7px] py-2 ${selectedTime === time ? 'border-[#ff9800] text-[#ff9800]' : 'bg-white text-black'} rounded-[5px] border border-[#f4f7f8] justify-center items-center gap-[9px] flex`}
                  >
                    <div className="w-[44.43px] h-[22.56px] text-center text-xs font-bold font-['Pretendard'] leading-7">
                      {time}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-[290px] justify-start items-start gap-[5px] inline-flex">
                <div
                  onClick={toggleImportant}
                  className={`w-[142px] h-10 px-[49px] py-2 ${isImportant ? 'border-[#ff9800] text-[#ff9800]' : 'bg-white text-black'} rounded-[5px] border border-[#f4f7f8] justify-center items-center gap-2.5 flex`}
                >
                  <div className="w-[44.43px] h-[22.56px] text-center text-xs font-bold font-['Pretendard'] leading-7">
                    중요 🚩
                  </div>
                </div>
                <div
                  onClick={toggleUrgent}
                  className={`w-[142px] h-10 px-9 py-[9px] ${isUrgent ? 'border-[#ff9800] text-[#ff9800]' : 'bg-white text-black'} rounded-[5px] border border-[#f4f7f8] justify-center items-center gap-2.5 flex`}
                >
                  <div className="w-[49px] h-[22px] text-center text-xs font-bold font-['Pretendard'] leading-7">
                    긴급 🚨
                  </div>
                </div>
              </div>
            )}


<div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex">
              <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">반복</div>
              <div className="w-[98px] h-7 relative">
                <img className="w-3 h-3.5 left-[86px] top-[7px] absolute" src="https://via.placeholder.com/12x14" />
                <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Pretendard_Variable'] leading-7">
                  한 번만
                </div>
              </div>
            </div>

            <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex">
          <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">날짜</div>
          <div className="w-[98px] h-7 relative">
            <img className="w-3 h-3.5 left-[86px] top-[7px] absolute" src="https://via.placeholder.com/12x14" />
            <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Pretendard_Variable'] leading-7">8월 24일</div>
          </div>
        </div>

        <div class="w-[290px] justify-start items-start gap-[5px] inline-flex">
          <div class="w-[142px] h-10 px-[49px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
            <div class="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">삭제하기</div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-[142px] h-10 px-9 py-[9px] rounded-sm justify-center items-center gap-2.5 flex ${isFormValid ? 'bg-[#FF9800]' : 'bg-[#d9d9d9]'}`}
          >
            <div class="w-[51px] h-[22px] text-center text-white text-xs font-bold font-['Pretendard'] leading-7">수정하기</div>
          </button>
        </div>

         
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainEdit;
