import React, { useRef } from 'react';
import '../output.css';

const Forest = () => {
  const containerRef = useRef(null);

  return (
    <div className="w-screen h-[620px] flex items-start justify-center bg-gradient-to-b from-white to-[#8db28f]">
      <div className="w-full max-w-[1280px] h-full relative flex flex-col items-center">
        <div className="py-[21px] flex flex-col items-center gap-[5px]">
          <div className="w-full text-center text-[#237740] text-sm font-semibold font-['Pretendard'] leading-[15px] tracking-wide">
            마음 치유 센터,
          </div>
          <div className="w-full text-center text-[#237740] text-[40px] font-black font-['Pretendard'] leading-normal tracking-wide">
            마음숲
          </div>
          <div className="w-full text-center text-[#237740] text-sm font-medium font-['Pretendard'] leading-none tracking-wide mt-4 whitespace-pre-line">
            답답하고 지치고<br />아무것도 안 하고 싶은 일 분 일 초,<br />할 일이 밀렸지만 눈에 들어오지 않을 때<br />마음의 위로, 안정된 휴식이 필요할 때<br /><br />언제든 마음숲을 찾아주세요
          </div>
        </div>

        {/* 가로 스크롤 영역 */}
        <div className="w-full h-[382px] mt-[15px] bg-white rounded-tl-[20px] rounded-tr-[20px] overflow-x-auto lg:overflow-visible scroll-smooth no-scrollbar flex" ref={containerRef}>
          <div className="flex gap-[13px] px-[24px] py-[24px] w-full lg:justify-between">
            <a href="http://kwawake.duckdns.org/kit/anxiety" className="flex-shrink-0 w-[236px] lg:flex-1 max-h-[307px]">
              <img className="w-full h-full max-h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-contain" src="/img/kit_main_card1.png" alt="kit_main_card1" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.35)" }} />
            </a>
            <a href="http://kwawake.duckdns.org/kit/angry" className="flex-shrink-0 w-[236px] lg:flex-1 max-h-[307px]">
              <img className="w-full h-full max-h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-contain" src="/img/kit_main_card2.png" alt="kit_main_card2" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.35)" }} />
            </a>
            <a href="http://kwawake.duckdns.org/kit/depression" className="flex-shrink-0 w-[236px] lg:flex-1 max-h-[307px]">
              <img className="w-full h-full max-h-[307px] rounded-tl-[20px] rounded-tr-[20px] object-contain" src="/img/kit_main_card3.png" alt="kit_main_card3" style={{ boxShadow: "0 0 20px rgba(29, 27, 32, 0.35)" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forest;
