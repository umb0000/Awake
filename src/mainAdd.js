import React, { useState } from 'react';
import './output.css';

const MainAdd = () => {
  const [taskName, setTaskName] = useState('');
  const [isTaskSelected, setIsTaskSelected] = useState(true); // 할 일 선택 상태를 저장
  const isFormValid = taskName.trim() !== ''; // 입력된 값이 있으면 true

  const handleTaskClick = () => {
    setIsTaskSelected(true);
  };

  const handleRoutineClick = () => {
    setIsTaskSelected(false);
  };

  const handleSubmit = () => {
    console.log({ taskName});
  };


  return (
    <div className="w-[360px] h-[336px] relative">
      <div className="w-[360px] h-[336px] left-0 top-0 absolute" />
      <div className="h-[316px] left-[15px] top-[25px] absolute flex-col justify-start items-start inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div
            onClick={handleTaskClick}
            className={`w-[165px] h-[41px] px-[69px] py-1.5 ${
              isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'
            } rounded-tl-[10px] justify-center items-center gap-2.5 flex`}
          >
            <div className="text-right text-black text-[13px] font-bold font-['Pretendard'] leading-7">할 일</div>
          </div>
          <div
            onClick={handleRoutineClick}
            className={`w-[165px] h-[41px] px-[71px] py-1.5 ${
              !isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'
            } rounded-tr-[10px] justify-center items-center gap-2.5 flex`}
          >
            <div className="text-right text-black text-[13px] font-bold font-['Pretendard'] leading-7">루틴</div>
          </div>
        </div>

        <div className="self-stretch h-[275px] px-[18px] py-[15px] bg-white flex-col justify-center items-center gap-2.5 flex">
          <div className="h-[232px] flex-col justify-start items-start gap-1.5 flex">
            <div className="w-[290px] h-[42px] px-[13px] py-[3px] bg-[#f4f7f8] justify-start items-center gap-2.5 inline-flex">
              <input
                type="text"
                placeholder="제목을 입력하세요."
                className="w-full bg-transparent text-left text-[#000] text-[13px] font-bold font-['Pretendard'] leading-7 outline-none"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>

            {/* 상태에 따라 다른 버튼 표시 */}
            {!isTaskSelected ? (
             <div className="w-[290px] h-10 justify-center items-start gap-[3.33px] inline-flex">
             <div className="w-[70px] h-10 px-[12.7px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-[9px] flex">
               <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                 아침
               </div>
             </div>
             <div className="w-[70px] h-10 px-[12.7px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
               <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                 점심
               </div>
             </div>
             <div className="w-[70px] h-10 px-[12.7px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
               <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                 저녁
               </div>
             </div>
             <div className="w-[70px] h-10 px-[12.7px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
               <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                 종일
               </div>
             </div>
           </div>
           
            ) : (
              <div className="w-[290px] justify-start items-start gap-[5px] inline-flex">
                <div className="w-[142px] h-10 px-[49px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
                  <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                    중요 🚩
                  </div>
                </div>
                <div className="w-[142px] h-10 px-9 py-[9px] bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
                  <div className="w-[49px] h-[22px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">
                    긴급 🚨
                  </div>
                </div>
              </div>
            )}

            <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex">
              <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">반복</div>
              <div className="w-[98px] h-7 relative">
                <img className="w-3 h-3.5 left-[86px] top-[7px] absolute" src="https://via.placeholder.com/12x14" />
                <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">
                  한 번만
                </div>
              </div>
            </div>

            <button
          onClick={handleSubmit}
          disabled={!isFormValid} // 입력된 값이 없으면 비활성화
          className={` w-[290px] h-[42px] px-[100px] py-[5px] rounded-[5px] justify-center items-center gap-2.5 inline-flex ${
            isFormValid? 'bg-[#FF9800]' : 'bg-[#d9d9d9]'
          }`}
        >
          <div className="text-white text-base font-bold font-['Pretendard'] leading-7">추가하기</div>
        </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAdd;
