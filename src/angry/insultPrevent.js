import React, { useState } from 'react';
import '../output.css';

const InsultFeedbackExample = () => {
  const [showExample, setShowExample] = useState(null); // null = 기본 화면, 'feedback' = 피드백 예시, 'insult' = 모욕 예시

  const renderGuide = () => (
    <div className={`w-full h-screen bg-white flex flex-col font-['Pretendard_Variable'] pt-11 rounded-lg z-10 ${showExample && 'opacity-50'}`}>
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-2 border-b">
      <span className="text-[20px] font-bold text-black">
       <img src="/img/shield.png" alt="shield" className="inline w-5 h-5 mb-1" /> 모욕 대처 가이드
        </span>

      </div>

      {/* Guide Content */}
      <div className="flex flex-col items-center gap-4 pt-10">
        <div className="w-[271px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm">
          <div className="text-base font-bold text-center text-black mb-2">
            <img src="/img/hit.png" alt="target" className="inline w-5 h-5 mb-2" /> 상황 이해하기
          </div>
          <div className="text-sm text-center text-gray-700">상대방 말의 의도를 파악해보세요.</div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="down arrow" />
        </div>
        <div className="w-[271px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm">
          <div className="text-sm font-bold text-center text-black">
            <img src="/img/magnify.png" alt="magnifier" className="inline w-5 h-5 mr-1" /> 진정성이 있는가?
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 mt-2">
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="down arrow" />
          <img className="w-[24px] h-[24px] opacity-80" src="/img/Chevrons down.png" alt="down arrow" />
        </div>
        <div className="flex gap-4">
          <button
            className="w-[160px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm flex flex-col items-center"
            onClick={() => setShowExample('feedback')}
          >
            <div className="text-sm font-bold text-center text-black mb-1">
              <img src="/img/check_icon.png" alt="check" className="inline w-4 h-4 mb-1" /> 피드백이라면
            </div>
            <ul className="text-[10px] text-center text-gray-700 list-disc list-inside leading-relaxed">
              <li>문제를 인정합니다.</li>
              <li>필요 시 사과합니다.</li>
              <li>개선 방안을 논의합니다.</li>
            </ul>
            <div className="flex items-center text-[10px] text-[#6A89A5] text-center mt-1 gap-1">
              <img src="/img/info.png" alt="info" className="w-3 h-3 inline" /> 누르면 예시가 나옵니다
            </div>
          </button>

          <button
            className="w-[160px] p-4 bg-white rounded-[15px] border border-[#d9d9d9] shadow-sm flex flex-col items-center"
            onClick={() => setShowExample('insult')}
          >
            <div className="text-sm font-bold text-center text-black mb-1">
              <img src="/img/prohibbited.png" alt="stop" className="inline w-4 h-4 mb-1" /> 모욕이라면
            </div>
            <ul className="text-[10px] text-center text-gray-700 list-disc list-inside leading-relaxed">
              <li>감정을 드러내지 않습니다.</li>
              <li>침착하게 의견을 밝힙니다.</li>
              <li>맞대응은 피합니다.</li>
            </ul>
            <div className="flex items-center text-[10px] text-[#6A89A5] text-center mt-1 gap-1">
              <img src="/img/info.png" alt="info" className="w-3 h-3 inline" /> 누르면 예시가 나옵니다
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderExample = () => (
    <div className="fixed inset-0 flex justify-center items-end bg-gray-800 bg-opacity-50 z-20">
      <div className="w-full max-w-[340px] h-[400px] bg-white p-4 shadow-lg rounded-t-2xl relative font-['Pretendard_Variable']">
        {/* Close Button */}
        <button
          onClick={() => setShowExample(null)}
          className="absolute top-2 right-4 text-gray-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Toggle Between Feedback and Insult Examples */}
        <div className="flex justify-center gap-4 my-4">
          <button
            className={`px-3 py-1 rounded-full ${showExample === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowExample('feedback')}
          >
            피드백 예시
          </button>
          <button
            className={`px-3 py-1 rounded-full ${showExample === 'insult' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setShowExample('insult')}
          >
            모욕 예시
          </button>
        </div>

        {/* 상황 설명 */}
        <div className="text-gray-500 text-xs text-center my-4 font-['Pretendard_Variable']">
          {showExample === 'feedback'
            ? "상황: 작성한 보고서가 미흡하여 상사가 보낸 메세지입니다."
            : "상황: 프로젝트 지연되어 상사가 보낸 메세지입니다."}
        </div>

        {/* 메시지 UI */}
        <div className="h-[250px] px-4 space-y-4 font-['Pretendard_Variable'] overflow-y-auto">
          {/* 상대방 메시지와 설명 */}
          <div className="flex justify-start">
            <div className="max-w-[70%] bg-gray-200 p-3 rounded-lg shadow-md text-sm text-black">
              {showExample === 'feedback'
                ? "이번 보고서의 수준이 기대에 못 미칩니다. 다음 번엔 좀 더 신경 써주세요."
                : "대체 이 일을 어떻게 하는 겁니까? 이런 실수는 이제 그만하세요."}
            </div>
          </div>
          <div className="text-gray-500 text-xs text-left ml-1 flex items-center gap-1">
            <img src="/img/arrow_up.png" alt="up arrow" className="w-4 h-4 inline" />
            {showExample === 'feedback'
              ? "위 메시지는 개선을 요청하는 피드백입니다."
              : "위 메시지는 감정을 상하게 하는 모욕적 표현입니다."}
          </div>

          {/* 사용자의 대처 예시 메시지 */}
          <div className="flex justify-end">
            <div className="max-w-[70%] bg-green-500 text-white p-3 rounded-lg shadow-md text-sm">
              {showExample === 'feedback'
                ? "알겠습니다. 다음에는 좀 더 신경 써서 작업하겠습니다. 피드백 감사합니다."
                : "제가 신중히 진행하지 못해 죄송합니다. 앞으로는 주의하겠습니다."}
            </div>
          </div>
        </div>

        {/* Footer explanation */}
        <div className="flex items-center justify-center text-gray-400 text-xs mt-2">
        <span className="mr-1 text-gray-400">ⓘ</span> 
          이 화면은 효과적인 대처를 돕기 위한 예시입니다.
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {renderGuide()}
      {showExample && renderExample()}
    </div>
  );
};

export default InsultFeedbackExample;
