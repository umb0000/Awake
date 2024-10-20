import { useState } from 'react';
import '../output.css';

const AnxietyBook2 = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* Container for main content */}
      <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-center gap-[12px]">

        {/* First section */}
        <div className="w-[90%] flex flex-row items-center justify-center p-[10px] bg-[#ffcd63] rounded-[15px]">
          <div className="text-[14px] leading-[20px] tracking-[.01em] font-bold text-[#fff] text-center whitespace-nowrap">
            나는 별로 잘하지 못했어.
          </div>
        </div>

        {/* Second section */}
        <div className="w-[90%] h-[373px] flex flex-row items-center justify-center p-[10px] bg-[#f4f4f4] rounded-[15px]">
          <div className="text-[20px] leading-[29px] tracking-[.01em] font-bold text-[#1d1b20] text-center whitespace-nowrap">
            난 완벽하지 않아.<br />
            다른 사람들과 마찬가지로<br />
            잘하는 것도 있고 못하는 것도 있어.
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row items-start justify-between gap-[12px] w-[90%]">
          <div className="w-[45%] flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#70e9f9] rounded-[15px] cursor-pointer hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
            <div className="text-[14px] leading-[20px] tracking-[.01em] font-bold text-[#1d1b20] text-center whitespace-nowrap">
              저장하기
            </div>
          </div>
          <div className="w-[45%] flex flex-row items-center justify-center p-[10px] border-[1px] border-solid border-[#70e9f9] rounded-[15px] cursor-pointer hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
            <div className="text-[14px] leading-[20px] tracking-[.01em] font-bold text-[#1d1b20] text-center whitespace-nowrap">
              다시 선택
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AnxietyBook2;
