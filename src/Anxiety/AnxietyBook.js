import { useState, EventHandler, ReactNode } from 'react'
import Anxiety from './Anxiety'
import '../output.css';

const AnxietyBook = () => {
	return (<div className="relative w-full h-[800px] bg-[#fff] ">
  <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-center gap-[15px] p-[10px]">
    <div className="self-stretch h-[61px] shrink-0 flex flex-row items-center justify-center p-[10px] bg-[#fff] rounded-[15px]">
      <div className="leading-[20px] tracking-[.01em] text-[#000] text-center whitespace-nowrap"><span className="text-[16px] font-['Pretendard_Variable'] font-bold">지금 나의 마음과 <br/>가장 비슷한 말은 무엇인가요?</span><span className="text-[14px] font-['Roboto'] font-medium"> </span></div>
    </div>

    
    <div className="h-[405px] flex flex-col items-center justify-start overflow-hidden">
      <div className="h-full flex flex-col justify-start gap-[12px] overflow-y-scroll scroll-smooth no-scrollbar">
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px] shrink-0">
          <a href='/AnxietyBook2'><div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">오늘 계획한 모든 일을 끝내지 않으면, <br/>내 하루는 완전히 망한 거야</div></a>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">집 청소를 며칠 못 했어.<br/>나는 너무 게으른 사람이야.</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">일찍 못 일어났으니<br/>오늘 하루는 망했어.</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">마감일을 못 지켰으니<br/>분명 날 해고시킬 거야.</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">친구가 대화 도중 집중을 못 한 건<br/> 내 이야기가 지루했기 때문일 거야</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">프로젝트 중간에 실수가 있었으니,<br/> 아무리 잘해도 망한 거나 다름없어.</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">친구가 내 메시지를 읽지 않아.<br/> 분명히 나한테 화가 난 거야</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">나는 다른 사람들보다 항상 더 나아야 해. <br/>그렇지 않으면 난 뒤처질 거야.</div>
        </div>
        <div className="relative w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center whitespace-nowrap">항상 할 일을 완벽히 해내지 못하면, <br/>쓸모 없는 사람이나 다름없어.</div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-center justify-center p-[10px] bg-[#eeefef] rounded-[15px]">
      <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#000] whitespace-nowrap">다음</div>
    </div>
  </div>
</div>)
}

export default AnxietyBook