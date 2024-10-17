import { useState } from 'react';
import './output.css';

const Addtodo = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState(false); // 중요 스위치 상태
  const [urgency, setUrgency] = useState(false); // 긴급 스위치 상태
  const [repeatDays, setRepeatDays] = useState('월, 화, 수, 목, 금');
  const [dueDate, setDueDate] = useState('2024. 12. 05');
  const [distractions, setDistractions] = useState('');

  const handleSubmit = () => {
    console.log({ taskName, priority, urgency, repeatDays, dueDate, distractions });
  };

  const isFormValid = taskName.trim() !== ''; // 입력된 값이 있으면 true

  return (
    <div className="fixed w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단 바 */}
      <div className="fixed left-0 top-[0px] w-[100%] h-[64px] flex flex-row items-center justify-start gap-[4px] py-[8px] px-[4px] bg-[#fff] shadow-md">
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full overflow-hidden">
        <a href='/main'><img width="24" height="24" src={process.env.PUBLIC_URL + "/img/Icon42_1033.png"} alt="back" /></a>

        </div>
        <div className="flex-1 text-[18px] leading-[28px] font-['Pretendard_Variable'] font-bold text-[#1d1b20] text-center">할 일 추가</div>
        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full overflow-hidden"></div>
      </div>

      {/* 할 일 이름 */}
      <div className="absolute left-0 top-[80px] w-[100%] flex flex-col items-center gap-[19px] py-[10px] px-0">
        <div className="relative w-[95%] h-[72px]">
          <div className="absolute left-0 top-0 w-[71px] text-[14px] font-['Pretendard_Variable'] font-bold text-[#49454f]">할 일 이름</div>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="absolute left-0 top-[32px] w-[336px] h-[40px] bg-[#fff] border border-[#f2f2f2] rounded-[5px] p-[8px]"
          />
        </div>

        {/* 중요도, 긴급도 */}
        <div className="relative w-[95%] h-[72px] flex flex-col items-start gap-[5px]">
          <div className="text-[14px] font-['Pretendard_Variable'] font-bold text-[#49454f]">중요도, 긴급도</div>
          <div className="flex flex-row gap-[5px]">
            <button
              onClick={() => setPriority(!priority)} // 클릭하면 상태 토글
              className={`font-['Pretendard_Variable'] w-[163px] h-[40px] rounded-[2px] p-[8px] ${priority ? 'bg-[#ff9800]' : 'bg-[#fff]'} border border-[#f7f7f7]`}
            >
              중요
            </button>
            <button
              onClick={() => setUrgency(!urgency)} // 클릭하면 상태 토글
              className={`font-['Pretendard_Variable'] w-[163px] h-[40px] rounded-[2px] p-[8px] ${urgency ? 'bg-[#ff9800]' : 'bg-[#fff]'} border border-[#f2f2f2]`}
            >
              긴급
            </button>
          </div>
        </div>

        {/* 반복 및 마감일 */}
        <div className="relative w-[95%] h-[144px] flex flex-col gap-[8px]">
          <div className="text-[14px] font-bold text-[#49454f]">반복 및 마감일</div>
          <div className="flex flex-row justify-between bg-[#fff] border-b border-[#f2f2f2] py-[8px]">
            <div className="text-[12px] text-[#49454f]">반복</div>
            <div className="text-[12px] text-right">{repeatDays}</div>
          </div>
          <div className="flex flex-row justify-between bg-[#fff] border-b border-[#f2f2f2] py-[8px]">
            <div className="font-['Pretendard_Variable'] text-[12px] text-[#49454f]">마감일</div>
            <div className="text-[12px] text-right">{dueDate}</div>
          </div>
        </div>

        {/* 예상 용의 목록 */}
        <div className="relative w-[336px] h-[72px]">
          <div className="text-[14px] font-['Pretendard_Variable'] font-bold text-[#49454f]">예상 용의 목록</div>
          <input
            type="text"
            value={distractions}
            onChange={(e) => setDistractions(e.target.value)}
            className="absolute left-0 top-[32px] w-[336px] h-[40px] bg-[#fff] border border-[#f2f2f2] rounded-[5px] p-[8px] font-['Pretendard_Variable']"
            placeholder="방해가 될 요소 적어보기"
          />
        </div>

        {/* 추가하기 버튼 */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid} // 입력된 값이 없으면 비활성화
          className={`font-['Pretendard_Variable'] relative w-[336px] h-[52px] rounded-[5px] text-[#fff] font-bold text-[18px] ${
            isFormValid ? 'bg-[#237741]' : 'bg-[#d9d9d9]'
          }`}
        >
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
