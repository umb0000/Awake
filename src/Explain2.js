import React from 'react';
import './output.css';

const Explain2 = () => {
  return (
    <div className="w-[360px] h-screen bg-white relative pt-20">
      {/* 상단 점 세 개 */}
      <div className="absolute top-20 left-6 flex gap-2">
        <div className="w-[11px] h-[11px] bg-[#ff6d00] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-col justify-start items-start gap-5 px-6 pt-16">
        <div>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">사소한, 갑작스러운, 만성적인<br/></span>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">감정</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">을 들려주세요</span>
        </div>

        {/* 박스 이미지와 마음숲 텍스트 */}
        <div className="flex items-center gap-2">
          <img src="/img/kitbox.png" alt="Box Icon" className="w-6 h-6" />
          <div className="text-[#ff6d00] text-2xl font-black font-['Pretendard'] leading-normal tracking-wide">
            마음숲
          </div>
        </div>

        <div className="self-stretch text-[#1d1b20] text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">
          바쁘고 걱정이 많은 현대 사회, <br/>마음이 정리되지 않으면 할 일을 할 수 없어요.<br/>
          10여 가지의 CBT (인지행동치료, Cognitive behavioral therapy) 방법으로 탄생한 어웨이크의 마음숲에서 <br/>당신의 감정을 들려주세요.
        </div>

        <img className="w-[307px] h-[351px]" src="/img/book.png" alt="CBT-based Emotional Support Graphic" />
      </div>

      {/* 하단 버튼에 링크 추가 */}
      <a href="/explain3" className="w-full h-[55px] bg-[#ff6d00] absolute bottom-0 flex items-center justify-center">
        <span className="text-white text-sm font-semibold font-['Pretendard'] leading-tight tracking-wide">다음</span>
      </a>
    </div>
  );
};

export default Explain2;
