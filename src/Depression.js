import React from 'react';
import './output.css';

const Depression = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
     {/* <div className="absolute left-0 top-[30px] w-[100%] h-[680px] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px]">
        <div className="relative w-[95%] h-[51px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
          <div className="absolute left-0 top-[5px] w-[308px] h-[41px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
            <img width="24" height="22" src={process.env.PUBLIC_URL + "/img/Vector1_233.png"} alt="icon" />
            <div className="text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#237741] text-center whitespace-nowrap">마음숲</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px] py-0 px-[19px]">
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start gap-[2px] py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">불안</div>
            <div className="self-stretch h-[2px] shrink-0 bg-[#ff9800]"></div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">분노</div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">우울</div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">MY</div>
          </div>
        </div>*/}
        <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">
          <div className="self-stretch h-[63px] shrink-0 flex flex-row items-center justify-center bg-[#f5f5f5]">
            <div className="relative w-[337px] h-[73px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[337px] h-[73px] flex flex-col items-start justify-center gap-[3px] p-[20px] rounded-[16px]">
                <div className="w-[266px] text-[16px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#000]">우울한 마음을 보듬어요</div>
                <div className="w-[263px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-medium text-[#79747e]">나의 마음을 들여다봐요</div>
              </div>
              <img className="absolute left-[278px] top-[11px]" width="41" height="49" src={process.env.PUBLIC_URL + "/img/3dicons1_335.png"} alt="3d icon" />
            </div>
          </div>

          <div className="relative w-[95%] h-[166px] shrink-0 flex">
            <a href='http://112.152.14.116:10201/trashcan'>
              <div className="absolute left-0 top-0 w-[100%] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#88d6e7] rounded-[16px]">
                <div className="self-stretch text-[20px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#fff]">감정 쓰레기통</div>
                <div className="w-[111px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#fff]">지금 우리에게 필요한 것</div>
              </div>
            <img className="absolute left-[87.22%] right-[5.98%] top-[75.3%] bottom-[11.45%]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_341.png"} alt="star" />
            <img className="absolute left-[211px] top-[12px]" width="108" height="100" src={process.env.PUBLIC_URL + "/img/3dicons1_342.png"} alt="3d icon" /></a>
          </div>

          <div className="relative w-[95%] h-[166px] shrink-0 flex">
          <a href='http://112.152.14.116:10201/move'>
            <div className="absolute left-0 top-0 w-[100%] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#ff9800] rounded-[16px]">
              <div className="w-[177px] text-[20px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#fff]">몸 움직이기</div>
              <div className="w-[131px] text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#fff]">가볍게 하나씩 따라해보세요.</div>
            </div>
            <img className="absolute left-[190px] top-[4px]" width="123" height="114" src={process.env.PUBLIC_URL + "/img/3dicons1_348.png"} alt="3d icon" /></a>
            <img className="absolute left-[87.22%] right-[5.98%] top-[75.3%] bottom-[11.45%]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_349.png"} alt="star" />
          </div>

          <a className="w-[95%] h-[68px] shrink-0 flex " href='http://112.152.14.116:10201/onion'>
          <div className="w-[95%] h-[68px] shrink-0 flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#f8f8f8] rounded-[16px]">
            <div className="self-stretch text-[16px] leading-[24px] font-['Pretendard_Variable'] font-bold text-[#000]">양파 키우기</div>
            <div className="self-stretch text-[10px] leading-[10px] font-['Pretendard_Variable'] font-semibold text-[#000]">긍정의 말로 내 마음 속 양파 키우기</div>
          </div></a>

          <div className="relative w-[95%] h-[68px] shrink-0 flex">
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
