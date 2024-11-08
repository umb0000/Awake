import React from 'react';
import './output.css';

const Depression = () => {
  return (
    <div className="relative w-full h-auto bg-[#fff] overflow-hidden">
      <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">
        
        <div className="w-screen h-[63px] flex-shrink-0 flex items-center justify-center bg-[#f5f5f5]">
          <div className="relative w-full max-w-[337px] h-[73px] flex items-center">
            <div className="absolute left-0 top-0 w-[337px] h-[73px] flex flex-col items-start justify-center gap-[3px] p-[20px] rounded-[16px]">
                <div className="w-[266px] text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">우울한 마음을 보듬어요</div>
                <div className="w-[263px] text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#79747e]">나의 마음을 들여다봐요</div>
              </div>
                <img className="absolute right-0 top-2 object-cover" width="41" height="49" src={process.env.PUBLIC_URL + "/img/3dicons1_335.png"} alt="3d icon" />
            </div>
        </div>

        <div className="relative w-[95%] h-[166px] flex-shrink-0">
          <a href="http://kwawake.duckdns.org/trashcan" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-5 bg-[#88d6e7] rounded-lg">
              <div className="text-xl font-bold text-white">감정 쓰레기통</div>
              <div className="text-xs font-semibold text-white">지금 우리에게 필요한 것</div>
            </div>
            <img className="absolute right-5 top-3 object-cover" width="108" height="100" src={process.env.PUBLIC_URL + "/img/3dicons1_342.png"} alt="3d icon" />
          </a>
        </div>

        <div className="relative w-[95%] h-[166px] flex-shrink-0">
          <a href="http://kwawake.duckdns.org/move" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-5 bg-[#ff9800] rounded-lg">
              <div className="text-xl font-bold text-white">몸 움직이기</div>
              <div className="text-xs font-semibold text-white">가볍게 하나씩 따라해보세요.</div>
            </div>
            <img className="absolute right-5 top-1 object-cover" width="123" height="114" src={process.env.PUBLIC_URL + "/img/3dicons1_348.png"} alt="3d icon" />
          </a>
        </div>


        <a href='http://kwawake.duckdns.org/Breath' className="w-[95%] h-[68px] shrink-0 flex flex-col items-start justify-center gap-[1px] py-[10px] px-[20px] bg-[#f8f8f8] rounded-[16px] no-underline">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">
            양파양 위로하기
            </div>
            <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000]">
             양파양을 다독이며 나도 아끼는 연습을 해봐요.
            </div>
          </a>


        <div className="relative w-[95%]  h-[68px] flex-shrink-0">
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center py-3 px-5 bg-[#ffcd63] rounded-[16px]">
          <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#fff]">AWAKE 우울 상담 센터</div>
          <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">자주 무기력하고 우울하신가요? AWAKE 우울 상담센터</div>
          </div>
          <div className="absolute right-5 top-1 w-[124px] text-[50px] font-black text-white opacity-30">AWA</div>
        </div>
      </div>
    </div>
  );
};

export default Depression;
