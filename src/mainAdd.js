import { useState, EventHandler, ReactNode } from 'react'
import './output.css'

const MainAdd = () => {
	return (<div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
  <div className="absolute left-0 top-0 w-[360px] h-[800px] bg-[#0000001a]"></div>
  <div className="absolute -translate-x-1/2 left-1/2 top-[484px] w-[330px] flex flex-col items-start justify-start">
    <div className="self-stretch flex flex-row items-center justify-between">
      <div className="w-[165px] h-[41px] shrink-0 flex flex-row items-center justify-center py-[6px] px-[69px] bg-[#fff] rounded-tl-[10px] rounded-tr-0 rounded-br-0">
        <div className="text-[13px] leading-[28px] font-['Pretendard'] font-bold text-[#000] text-right whitespace-nowrap">할 일</div>
      </div>
      <div className="w-[165px] h-[41px] shrink-0 flex flex-row items-center justify-center py-[6px] px-[71px] bg-[#f4f7f8] rounded-tl-0 rounded-tr-[10px] rounded-br-0 rounded-bl-0">
        <div className="text-[13px] leading-[28px] font-['Pretendard'] font-bold text-[#000] text-right whitespace-nowrap">루틴</div>
      </div>
    </div>
    <div className="self-stretch h-[275px] shrink-0 flex flex-col items-center justify-center py-[15px] px-[18px] bg-[#fff]">
      <div className="w-[290px] flex flex-col items-start justify-start gap-[6px]">
        <div className="w-[290px] h-[42px] shrink-0 flex flex-row items-center justify-start py-[3px] px-[13px] bg-[#f4f7f8]">
          <div className="text-[13px] leading-[28px] font-['Pretendard'] font-bold text-[#d9d9d9] text-right whitespace-nowrap">제목을 입력하세요.</div>
        </div>
        <div className="w-[290px] flex flex-row items-start justify-start gap-[5px]">
          <div className="w-[142px] h-[40px] shrink-0 flex flex-row items-center justify-center py-[8px] px-[49px] bg-[#fff] border-[1px] border-solid border-[#f4f7f8] rounded-[2px]">
            <div className="w-[44px] h-[23px] text-[12px] leading-[28px] font-['Pretendard'] font-bold text-[#49454f] text-center flex flex-col justify-center">중요 🚩</div>
          </div>
          <div className="w-[142px] h-[40px] shrink-0 flex flex-row items-center justify-center py-[9px] px-[36px] bg-[#fff] border-[1px] border-solid border-[#f4f7f8] rounded-[2px]">
            <div className="w-[49px] h-[22px] text-[12px] leading-[28px] font-['Pretendard'] font-bold text-[#49454f] text-center flex flex-col justify-center">긴급 🚨</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] shrink-0 flex flex-row items-center justify-start gap-[17px] py-0 px-[14px] bg-[#fff] border-[1px] border-solid border-[#f4f7f8]">
          <div className="w-[148px] text-[12px] leading-[28px] font-['Roboto'] text-[#49454f]">반복</div>
          <div className="relative w-[98px] h-[28px] shrink-0 flex">
            <img className="absolute left-[86px] top-[7px]" width="12" height="14" src="Forward154_493.png"></img>
            <div className="absolute left-0 top-0 w-[79px] text-[12px] leading-[28px] font-['Roboto'] text-[#49454f] text-right">한 번만</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] shrink-0 flex flex-row items-center justify-start gap-[17px] py-0 px-[14px] bg-[#fff] border-[1px] border-solid border-[#f4f7f8]">
          <div className="w-[148px] text-[12px] leading-[28px] font-['Roboto'] text-[#49454f]">날짜</div>
          <div className="relative w-[98px] h-[28px] shrink-0 flex">
            <img className="absolute left-[86px] top-[7px]" width="12" height="14" src="Forward154_498.png"></img>
            <div className="absolute left-0 top-0 w-[79px] text-[12px] leading-[28px] font-['Roboto'] text-[#49454f] text-right">8월 24일</div>
          </div>
        </div>
        <div className="w-[290px] h-[42px] shrink-0 flex flex-row items-center justify-center py-[5px] px-[100px] bg-[#d9d9d9] rounded-[5px]">
          <div className="text-[16px] leading-[28px] font-['Pretendard'] font-bold text-[#fff] whitespace-nowrap">추가하기</div>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default MainAdd;