import { useRef } from 'react';
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
    const walk = (x - startX) * 2; // Scroll speed adjustment
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative w-[100%] h-auto bg-[#fff] overflow-hidden  font-['Pretendard_Variable']">
     <div className="w-[100%] flex flex-col items-center justify-start gap-[8px] bg-[#fff]">

      <div className="w-screen h-[63px] flex-shrink-0 flex items-center justify-center bg-[#f5f5f5]">        
        <div className="relative w-full max-w-[337px] h-[73px] flex items-center">
            <div className="absolute left-0 top-0 w-[337px] h-[73px] flex flex-col items-start justify-center gap-[3px] p-[20px] rounded-[16px]">
              <div className="w-[266px] text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">분노한 마음을 서서히 가라앉혀요</div>
              <div className="w-[263px] text-[11px] leading-[10px] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#79747e]">화가 나도 일단 진정!</div>
            </div>
              <img className="absolute left-[282px] top-2 object-cover" width="41" height="49" src={process.env.PUBLIC_URL + "/img/3dicons1_509.png"} alt="3d icon" />
        </div>
      </div>
       
       <div className="relative w-[95%] h-[166px] flex-shrink-0">
          <a href="http://kwawake.duckdns.org/Breath" className="relative block w-full h-full rounded-[16px] overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-5 bg-[#6fddc6] rounded-lg">
              <div className="text-[20px] font-bold text-white">숨 고르기</div>
              <div className="text-[13px] font-semibold text-white">열을 내리는 호흡법으로 천천히 진정해봐요.</div>
            </div>
            <img className="absolute right-5 top-3 object-cover" width="108" height="100" src={process.env.PUBLIC_URL + "/img/3dicons1_517.png"} alt="3d icon" />
          </a>
        </div>

        <div className="relative w-[95%] h-[166px] flex-shrink-0">
  <a href="http://kwawake.duckdns.org/ConflictBoard" className="relative block w-full h-full rounded-[16px] overflow-hidden">
    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-[#f2b0c8] rounded-lg">
      <img
        src={process.env.PUBLIC_URL + "/img/CB.png"}
        alt="분노 상담소"
        className="object-contain w-full h-full"
      />
    </div>
  </a>
</div>


        {/* Scrollable section */}
        <div className="w-[95%] h-[166px] shrink-0 flex flex-row items-center justify-center gap-[10px]"
        ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          <div className="relative w-[170px] h-[166px] flex-shrink-0 flex">
            <a href="http://kwawake.duckdns.org/ConflictResolution" className="relative block w-full h-full rounded-[16px] overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-5 bg-[#fe776d] rounded-lg">
                <div className="text-[20px] font-bold text-white">갈등 대처법</div>
                <div className="text-[13px] font-semibold text-white">'상감이결'로 갈등해결</div>
              </div>
              <img className="absolute left-[81px] top-[22px]" width="66" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_524.png"} alt="3d icon" />
            </a>
          </div>

          <div className="relative w-[170px] h-[166px] flex-shrink-0 flex">
            <a href="http://kwawake.duckdns.org/insult" className="relative block w-full h-full rounded-[16px] overflow-hidden">
              <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-end p-5 bg-[#b269ff] rounded-lg">
                <div className="text-[20px] font-bold text-white">비판 대처법</div>
                <div className="text-[13px] font-semibold text-white">비판 대처표</div>
              </div>
              <img className="absolute left-[88px] top-[22px]" width="67" height="78" src={process.env.PUBLIC_URL + "/img/3dicons1_535.png"} alt="3d icon" />
            </a>
          </div>
        </div>

        <a href="https://angerlink.com" target="_blank" rel="noopener noreferrer" className="relative w-[95%] h-[68px] flex-shrink-0">
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-center py-3 px-5 bg-[#ffcd63] rounded-[16px]">
            <div className="self-stretch text-[16px] leading-[24px] font-black text-[#fff]">AWAKE 분노 상담 센터</div>
            <div className="self-stretch text-[11px] leading-[10px] font-semibold text-[#fff]">화를 참기 힘들 때가 많나요? AWAKE 분노 상담센터</div>
          </div>
          <div className="absolute right-5 top-1 w-[124px] text-[50px] font-black text-white opacity-30">AWA</div>
        </a>
        </div>
    </div>
  );
};

export default Angry;
