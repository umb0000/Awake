import React from 'react';
import './output.css';

const Explain1 = () => {
  return (
    <div className="w-[360px] h-[86vh] bg-white relative">
      <div className="absolute top-4 left-6 flex gap-2">
        <div className="w-[11px] h-[11px] bg-[#ff6d00] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
      </div>

      <div className="flex flex-col justify-start items-start gap-5 px-6 pt-16">
        <div>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">먼저</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight"> 해야 할 일을 <br/></span>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">먼저</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight"> 하도록 도와줄게요</span>
        </div>

        <img className="w-[143px] h-[46px]" src="/img/levelexplain.png" alt="Eisenhower Matrix Example" />

        <div>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">아이젠하워 매트릭스 (The Eisenhower Matrix) 를 아세요?<br/></span>
          <span className="text-[#ff6d00] text-xs font-bold font-['Pretendard'] leading-[18px] tracking-tight">긴급성</span>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">과 </span>
          <span className="text-[#ff6d00] text-xs font-bold font-['Pretendard'] leading-[18px] tracking-tight">중요도</span>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">에 따라 업무를 체계적으로 정리하는 방법으로, <br/>가장 중요한 업무의 우선순위를 효과적으로 지정할 수 있습니다.</span>
        </div>

        <img className="self-stretch h-[311px]" src="/img/matrix.png" alt="Matrix Diagram" />
      </div>

      <a href="/explain2" className="w-full h-[55px] bg-[#ff6d00] absolute bottom-0 flex items-center justify-center">
        <span className="text-white text-sm font-semibold font-['Pretendard'] leading-tight tracking-wide">다음</span>
      </a>
    </div>
  );
};

export default Explain1;
