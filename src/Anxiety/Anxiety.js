import { useState, ReactNode } from 'react';
import '../output.css';

const Anxiety = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden  font-['Pretendard_Variable']">
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
                <div className="w-[266px] text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">불안하고 초조한 마음을 치유해요</div>
                <div className="w-[263px] text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#79747e]">침착하게 나의 불안에 대해 생각해봐요</div>
              </div>
              <img className="absolute left-[292px] top-[15px]" width="26" height="43" src={process.env.PUBLIC_URL + "/img/3dicons1_250.png"} alt="3d icon" />
            </div>
          </div>
          <div className="self-stretch h-[1px] shrink-0 bg-[#fff]"></div>
          
          <div className="w-[95%] h-[166px] shrink-0 flex flex-row items-center justify-center gap-[11px]">
          <a href='http://kwawake.duckdns.org/AnxietyBook'>
            <div className="relative w-[160px] h-[166px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[160px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#ff9800] rounded-[16px]">
                <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff]">불안의 책</div>
                <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">불안할 때 보세요</div>
              </div>
              <img className="absolute left-[81px] top-[12px]" width="66" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_257.png"} alt="3d icon" />
              <img className="absolute left-[77.19%] right-[8.44%] top-[74.1%] bottom-[12.65%]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_258.png"} alt="star" />
            </div>
          </a>

          <a href='http://kwawake.duckdns.org/AnxietyBookIndex'>
            <div className="relative w-[160px] h-[166px] shrink-0 flex">
              
              <div className="absolute left-0 top-0 w-[160px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#f8f8f8] rounded-[16px]">
                <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">책갈피</div>
                <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000]">불안의 책 스크랩 모음</div>
              </div>
              <img className="absolute left-[81px] top-[12px]" width="69" height="81" src={process.env.PUBLIC_URL + "/img/3dicons1_263.png"} alt="3d icon" />
              
            </div></a>
          </div>
          
          <a href='http://kwawake.duckdns.org/Breath' className="w-[95%] h-[68px] shrink-0 flex flex-col items-start justify-center gap-[1px] py-[10px] px-[20px] bg-[#f8f8f8] rounded-[16px] no-underline">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">
              숨 고르기
            </div>
            <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000]">
              불안하고 머리 아플 때
            </div>
          </a>

          <div className="relative w-[95%] h-[68px] shrink-0 flex">
            <div className="absolute left-0 top-0 w-[100%] h-[68px] flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#ffcd63] rounded-[16px]">
              <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#fff]">AWAKE 불안 상담 센터</div>
              <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">자주 불안하신가요? AWAKE 불안 상담센터</div>
            </div>
            <div className="absolute left-[203px] top-[6px] w-[124px] text-[50px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#fff] opacity-[.3]">AWA</div>
          </div>
        </div>
      
      
    </div>
  );
};

export default Anxiety;
