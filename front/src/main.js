import { useState, EventHandler, ReactNode } from 'react';

const Main = () => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[360px] h-[800px] flex flex-col items-center justify-start gap-[10px]">
        <div className="relative self-stretch h-[312px] shrink-0 flex">
          <img className="absolute left-0 top-0" width="360" height="312" src={process.env.PUBLIC_URL + "/img/background(임시)1_81.png"} alt="background" />
          <img className="absolute left-[104px] top-[94px]" width="143" height="178" src={process.env.PUBLIC_URL + "/img/image 171_100.png"} alt="main image" />
          <img className="absolute left-[33px] top-[223px]" width="292" height="64" src={process.env.PUBLIC_URL + "/img/Group 191_101.png"} alt="group image" />
        </div>
        <div className="relative w-[330px] h-[478px] shrink-0 flex">
          <div className="absolute left-0 top-[35px] w-[330px] h-[443px] flex flex-col items-start justify-start gap-[7px]">
            <div className="h-[27px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_119.png"} alt="todo cell 1" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_122.png"} alt="todo cell 2" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_124.png"} alt="todo cell 3" />
            </div>
            <img width="330" height="63" src={process.env.PUBLIC_URL + "/img/todo_cell1_126.png"} alt="todo cell 4" />
            <div className="relative w-[330px] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[330px] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[63px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center flex flex-col justify-center">중요도</div>
                  </div>
                  <div className="relative w-[26px] h-[22px] shrink-0 flex">
                    <div className="absolute left-[2px] top-0 w-[22px] h-[22px] bg-[#f44336] rounded-full"></div>
                    <div className="absolute left-0 top-[6px] w-[26px] h-[9px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff] text-center flex flex-col justify-center">상</div>
                  </div>
                </div>
                <div className="w-[196px] h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] flex flex-col justify-center">메일 확인하기</div>
                <img width="26" height="26" src={process.env.PUBLIC_URL + "/img/Group 121_157.png"} alt="icon" />
              </div>
            </div>
            <div className="relative w-[330px] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[330px] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[63px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center flex flex-col justify-center">중요도</div>
                  </div>
                  <div className="relative w-[26px] h-[22px] shrink-0 flex">
                    <div className="absolute left-[2px] top-0 w-[22px] h-[22px] bg-[#ff9800] rounded-full"></div>
                    <div className="absolute left-0 top-[6px] w-[26px] h-[9px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff] text-center flex flex-col justify-center">중</div>
                  </div>
                </div>
                <div className="w-[196px] h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] flex flex-col justify-center">쓰레기 버리기</div>
                <img width="26" height="26" src={process.env.PUBLIC_URL + "/img/Group 121_174.png"} alt="icon" />
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 w-[330px] h-[29px] flex">
            <div className="absolute left-0 top-0 w-[96px] h-[23px] text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000] text-center flex flex-col justify-center">8월 24일</div>
            <img className="absolute left-[303px] top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Main;
