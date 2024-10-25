import React from 'react';
import '../output.css';

const Move = () => {
  return (
    <div className="w-[360px] h-[800px] pb-[97px] bg-white flex-col justify-start items-start gap-3 inline-flex "> {/* 전체를 20px 아래로 내리기 위해 mt-[20px] 추가 */}
      <div className="self-stretch h-[646px] px-2.5 flex-col justify-center items-center pt-8 gap-4 inline-flex">
        <div className="p-2.5 flex-col justify-start items-center gap-4 flex mt-[20px]">
          <div className="w-[340px] h-[53px] px-5 flex-col justify-center items-center gap-[3px] flex">
            <div className="w-[340px] h-[30px] px-4 justify-center items-center gap-[26px] inline-flex">
              <div className="w-[115px] text-black text-2xl font-bold font-['Pretendard'] leading-normal tracking-wide">
                몸 움직이기
              </div>
            </div>
            <div className="w-[340px] h-4 px-4 justify-center items-center gap-px inline-flex">
              <div className="w-[254px] h-4 text-center text-black text-[11px] font-light font-['Pretendard'] leading-normal tracking-wide">
                랜덤으로 표시되는 행동을 1분 안에 완료하세요!
              </div>
            </div>
          </div>
          <div className="w-[340px] h-[549px] flex-col justify-start items-center gap-2.5 flex">
            <div className="self-stretch h-[500px] justify-center items-start gap-2.5 inline-flex">
              <div className="w-[339.50px] h-[485px] relative">
                <img
                  className="w-[339.50px] h-[485px] left-0 top-0 absolute object-cover"
                  src="/img/move_body.png"
                  alt="move-body"
                />
                <div className="w-[47px] h-[47px] left-[145.75px] top-[161px] absolute justify-center items-center inline-flex">
                  <img className="w-[47px] h-[47px]" src="/img/emoji_cat.png" alt="emoji icon" />
                </div>
                <div className="w-[145.23px] h-[33px] left-[96.75px] top-[250px] absolute text-center text-[#ff845a] text-4xl font-bold font-['Pretendard'] leading-normal tracking-wide">
                  01 : 00
                </div>
                <div className="w-[145.23px] h-[23px] p-[19px] left-[96.75px] top-[213px] absolute bg-[#ff9d7b] rounded flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[125px] text-center text-white text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">
                    노래 들으며 몸 흔들기
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[266px] h-[35px] p-1.5 bg-[#ffdade] rounded-[15px] justify-center items-center gap-1.5 inline-flex">
              <div className="w-[254px] h-4 text-center text-black text-[11px] font-medium font-['Pretendard'] leading-normal tracking-wide">
                시작
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Move;
