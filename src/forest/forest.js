import React from 'react';
import './output.css';

const Forest = () => {
  return (

    <div className="w-[360px] h-[800px] relative bg-gradient-to-b from-white to-[#8db28f]">
    <div className="w-[360px] h-[690px] left-0 absolute">
      <div className="py-[21px] left-[11px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
        <div className="w-[103px] h-[17px] text-center text-[#237740] text-sm font-semibold font-['Pretendard'] leading-[15px] tracking-wide">마음 치유 센터,</div>
        <div className="w-[210px] h-[46px] justify-center items-center gap-[11px] inline-flex">
          <div className="text-center text-[#237740] text-[40px] font-black font-['Pretendard'] leading-normal tracking-wide">마음숲</div>
        </div>
        <div className="w-[338px] h-[116px] text-center text-[#237740] text-sm font-medium font-['Pretendard'] leading-none tracking-wide">답답하고 지치고<br/>아무것도 안 하고 싶은 일 분 일 초,<br/>할 일이 밀렸지만 눈에 들어오지 않을 때<br/>마음의 위로, 안정된 휴식이 필요할 때<br/><br/>언제든 마음숲을 찾아주세요</div>
      </div>
      <div className="w-[360px] h-[390px] left-0 top-[210px] absolute bg-white rounded-tl-[20px] rounded-tr-[20px]" />
    </div>
    <div className="w-[312px] h-[301px] left-[24px] top-[400px] absolute shadow justify-start items-center gap-[13px] inline-flex">
      <img className="w-[236px] h-[307px]" src="https://via.placeholder.com/236x307" />
      <img className="w-[236px] h-[307px]" src="https://via.placeholder.com/236x307" />
      <img className="w-[236px] h-[307px]" src="https://via.placeholder.com/236x307" />
    </div>
  </div>

  );
};

export default Forest;
