import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VscArrowLeft } from "react-icons/vsc";
import './output.css';

const Back = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

 return (
    <div className="relative">
      {/* 상단 상태 표시 */}
      <div className="fixed left-0 top-0 w-full h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px] bg-white z-50">
        <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#1d1b20] whitespace-nowrap">
          9:30
        </div>
        <img
          width="46"
          height="17"
          src={process.env.PUBLIC_URL + "/img/right_iconsI1_276.png"}
          alt="status icons"
        />
      </div>

      {/* 상단 뒤로가기 버튼 */}
      <div className="self-stretch h-[64px] flex items-center justify-start py-[8px] px-[23px] bg-[#fff] mt-[45px]">
        <button onClick={handleBackClick} className="p-2 flex justify-center items-center">
          <VscArrowLeft size={24} />
        </button>
      </div>
    </div>
  );
};

export default Back;
