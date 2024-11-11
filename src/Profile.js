import React from 'react';
import './output.css';

const Profile = () => {
  return (
    <div className="relative w-screen min-h-screen bg-[#f8f8f8] overflow-hidden font-['Pretendard_Variable']">
      <div className="w-full h-[15px]"></div> {/* 상단 상태 표시와 여백을 위한 공간 */}
  
      {/* Header */}
      <div className="app-container">
        <div className="content">
          <div className="w-full h-[15%] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px] z-10">
            <div className="relative w-[95%] h-[51px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
              <div className="absolute left-0 top-[5px] w-[308px] h-[41px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
                <img width="24" height="24" src={process.env.PUBLIC_URL + "/img/user.png"} alt="icon" />
                <div className="text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-center whitespace-nowrap">
                  MY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="w-full flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px]">
        <div className="relative w-[96%] h-[60px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
          <div className="absolute left-0 top-[5px] w-[308px] h-[60px] shrink-0 items-center justify-start gap-[11px] overflow-hidden">
            <div className="text-black text-2xl font-bold whitespace-nowrap">리나</div>
            <div className="text-[#79747e] text-lg font-bold whitespace-nowrap">@katarinabluu</div>
          </div>
        </div>
      </div>

      {/* Weekly Bar */}
      <div className="self-stretch h-[82px] py-2 flex flex-col items-center mb-6">
        <div className="w-[95%] h-[68px] bg-white rounded-lg mb-4" />
        <div className="flex gap-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-1 relative">
              <span className="text-[#79747e] text-xs font-bold">{day}</span>
              <div
                className={`w-8 h-8 rounded-full border border-white relative ${
                  index <= new Date().getDay() - 1 ? "bg-[#ff7936]" : "bg-[#d9d9d9]"
                }`}
              >
                {index <= new Date().getDay() - 1 && (
                  <img
                    src="/img/star_filled.png"
                    alt="Star Icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Options List */}
      <div className="w-full px-4 flex flex-col gap-3">
        <div className="w-full h-16 bg-white rounded-lg flex items-center px-4 text-[#79747e] text-base font-bold">
          <a href="#">고양이 도감 보기</a>
        </div>
        <div className="w-full h-16 bg-white rounded-lg flex items-center px-4 text-[#79747e] text-base font-bold">
          <a href="#">내 기록 확인</a>
        </div>
        <a className="w-full h-16 bg-white rounded-lg flex items-center px-4 text-[#79747e] text-base font-bold" href="http://kwawake.duckdns.org/Help">
          <div>문의하기</div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
