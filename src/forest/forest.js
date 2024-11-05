import React, { useRef } from 'react';
import '../output.css';

const Forest = () => {
  const containerRef = useRef(null);

  return (
    <div className="w-[360px] h-[800px] relative bg-gradient-to-b from-white to-[#8db28f]">
      <div className="w-[360px] h-[690px] left-0 absolute">
        <div className="py-[21px] left-[11px] absolute flex-col justify-start items-center gap-[5px] inline-flex">
          <div className="w-[103px] h-[17px] text-center text-[#237740] text-sm font-semibold font-['Pretendard'] leading-[15px] tracking-wide">
            마음 치유 센터,
          </div>
          <div className="w-[210px] h-[46px] justify-center items-center gap-[11px] inline-flex">
            <div className="text-center text-[#237740] text-[40px] font-black font-['Pretendard'] leading-normal tracking-wide">
              마음숲
            </div>
          </div>
          <div className="w-[338px] h-[116px] text-center text-[#237740] text-sm font-medium font-['Pretendard'] leading-none tracking-wide">
            답답하고 지치고<br />아무것도 안 하고 싶은 일 분 일 초,<br />할 일이 밀렸지만 눈에 들어오지 않을 때<br />마음의 위로, 안정된 휴식이 필요할 때<br /><br />언제든 마음숲을 찾아주세요
          </div>
        </div>

        {/* 가로 스크롤 영역 */}
        <div className="w-[360px] h-[382px] left-0 top-[210px] absolute bg-white rounded-tl-[20px] rounded-tr-[20px] overflow-x-scroll scroll-smooth no-scrollbar" ref={containerRef}>
          <div className="w-[312px] h-[301px] left-[24px] top-[24px] flex flex-row gap-[13px] px-[24px] py-[24px] ">
            <a href="http://kwawake.duckdns.org/kit/anxiety" className="flex-shrink-0">
              <img className="w-[236px] h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-cover" src="/img/kit_main_card1.png" alt="kit_main_card1" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.25)" }} />
            </a>
            <a href="http://kwawake.duckdns.org/kit/angry" className="flex-shrink-0">
              <img className="w-[236px] h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-cover" src="/img/kit_main_card2.png" alt="kit_main_card2" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.25)" }} />
            </a>
            <a href="http://kwawake.duckdns.org/kit/depression" className="flex-shrink-0">
              <img className="w-[236px] h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-cover" src="/img/kit_main_card3.png" alt="kit_main_card3" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.25)" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forest;
