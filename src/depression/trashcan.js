import React from 'react';
import '../output.css';

const TrashCan = () => {
  return (
    <div className="relative w-full h-[800px] flex items-start justify-center">
      <div className="w-full max-w-[400px] h-auto flex flex-col items-center justify-start">
        <div className="w-full h-auto flex flex-col items-start justify-center ">
          <img className="w-[20%] h-auto" src={process.env.PUBLIC_URL + "/img/sqmenu.png"} alt="icon" />
        </div>
        <div className="flex flex-col items-center justify-start  w-[100%] h-auto">
          <img style={{ marginTop: '30%' }} className="w-[80%] h-auto" src={process.env.PUBLIC_URL + "/img/trashcan.png"} alt="3D icon" />

          <div style={{ marginTop: '5%', fontWeight: '800', fontSize: '6vw' }} className="w-[80%] text-[20px] leading-[100%] tracking-[.01em] font-['Pretendard_Variable'] font-extrabold text-[#000] text-center whitespace-nowrap ">
            당신을 괴롭히는 <br /> 생각을 버려볼까요?
          </div>

          {/* 수정된 버튼 스타일 */}
          <div style={{ backgroundColor: '#c0e4dc', marginTop: '10%', width: '50%', padding: '3% 0' }} className="w-[80%] flex items-center justify-center rounded-[15px] ">
            <div style={{ fontSize: '5vw' }} className="self-stretch text-center leading-[5vw] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] ">
              버리러 가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashCan;
