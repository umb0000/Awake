import React from 'react';
import './output.css';

const Explain3 = () => {
  return (
    <div className="w-[360px] h-[86vh] bg-white relative">
      <div className="absolute top-4 left-6 flex gap-2 rotate-180">
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#ff6d00] rounded-full" />
      </div>

      <div className="flex flex-col justify-start items-start gap-5 px-6 pt-16">
        <div>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">레벨업하며<br/>더 많은 </span>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">웨이냥</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">을 모아보세요!</span>
        </div>

        <div className="self-stretch text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">
          당신의 러닝메이트,<br />어웨이크 웨이냥들이 당신을 기다리고 있어요!
        </div>

        <img className="w-[359px] h-[363px]" src="/img/catcatcat.png" alt="Level up rewards image" />
      </div>

      <a href="/main" className="w-full h-[55px] bg-[#ff6d00] absolute bottom-0 flex items-center justify-center">
        <span className="text-white text-sm font-semibold font-['Pretendard'] leading-tight tracking-wide">다음</span>
      </a>
    </div>
  );
};

export default Explain3;
