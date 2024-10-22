import React, { useState } from 'react';
import './output.css';

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
    <div className="w-full h-[15%] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px] bg-[#f8f8f8] z-10">
        <div className="relative w-[95%] h-[51px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
          <div className="absolute left-0 top-[5px] w-[308px] h-[41px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
            
            <div className="text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-black text-center whitespace-nowrap">
            {currentMonth}월
            <button onClick={handlePrevMonth} className="text-[15px] font-bold">
            &lt;
          </button>
          <button onClick={handleNextMonth} className="text-[15px] font-bold">
            &gt;
          </button>
            </div>
          </div>
        </div>
      <div className="calendar-container">
        {/* 월과 좌우 버튼 */}
        {/*<div className="flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="text-[24px] font-bold">
            &lt;
          </button>
          <div className="text-center text-[15px]  font-['Pretendard_Variable'] font-bold">
            {currentYear}년 {currentMonth}월
          </div>
          <button onClick={handleNextMonth} className="text-[24px] font-bold">
            &gt;
          </button>*/}
        </div>

        {/* 요일 */}
        <div className="flex justify-between w-full mb-4">
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
      </div>
      </div>
    </div>



  );
};

export default Calendar;
