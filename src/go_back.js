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
    <div>
      {/* 상단 상태 표시 */}
      <div className="fixed left-0 top-[0px] w-[100%] h-[45px] bg-white flex flex-row items-end justify-between py-[10px] px-[24px]">
        <div className="text-[14px] opacity-[50] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>
        
      </div>

      {/* 상단 뒤로가기 버튼 */}
      <div className="fixed left-0 top-0 w-[360px] h-16 px-1 py-2 bg-white z-50 flex justify-start items-center gap-1 shadow-md" style={{ marginBottom: '10px' }}>
        {/* 버튼 컨테이너 */}
        <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="rounded-full justify-center items-center flex">
            <button onClick={handleBackClick} className="p-2 flex justify-center items-center">
              <VscArrowLeft size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* 뒤로가기 버튼 하단에 공간을 추가하기 위해 빈 div */}
      <div className="h-16"></div> {/* 16px의 여백 추가 */}
    </div>
  );
};

export default Back;
