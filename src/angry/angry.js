import { useState, ReactNode, useRef } from 'react';
import '../output.css';

const Angry = () => {
    const containerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    containerRef.current.classList.add('active');
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    containerRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDown = false;
    containerRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-[100%] h-[800px] sbg-[#fff] overflow-hidden">
      {/* <div className="absolute left-0 top-[30px] w-[100%] h-[680px] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px]">
        <div className="relative w-[95%] h-[51px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
          <div className="absolute left-0 top-[5px] w-[308px] h-[41px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
            <img width="24" height="22" src={process.env.PUBLIC_URL + "/img/Vector1_233.png"} alt="icon" />
            <div className="text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#237741] text-center whitespace-nowrap">마음숲</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px] py-0 px-[19px]">
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start gap-[2px] py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">불안</div>
            <div className="self-stretch h-[2px] shrink-0 bg-[#ff9800]"></div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">분노</div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">우울</div>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">MY</div>
          </div>
        </div>*/}

        <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">
          <div className="self-stretch h-[63px] shrink-0 flex flex-row items-center justify-center bg-[#f5f5f5]">
            <div className="relative w-[337px] h-[73px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[337px] h-[73px] flex flex-col items-start justify-center gap-[3px] p-[20px] rounded-[16px]">
                <div className="w-[266px] text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">분노한 마음을 서서히 가라앉혀요</div>
                <div className="w-[263px] text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#79747e]">화가 나도 일단 진정!</div>
              </div>
              <img className="absolute left-[278px] top-[14px]" width="35" height="44" src={process.env.PUBLIC_URL + "/img/3dicons1_509.png"} alt="3d icon" />
            </div>
          </div>
          <div className="self-stretch h-[1px] shrink-0 bg-[#fff]"></div>
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="relative w-[95%] h-[166px] shrink-0 flex bg-[#6fddc6] rounded-[16px]">
              <a href='http://112.152.14.116:10201/Breath'>
                <div className="w-[70%] h-[166px] flex flex-col items-start justify-end p-[20px] ">
                  <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff]">숨 고르기</div>
                  <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">열을 내리는 호흡법으로 천천히 진정해봐요.</div>
                </div>
              
                </a>
                <div className="w-[40%] h-[166px] flex items-center justify-center" style={{ marginLeft: '5px'}}>
                  <img className="w-[108px] h-[100px]" src={process.env.PUBLIC_URL + "/img/3dicons1_517.png"} alt="3d icon" />
                </div>
            </div>
          </div>

          {/*스크롤*/}
          <div className="w-[95%] h-[166px] flex flex-row items-center justify-left gap-[11px] overflow-x-scroll scroll-smooth no-scrollbar"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <div className="relative w-[175px] h-[166px] shrink-0 flex">
        <a href='http://112.152.14.116:10201/ConflictResolution'>
          <div className="absolute left-0 top-0 w-[175px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#fe776d] rounded-[16px]">
            <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff]">갈등 대처법</div>
            <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">갈등 해결 with '상감이결'</div>
          </div>
          <img className="absolute left-[136px] top-[124px]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_523.png"} alt="star" />
          <img className="absolute left-[81px] top-[22px]" width="66" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_524.png"} alt="3d icon" />
          </a>
        </div>

        <div className="relative w-[175px] h-[166px] shrink-0 flex">
        <a href='http://112.152.14.116:10201/ConflictBoard'>
          <div className="absolute left-0 top-0 w-[175px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#ff6d00] rounded-[16px]">
            <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff]">모욕 대처법</div>
            <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">웨이의 분노 문답소</div>
          </div>
          <img className="absolute left-[136px] top-[124px]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_529.png"} alt="star" />
          <img className="absolute left-[88px] top-[22px]" width="67" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_530.png"} alt="3d icon" /></a>
        </div>

        {/* 추가된 비판 대처법 */}
        <div className="relative w-[175px] h-[166px] shrink-0 flex">
        <a href='http://112.152.14.116:10201/insult'>
          <div className="absolute left-0 top-0 w-[175px] h-[166px] flex flex-col items-start justify-end p-[20px] bg-[#b269ff] rounded-[16px]">
            <div className="self-stretch text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff]">비판 대처법</div>
            <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">비판 대처표</div>
          </div>
          <img className="absolute left-[88px] top-[22px]" width="67" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_535.png"} alt="3d icon" />
          <img className="absolute left-[75.29%] right-[11.18%] top-[74.1%] bottom-[12.65%]" width="23" height="22" src={process.env.PUBLIC_URL + "/img/별1_536.png"} alt="star" /></a>
        </div>
      </div>

          <div className="relative w-[95%] h-[68px] shrink-0 flex">
            <div className="absolute left-0 top-0 w-[100%] h-[68px] flex flex-col items-start justify-center py-[10px] px-[20px] bg-[#ffcd63] rounded-[16px]">
              <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#fff]">AWAKE 분노 상담 센터</div>
              <div className="self-stretch text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#fff]">상담이 필요하신가요? AWAKE 불안 상담센터</div>
            </div>
            <div className="absolute left-[203px] top-[6px] w-[124px] text-[50px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#fff] opacity-[.3]">AWA</div>
          </div>
        </div>
      
      
    </div>
  );
};

export default Angry;
