import React from 'react';
import './output.css';

const Profile = () => {
  return (
    <div className="w-full h-full pt-14 pb-[122px] bg-[#f8f8f8] flex flex-col font-['Pretendard_Variable']">
      
      {/* Header */}
      <div className="w-[315px] flex gap-2 mb-6 px-3">
        <h1 className="text-2xl font-bold text-black tracking-wide">MY</h1>
      </div>

      {/* Profile Info */}
      <div className="px-3 flex flex-col justify-start px-11 mb-6">
        <div className="text-black text-2xl font-bold">리나</div>
        <div className="text-[#79747e] text-lg font-bold">@katarinabluu</div>
      </div>

      {/* Weekly Bar */}
      <div className="self-stretch h-[82px] py-2 flex flex-col items-center mb-6">
        <div className="w-[313px] h-[68px] bg-white rounded-lg mb-4" />
        <div className="flex gap-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <div key={index} className="flex flex-col items-center gap-1 relative">
              <span className="text-[#79747e] text-xs font-bold">{day}</span>
              <div
                className={`w-8 h-8 rounded-full border border-white relative ${
                  index < 5 ? "bg-[#ff7936]" : "bg-[#d9d9d9]"
                }`}
              >
                {/* Centered star icon for the orange circles */}
                {index < 5 && (
                  <img
                    src="/img/star_filled.png" // 이미지 경로를 실제 파일 경로로 변경하세요.
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
        <div>
          문의하기
        </div></a>
      </div>
    </div>
  );
};

export default Profile;
