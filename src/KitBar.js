import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navigation from './Navigation'; // 하단 네비게이션 컴포넌트 가져오기
import Diary from './calenderDiary.js';


const Kit = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('kit');

  // 경로가 변경될 때마다 활성화된 탭 업데이트
  useEffect(() => {
    // Kit 관련 경로일 때만 activeButton을 'kit'으로 설정
    if (location.pathname.startsWith('/kit')) {
      setActiveButton('kit');
    }
  }, [location]);
  return (
    <div className="relative w-full h-[100%] bg-[#fff] overflow-hidden">
      {/* 네비게이션 바 */}
      <div className="w-full h-[15%] flex flex-col items-center justify-start gap-[10px] py-[9px] px-[10px] bg-[#fff] z-10 mt-[30px]">
        <div className="relative w-[95%] h-[51px] shrink-0 flex flex-col items-start justify-start py-[7px] px-0">
          <div className="absolute left-0 top-[5px] w-[308px] h-[41px] shrink-0 flex flex-row items-center justify-start gap-[11px] overflow-hidden">
            <img width="24" height="22" src={process.env.PUBLIC_URL + "/img/Vector1_233.png"} alt="icon" />
            <div className="text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-black text-[#237741] text-center whitespace-nowrap">
              마음숲
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[10px] py-0 px-[19px]">
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <Link to="/kit/anxiety" onClick={() => handleTabClick('/kit/anxiety')}>
              <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">
                불안
              </div>
              {activeTab === '/kit/anxiety' && (
                <div className="h-[2px] bg-[#237741] transition-all duration-300"></div>
              )}
            </Link>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <Link to="/kit/angry" onClick={() => handleTabClick('/kit/angry')}>
              <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">
                분노
              </div>
              {activeTab === '/kit/angry' && (
                <div className="h-[2px] bg-[#237741] transition-all duration-300"></div>
              )}
            </Link>
          </div>
          <div className="w-[60px] shrink-0 flex flex-col items-center justify-start py-[10px] px-0">
            <Link to="/kit/depression" onClick={() => handleTabClick('/kit/depression')}>
              <div className="self-stretch text-[16px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-semibold text-[#000] text-center">
                우울
              </div>
              {activeTab === '/kit/depression' && (
                <div className="h-[2px] bg-[#237741] transition-all duration-300"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* 가로 스크롤 영역 */}
      <div className="w-full h-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory z-0">
        <div className="w-full h-full snap-start flex-shrink-0">
          <Outlet />
        </div>
      </div>


      <Navigation activeButton={activeButton} />
    </div>
  );
};

export default Kit;
