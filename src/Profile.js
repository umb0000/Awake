import React from 'react';
import './output.css';
import { AiOutlineStar } from "react-icons/ai";


const Profile = () => {
  return (
    <div className="w-[360px] h-[800px] pt-14 pb-[122px] bg-[#f8f8f8] flex flex-col ">
  {/* Header */}
  <div className="w-[315px] flex gap-2 mb-6 px-3">
    <h1 className="text-2xl font-bold text-black tracking-wide">MY</h1>
  </div>

  {/* Profile Info */}
  <div className="px-3 flex flex-col justify-start mb-6">
    <div className="text-black text-2xl font-bold">리나</div>
    <div className="text-[#79747e] text-lg font-bold ">@katarinabluu</div>
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
        {/* 별 이미지 추가 (주황색 원 위에만 표시) */}
        {index < 5 && (
          <img
            src="/img/star_filled.jpg" // 이미지 경로를 실제 파일 경로로 변경하세요.
            alt="Star Icon"
            className="absolute top-0 left-0 w-full h-full"
          />
        )}
      </div>
    </div>
  ))}
</div>

  </div>

  {/* Options List */}
  <div className="w-full px-4 flex flex-col gap-3">
    {["고양이 도감 보기", "내 기록 확인", "문의하기"].map((option, index) => (
      <div
        key={index}
        className="w-full h-16 bg-white rounded-lg flex items-center px-4 text-[#79747e] text-base font-bold"
      >
        {option}
      </div>
    ))}
  </div>
</div>

  );
};

export default Profile;
