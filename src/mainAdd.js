import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './output.css';

const MainAdd = () => {
  const [taskName, setTaskName] = useState('');
  const [isTaskSelected, setIsTaskSelected] = useState(true); // 할 일 선택 상태를 저장
  const [selectedTime, setSelectedTime] = useState(''); // 아침, 점심, 저녁, 종일 중 선택된 시간
  const [isImportance, setIsImportance] = useState(false); // 중요 버튼 상태
  const [isEmergency, setIsEmergency] = useState(false); // 긴급 버튼 상태
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("한 번만");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [user, setUser] = useState(null); // 사용자 정보 상태
  const navigate = useNavigate();

  useEffect(() => {
      const token = localStorage.getItem('token'); 
      if (!token) {
          navigate('/login');
         return;
      }
  }, [navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}월 ${day}일`;
  }; 

  const options = ["한 번만", "매일", "평일", "주말"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    const today = new Date();
    const formattedToday = today.toISOString().split("T")[0];
    setSelectedDate(formattedToday);
  }, []);

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

  const toggleImportance = () => {
    setIsImportance((prev) => !prev);
  };

  const toggleEmergency = () => {
    setIsEmergency((prev) => !prev);
  };

  const handleSubmit = () => {
    const todoData = {
      title: taskName,
      is_routine: !isTaskSelected, 
      when_routine: selectedDate,  // 필드명 수정
      is_importance: isImportance,
      is_emergency: isEmergency,   // 필드명 수정
      repeatance: selectedOption,  // 필드명 수정
      do_when: isTaskSelected ? null : selectedTime,
      is_done: false 
    };

    console.log(todoData); // 확인용 출력

    // API 요청 보내기
    const token = localStorage.getItem('token');
    fetch('http://112.152.14.116:10211/todo-add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(todoData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Todo 저장 성공:', data);
    })
    .catch(error => {
      console.error('Todo 저장 실패:', error);
    });
  };

  return (
    <div className="w-[360px] h-[336px] relative">
      <div className="h-[316px] left-[15px] top-[25px] absolute flex-col justify-start items-start inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div
            onClick={handleTaskClick}
            className={`w-[165px] h-[41px] px-[69px] py-1.5 ${isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'} rounded-tl-[10px] justify-center items-center gap-2.5 flex`}
          >
            <div className="text-right text-black text-[13px] font-bold font-['Pretendard'] leading-7">할 일</div>
          </div>
          <div
            onClick={handleRoutineClick}
            className={`w-[165px] h-[41px] px-[71px] py-1.5 ${!isTaskSelected ? 'bg-white' : 'bg-[#f4f7f8]'} rounded-tr-[10px] justify-center items-center gap-2.5 flex`}
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
                  onClick={toggleImportance}
                  className={`w-[142px] h-10 px-[49px] py-2 ${isImportance ? 'border-[#ff9800] text-[#ff9800]' : 'bg-white text-black'} rounded-[5px] border border-[#f4f7f8] justify-center items-center gap-2.5 flex`}
                >
                  <div className="w-[44.43px] h-[22.56px] text-center text-xs font-bold font-['Pretendard'] leading-7">
                    중요 🚩
                  </div>
                </div>
                <div
                  onClick={toggleEmergency}
                  className={`w-[142px] h-10 px-9 py-[9px] ${isEmergency ? 'border-[#ff9800] text-[#ff9800]' : 'bg-white text-black'} rounded-[5px] border border-[#f4f7f8] justify-center items-center gap-2.5 flex`}
                >
                  <div className="w-[49px] h-[22px] text-center text-xs font-bold font-['Pretendard'] leading-7">
                    긴급 🚨
                  </div>
                </div>
              </div>
            )}

            <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex relative cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">반복</div>
              <div className="w-[98px] h-7 relative">
                <img
                  className="w-3 h-3.5 left-[86px] top-[7px] absolute"
                  src="https://via.placeholder.com/12x14"
                  alt="Dropdown Icon"
                />
                <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">
                  {selectedOption}
                </div>
              </div>
              {isDropdownOpen && (
                <div className="absolute top-[42px] left-0 w-full bg-white border border-[#f4f7f8] shadow-md z-10">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="px-4 py-1 text-[#49454f] text-xs font-normal font-['Pretendard'] leading-7 hover:bg-gray-100"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex relative cursor-pointer">
              <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Pretendard'] leading-7">날짜</div>
              <div className="w-[98px] h-7 relative">
                <img
                  className="w-3 h-3.5 left-[86px] top-[7px] absolute"
                  src="https://via.placeholder.com/12x14"
                  alt="Calendar Icon"
                />
                <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Pretendard'] leading-7">
                  {formatDate(selectedDate)}
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={` w-[290px] h-[42px] px-[100px] py-[5px] rounded-[5px] justify-center items-center gap-2.5 inline-flex ${isFormValid ? 'bg-[#FF9800]' : 'bg-[#d9d9d9]'}`}
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
