import React, { useEffect } from 'react';
import twemoji from 'twemoji';
import '../output.css';

const Insult = () => {
  useEffect(() => {
    // 모든 이모지에 twemoji 적용
    twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
  }, []);

  return (
    <div className="w-[360px] h-[800px] relative bg-white font-['Pretendard_Variable']">
      <div className="w-[320px] h-[500px] mx-auto pt-10 flex flex-col items-center gap-4 pb-8">
        <div className="text-[20px] font-bold text-black flex items-center mt-10 gap-2">
          🛡️ 모욕 대처 가이드
        </div>

        {/* 상황 이해하기 */}
        <div className="w-[271px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] mt-10 shadow-sm">
          <div className="text-base font-bold text-center text-black mb-2 flex items-center justify-center gap-1">
            🎯 상황 이해하기
          </div>
          <div className="text-sm text-center text-gray-700">상대방 말의 의도를 파악해보세요.</div>
        </div>

        {/* 화살표 아이콘 */}
        <div className="flex justify-center items-center">
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="arrow" />
        </div>

        {/* 진정성 판단 */}
        <div className="w-[271px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm">
          <div className="text-sm font-bold text-center text-black flex items-center justify-center gap-1">
            🕵️ 진정성이 있는가?
          </div>
        </div>

        {/* 두 번째 화살표 */}
        <div className="flex justify-center items-center gap-20">
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="arrow" />
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="arrow" />
        </div>

        {/* 피드백 및 모욕 대처 가이드 */}
        <div className="flex gap-4">
          {/* 피드백이라면 */}
          <div className="w-[150px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm flex flex-col items-center">
            <div className="text-sm font-bold text-center text-black mb-1 flex items-center gap-1">
              ✅ 피드백이라면
            </div>
            <ul className="text-[10px] text-center text-gray-700 list-disc list-inside leading-relaxed">
              <li>문제를 인정합니다.</li>
              <li>필요 시 사과합니다.</li>
              <li>개선 방안을 논의합니다.</li>
            </ul>
          </div>

          {/* 모욕이라면 */}
          <div className="w-[150px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm flex flex-col items-center">
            <div className="text-sm font-bold text-center text-black mb-1 flex items-center gap-1">
              🚫 모욕이라면
            </div>
            <ul className="text-[10px] text-center text-gray-700 list-disc list-inside leading-relaxed">
              <li>감정을 드러내지 않습니다.</li>
              <li>침착하게 의견을 밝힙니다.</li>
              <li>맞대응은 피합니다.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insult;
