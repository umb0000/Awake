import { useState, ReactNode } from 'react';
import '../output.css';

const Anxiety = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden font-['Pretendard_Variable']">
      <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">
        
        {/* 불안의 책 링크 */}
        <div className="w-[95%] h-[166px] flex flex-row items-center justify-center gap-[10px]">
          <a href="http://kwawake.duckdns.org/AnxietyBook" className="relative w-[166px] h-[166px] flex">
            <div className="absolute left-0 top-0 w-[166px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#ff9800] rounded-[16px]">
              <div className="self-stretch text-[16px] leading-[24px] font-bold text-[#fff]">불안의 책</div>
              <div className="self-stretch text-[12px] leading-[10px] font-semibold text-[#fff]">불안할 때 보세요</div>
            </div>
            <img className="absolute left-[75px] top-[12px]" width="66" height="78" src={`${process.env.PUBLIC_URL}/img/3dicons1_257.png`} alt="3d icon" />
            <img className="absolute left-[77.19%] top-[74.1%]" width="23" height="22" src={`${process.env.PUBLIC_URL}/img/별1_258.png`} alt="star" />
          </a>

          {/* 책갈피 링크 */}
          <a href="http://kwawake.duckdns.org/AnxietyBookIndex" className="relative w-[166px] h-[166px] flex">
            <div className="absolute left-0 top-0 w-[166px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#f8f8f8] rounded-[16px]">
              <div className="self-stretch text-[16px] leading-[24px] font-bold text-[#000]">책갈피</div>
              <div className="self-stretch text-[12px] leading-[10px] font-semibold text-[#000]">불안의 책 스크랩 모음</div>
            </div>
            <img className="absolute left-[75px] top-[12px]" width="69" height="81" src={`${process.env.PUBLIC_URL}/img/3dicons1_263.png`} alt="3d icon" />
          </a>
        </div>

        {/* 숨 고르기 링크 */}
        <a href="http://kwawake.duckdns.org/Breath" className="w-[95%] h-[68px] flex flex-col items-start justify-center gap-[1px] py-[10px] px-[20px] bg-[#f8f8f8] rounded-[16px] no-underline">
          <div className="self-stretch text-[16px] leading-[24px] font-bold text-[#000]">숨 고르기</div>
          <div className="self-stretch text-[11px] leading-[10px] font-semibold text-[#000]">불안하고 머리 아플 때</div>
        </a>

        {/* AWAKE 불안 상담 센터 링크 */}
        <a href="http://kwawake.duckdns.org/center" target="_blank" rel="noopener noreferrer" className="relative w-[95%] h-[68px] flex">
          <div className="absolute left-0 top-0 w-[100%] h-[68px] flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#ffcd63] rounded-[16px]">
            <div className="self-stretch text-[16px] leading-[24px] font-black text-[#fff]">AWAKE 불안 상담 센터</div>
            <div className="self-stretch text-[10px] leading-[10px] font-semibold text-[#fff]">자주 불안하신가요? AWAKE 불안 상담센터</div>
          </div>
          <div className="absolute left-[203px] top-[6px] w-[124px] text-[50px] leading-[24px] font-black text-[#fff] opacity-[.3]">AWA</div>
        </a>

      </div>
    </div>
  );
};

export default Anxiety;
