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
      {/* 상단 뒤로가기 버튼 */}
      <div className="fixed left-0 top-0 w-full h-16 px-1 py-2 bg-white z-50 flex justify-start items-center gap-1 shadow-md">
        <div className="w-12 h-12 flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="rounded-full justify-center items-center flex">
            <button onClick={handleBackClick} className="p-2 flex justify-center items-center">
              <VscArrowLeft size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* 뒤로가기 버튼 하단에 공간을 추가하기 위해 빈 div */}
      <div className="h-16"></div>
    </div>
  );
};

export default Back;
