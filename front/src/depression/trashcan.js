import React from 'react';
import '../output.css';

const TrashCan = () => {
  return (
    <div className="relative w-[100%] h-[100%] ">
      <div className="absolute left-0 mt-[57px] w-[360px] h-[743px] flex flex-col items-center justify-start gap-[38px] py-0 px-[10px]">
        <div className="w-[360px] h-[44px] mt-[57px] flex flex-col items-start justify-center py-0 px-[20px]">
          <img width="35" height="35" src={process.env.PUBLIC_URL + "/img/sqmenu.png"} alt="icon" />
        </div>
        <div className="flex flex-col items-center justify-start gap-[38px]">
          <img width="358" height="358" src={process.env.PUBLIC_URL + "/img/trashcan.png"} alt="3D icon" />
    
          <div className="text-[20px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-extrabold text-[#000] text-center whitespace-nowrap">
            당신을 괴롭히는 <br /> 생각을 버려볼까요?
          </div>

          {/* 수정된 버튼 스타일 */}
          <div className="w-[266px] h-[35px] bg-[#c0e4dc] flex items-center justify-center rounded-[15px]">
            <div className="w-[254px] h-[16px] text-[11px] bg-[#c0e4dc] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] text-center">
              버리러 가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashCan;
