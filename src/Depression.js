import React from 'react';
import './output.css';

const Depression = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">
        <div className="self-stretch h-[63px] shrink-0 flex flex-row items-center justify-center bg-[#f5f5f5]">
          <div className="relative w-[337px] h-[73px] flex-shrink-0 flex">
            <div className="absolute left-0 top-0 w-[337px] h-[73px] flex flex-col items-start justify-center gap-[3px] p-[20px] rounded-[16px]">
              <div className="w-[266px] text-[16px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#000]">우울한 마음을 보듬어요</div>
              <div className="w-[263px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-medium text-[#79747e]">나의 마음을 들여다봐요</div>
            </div>
            <img className="absolute left-[278px] top-[11px] flex-shrink-0 object-cover" width="41" height="49" src={process.env.PUBLIC_URL + "/img/3dicons1_335.png"} alt="3d icon" />
          </div>
        </div>

        <div className="relative w-[95%] h-[166px] flex-shrink-0 flex">
          <a href="http://kwawake.duckdns.org/trashcan" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-[20px] bg-[#88d6e7] rounded-[16px]">
              <div className="self-stretch text-[20px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#fff]">
                감정 쓰레기통
              </div>
              <div className="w-[111px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#fff]">
                지금 우리에게 필요한 것
              </div>
            </div>
            <img className="absolute left-[211px] top-[12px] flex-shrink-0 object-cover" width="108" height="100" src={process.env.PUBLIC_URL + "/img/3dicons1_342.png"} alt="3d icon" />
          </a>
        </div>

        <div className="relative w-[95%] h-[166px] flex-shrink-0 flex">
          <a href="http://kwawake.duckdns.org/move" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-[20px] bg-[#ff9800] rounded-[16px]">
              <div className="w-[177px] text-[20px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#fff]">
                몸 움직이기
              </div>
              <div className="w-[131px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#fff]">
                가볍게 하나씩 따라해보세요.
              </div>
            </div>
            <img className="absolute left-[190px] top-[4px] flex-shrink-0 object-cover" width="123" height="114" src={process.env.PUBLIC_URL + "/img/3dicons1_348.png"} alt="3d icon" />
          </a>
        </div>

        <div className="relative w-[95%] h-[68px] flex-shrink-0 flex">
          <a href="http://kwawake.duckdns.org/onion" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="w-full h-full flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#f8f8f8] rounded-[16px]">
              <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#000]">
                양파양 위로하기
              </div>
              <div className="self-stretch text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#000]">
                긍정의 말로 내 마음 속 양파 키우기
              </div>
            </div>
          </a>
        </div>

        <div className="relative w-[95%] h-[68px] flex-shrink-0 flex">
          <div className="absolute left-0 top-0 w-[100%] h-[68px] flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#ffcd63] rounded-[16px]">
            <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard_Variable'] font-black text-[#fff]">AWAKE 우울 상담 센터</div>
            <div className="self-stretch text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#fff]">자주 우울하신가요? AWAKE 우울 상담센터</div>
          </div>
          <div className="absolute left-[203px] top-[6px] w-[124px] text-[50px] leading-[24px] font-black text-[#fff] opacity-[.3]">AWA</div>
        </div>
      </div>
    </div>
  );
};

export default Depression;
