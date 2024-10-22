import React from 'react';
import './output.css';

const MainAdd = () => {
  return (

    <div className="w-[360px] h-[336px] relative ">
  <div className="w-[360px] h-[336px] left-0 top-0 absolute" />
  <div className="h-[316px] left-[15px] top-[25px] absolute flex-col justify-start items-start inline-flex">
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="w-[165px] h-[41px] px-[69px] py-1.5 bg-white rounded-tl-[10px] justify-center items-center gap-2.5 flex">
        <div className="text-right text-black text-[13px] font-bold font-['Pretendard'] leading-7">할 일</div>
      </div>
      <div className="w-[165px] h-[41px] px-[71px] py-1.5 bg-[#f4f7f8] rounded-tr-[10px] justify-center items-center gap-2.5 flex">
        <div className="text-right text-black text-[13px] font-bold font-['Pretendard'] leading-7">루틴</div>
      </div>
    </div>
    <div className="self-stretch h-[275px] px-[18px] py-[15px] bg-white flex-col justify-center items-center gap-2.5 flex">
      <div className="h-[232px] flex-col justify-start items-start gap-1.5 flex">
      <div className="w-[290px] h-[42px] px-[13px] py-[3px] bg-[#f4f7f8] justify-start items-center gap-2.5 inline-flex">
  <input
    type="text"
    placeholder="제목을 입력하세요." // textholder
    className="w-full bg-transparent text-left text-[#000] text-[13px] font-bold font-['Pretendard'] leading-7 outline-none" // 기존 스타일 유지
  />
</div>
        <div className="w-[290px] justify-start items-start gap-[5px] inline-flex">
          <div className="w-[142px] h-10 px-[49px] py-2 bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
            <div className="w-[44.43px] h-[22.56px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">중요 🚩</div>
          </div>
          <div className="w-[142px] h-10 px-9 py-[9px] bg-white rounded-sm border border-[#f4f7f8] justify-center items-center gap-2.5 flex">
            <div className="w-[49px] h-[22px] text-center text-[#49454f] text-xs font-bold font-['Pretendard'] leading-7">긴급 🚨</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex">
          <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">반복</div>
          <div className="w-[98px] h-7 relative">
            <img className="w-3 h-3.5 left-[86px] top-[7px] absolute" src="https://via.placeholder.com/12x14" />
            <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">한 번만</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] px-3.5 bg-white border border-[#f4f7f8] justify-start items-center gap-[17px] inline-flex">
          <div className="w-[148px] text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">날짜</div>
          <div className="w-[98px] h-7 relative">
            <img className="w-3 h-3.5 left-[86px] top-[7px] absolute" src="https://via.placeholder.com/12x14" />
            <div className="w-[79px] left-0 top-0 absolute text-right text-[#49454f] text-xs font-normal font-['Roboto'] leading-7">8월 24일</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] px-[100px] py-[5px] bg-[#d9d9d9] rounded-[5px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-bold font-['Pretendard'] leading-7">추가하기</div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default MainAdd;
