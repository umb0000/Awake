import React, { useState, useEffect } from 'react';
import './output.css';

// 주황색 채도를 다르게 정할 수 있는 함수
const getBackgroundColor = (percentage) => {
  if (percentage === 0) return '#FFFFFF'; // No tasks done
  if (percentage > 0 && percentage <= 20) return '#FFE0B2';
  if (percentage > 20 && percentage <= 40) return '#FFCC80';
  if (percentage > 40 && percentage <= 60) return '#FFB74D';
  if (percentage > 60 && percentage <= 80) return '#FFA726';
  return '#FF6D00'; // 100% done
};

// 현재 날짜와 일치하면 강조 표시
const isToday = (year, month, day) => {
  const today = new Date();
  return (
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    day === today.getDate()
  );
};

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 0부터 시작하므로 +1
  const [dailyPercentages, setDailyPercentages] = useState({});

  useEffect(() => {
    fetchMonthlyData();
  }, [currentYear, currentMonth]);

  const fetchMonthlyData = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://112.152.14.116:10211/monthly-done-get?year=${currentYear}&month=${currentMonth}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setDailyPercentages(data.daily_percentages || {});
    } catch (error) {
      console.error('Failed to fetch monthly done data:', error);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
  const emptyDays = (firstDayOfMonth + 6) % 7; // 월요일을 시작 요일로 맞추기 위한 처리
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className='w-screen h-screen flex flex-col relative bg-[#f8f8f8] pt-10'>
      <div className='content'>
        <div className="w-full h-full flex flex-col items-center justify-start gap-[10px] px-[10px] z-10">
          <div className="relative w-[95%] h-[40px] shrink-0 flex flex-col items-start justify-start px-0">
            <div className="absolute left-0 top-[5px] w-[100%] h-[36px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
              <div className="w-[360px] h-[31px] justify-center items-center gap-[15px] inline-flex">
                <button onClick={handlePrevMonth}>
                  <img width="9px" height="18px" src={process.env.PUBLIC_URL + "/img/left.png"} alt="Previous Month" />
                </button>
                <div className="text-black text-2xl font-bold font-['Pretendard'] leading-normal tracking-wide">
                  {currentMonth}월
                </div>
                <button onClick={handleNextMonth}>
                  <img width="9px" height="18px" src={process.env.PUBLIC_URL + "/img/right.png"} alt="Next Month" />
                </button>
              </div>
            </div>
          </div>

          {/* 요일 */}
          <div className="flex justify-between w-full">
            {['월', '화', '수', '목', '금', '토', '일'].map((dayName) => (
              <div key={dayName} className="w-[42px] text-[10px] font-bold text-[#79747e] text-center">
                {dayName}
              </div>
            ))}
          </div>

          {/* 달력 날짜 */}
          <div className="calendar-grid grid grid-cols-7 gap-1">
            {/* 빈 공간 (월요일 시작) */}
            {Array.from({ length: emptyDays }, (_, i) => (
              <div key={`empty-${i}`} className="calendar-day empty-day" />
            ))}
            {/* 각 날짜 표시 */}
            {days.map((day) => (
              <div
                key={day}
                className={`calendar-day ${isToday(currentYear, currentMonth, day) ? 'today' : ''}`}
                style={{
                  background: getBackgroundColor(dailyPercentages[day] || 0),
                  color: isToday(currentYear, currentMonth, day) ? '#FFFFFF' : '#000000'
                }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* 나의 월 기록 섹션 */}
          <div className="h-[160px] px-[19px] bg-white rounded-[20px] flex-col justify-center items-center gap-5 inline-flex">
            <span className="text-[#79747e] text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">
              나의 {currentMonth}월 기록
            </span>
            <div className="flex-col justify-center items-center gap-[3px] flex">
              {/* Progress bars for different priority levels */}
              {['상', '중', '하', '루틴', '월 평균'].map((label, index) => (
                <div key={index} className="w-[302px] justify-between items-center inline-flex">
                  <div className="w-[71px] h-[18px] text-[#79747e] text-[10px] font-bold font-['Pretendard'] leading-normal tracking-wide">
                    우선도 {label} 달성률
                  </div>
                  <div className="w-[199px] h-[3.75px] relative">
                    <div className="w-[163.41px] h-[3.75px] left-0 top-0 absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl" />
                  </div>
                  <div className="text-[#ff7936] text-[8px] font-normal font-['Pretendard Variable'] leading-normal tracking-wide">
                    80%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
