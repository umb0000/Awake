import React from 'react';
import '.././output.css';

const Unlogined = () => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[360px] h-[800px] flex flex-col items-center justify-center gap-[100px] py-[80px] px-[5px]">
        <img width="189" height="43" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        <div className="h-[101px] shrink-0 flex flex-col items-center justify-center gap-[5px]">
          <a href="/login">
            <button className="w-[280px] h-[50px] flex items-center justify-center bg-[#ff6d00] rounded-[30px]">
              <div className="text-[16px] leading-[24px] font-['Pretendard'] font-bold text-[#fff] text-center">
                로그인
              </div>
            </button>
          </a>
          <div className="flex justify-center items-center w-full mt-2 text-[12px] leading-[10px] font-['Pretendard'] font-medium text-center">
  <span className="text-[#b0a7a3]">계정이 아직 없으신가요?</span>
  <a href="/join" className="text-[#ff7936] ml-1">
    계정 만들기
  </a>
</div>
        </div>
      </div>
    </div>
  );
}

export default Unlogined;
