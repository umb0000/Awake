import React, { useState } from 'react';
import './output.css';
import Diary from './calenderDiary.js';

// 주황색 채도를 다르게 정할 수 있는 함수
const getBackgroundColor = (day) => {
  const shades = ['#FF6D00', '#FFA726', '#FFB74D', '#FFCC80', '#FFE0B2'];
  return shades[day % shades.length];
};

// 현재 날짜와 일치하면 강조 표시
const isToday = (year, month, day) => {
  const today = new Date();
  return (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 && // getMonth()는 0부터 시작
    day === today.getDate()
  );
};

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 0부터 시작하므로 +1

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // 해당 월의 날짜 수
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // 해당 월의 첫날 요일 (일: 0, 월: 1, ...)
  const emptyDays = (firstDayOfMonth + 6) % 7; // 월요일을 시작 요일로 맞추기 위한 처리
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1); // 해당 월의 모든 날짜

  // 전월로 이동
  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // 다음월로 이동
  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

 // 주황색 채도를 다르게 정할 수 있는 함수
const getBackgroundColor = (day, currentMonth, currentYear) => {
    const today = new Date();
    const shades = ['#FF6D00', '#FFA726', '#FFB74D', '#FFCC80', '#FFE0B2'];
  
    // 오늘 이후의 날짜는 흰색 박스 처리
    if (currentYear > today.getFullYear() || currentMonth > today.getMonth() + 1 || currentMonth > today.getMonth() && day > today.getDate()) {
      return '#FFFFFF'; // 아직 오지 않은 날짜는 흰색 박스
    }
    return shades[day % shades.length];
  };
  
  // 현재 날짜와 일치하면 강조 표시
  const isToday = (year, month, day) => {
    const today = new Date();
    return year === today.getFullYear() && month === today.getMonth() + 1 && day === today.getDate();
  };
  
  // 글자 색깔 결정 함수 (아직 오지 않은 날짜는 회색 텍스트)
  const getTextColor = (day, currentMonth, currentYear) => {
    const today = new Date();
    if (currentYear > today.getFullYear() || currentMonth > today.getMonth() + 1 || currentMonth > today.getMonth() && day > today.getDate()) {
      return '#79747E'; // 아직 오지 않은 날짜는 회색 텍스트
    }
    return '#FFFFFF'; // 기본 흰색 텍스트
  };
  


  return (
    <div className='app-container'>
    <div className='content'>
    {/*<div className="relative w-full h-[800px] bg-[#f8f8f8] flex justify-center items-start">*/}
    <div className="w-full h-[800px] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px] bg-[#f8f8f8] z-10">
        <div className="relative w-[95%] h-[40px] shrink-0 flex flex-col items-start justify-start  px-0">
          <div className="absolute left-0 top-[5px] w-[100%] h-[36px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
          <div className="w-[360px] h-[31px] justify-center items-center gap-[15px] inline-flex">
          <button onClick={handlePrevMonth}>
          <img width="9px" height="18px" src={process.env.PUBLIC_URL + "/img/left.png"} alt="status icons" />
          </button>

  <div className="text-black text-2xl font-bold font-['Pretendard'] leading-normal tracking-wide"> {currentMonth}월</div>
  <button onClick={handleNextMonth}>
  <img width="9px" height="18px" src={process.env.PUBLIC_URL + "/img/right.png"} alt="status icons" />
          </button>
</div>

            
            
         
          </div>
        </div>

        {/* 요일 */}
        <div className="flex justify-between w-full">
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">월</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">화</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">수</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">목</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">금</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">토</div>
  <div className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">일</div>
</div>
        {/* 달력 날짜 */}
        <div className="calendar-grid grid grid-cols-7 gap-1">
          {/* 빈 공간 (월요일 시작) */}
          {Array.from({ length: emptyDays }, (_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty-day" />
          ))}

          {days.map((day) => (
            <div
              key={day}
              className={`calendar-day ${isToday(currentYear, currentMonth, day) ? 'today' : ''}`}
              style={{
                background: getBackgroundColor(day, currentMonth, currentYear),
                color: getTextColor(day, currentMonth, currentYear),
              }}
            >
              {day}
            </div>
            
          ))}
          
        </div>
<div className="h-[160px] px-[19px] bg-white  rounded-[20px] flex-col justify-center items-center gap-5px inline-flex">
  <span className="text-[#79747e] text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">나의 11월 기록</span><span classname="text-[#79747e] text-[13px] font-bold font-['Pretendard'] leading-normal tracking-wide"> </span>
  <div className="flex-col justify-center items-center gap-[3px] flex">
    <div className="w-[302px] justify-between items-center inline-flex">
      <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">우선도 상 달성률</div>
      <div className="w-[199px] h-[3.75px] relative">
        <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
      </div>
      <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard Variable'] leading-normal tracking-wide">80%</div>
    </div>
    <div className="w-[302px] justify-between items-center inline-flex">
      <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">우선도 중 달성률</div>
      <div className="w-[199px] h-[3.75px] relative">
        <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
      </div>
      <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard Variable'] leading-normal tracking-wide">80%</div>
    </div>
    <div className="w-[302px] justify-between items-center inline-flex">
      <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">우선도 하 달성률</div>
      <div className="w-[199px] h-[3.75px] relative">
        <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
      </div>
      <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard Variable'] leading-normal tracking-wide">80%</div>
    </div>
    <div className="w-[302px] justify-between items-center inline-flex">
      <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">루틴 달성률</div>
      <div className="w-[199px] h-[3.75px] relative">
        <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
      </div>
      <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard Variable'] leading-normal tracking-wide">80%</div>
    </div>
    <div className="w-[302px] justify-between items-center inline-flex">
      <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">월 평균 달성률</div>
      <div className="w-[199px] h-[3.75px] relative">
        <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
      </div>
      <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard'] leading-normal tracking-wide">80%</div>
    </div>
  </div>
</div>

<div class="h-[63px] px-[19px] py-2.5 bg-white rounded-bl-[20px] rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
  <div class="w-[302.91px] bg-white justify-start items-center gap-[5px] inline-flex">
    <div class="w-[23.25px] h-[23.25px] relative">
      <div class="w-[16.45px] h-[11.28px] left-[3.45px] top-[6.03px] absolute text-center text-[#ff6d00] text-[15px] font-bold font-['Pretendard'] leading-normal tracking-wide">S</div>
    </div>
    <div class="w-[147px] h-6 text-[#79747e] text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">이번 달 올클리어 6회!</div>
  </div>
</div>

<Diary/>
        
      </div>

      
      </div>
    </div>



  );
};

export default Calendar;
