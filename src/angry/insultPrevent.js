import React, { useState } from 'react';
import '../output.css';

const InsultFeedbackExample = () => {
  const [isFeedbackExample, setIsFeedbackExample] = useState(true);

  return (
    <div className="w-[360px] h-[800px] mx-auto bg-white font-['Pretendard_Variable'] p-4 shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-center items-center px-4 py-2 border-b">
        <span className="text-lg font-bold text-black">모욕 대처 가이드</span>
      </div>

      {/* Toggle Between Feedback and Insult Examples */}
      <div className="flex justify-center gap-4 my-4">
        <button
          className={`px-3 py-1 rounded-full ${isFeedbackExample ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setIsFeedbackExample(true)}
        >
          피드백 예시
        </button>
        <button
          className={`px-3 py-1 rounded-full ${!isFeedbackExample ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setIsFeedbackExample(false)}
        >
          모욕 예시
        </button>
      </div>

      {/* Situation Explanation */}
      <div className="text-gray-500 text-xs text-center my-4 ">
        {isFeedbackExample ? (
            <>
            상황: 당신이 작성한 보고서가 일부 미흡한 부분이 있어 <br />
            상사가 개선을 요청한 상황입니다.
            </>
        ) : (
            <>
            상황: 프로젝트가 지연된 이유로 <br />
            상사가 당신에게 비난을 표한 상황입니다.
            </>
        )}
      </div>


      {/* Chat Example UI */}
      <div className="overflow-y-scroll h-[550px] px-4 space-y-6">
        {isFeedbackExample ? (
          // Feedback Example Messages
          <>
            {/* 상대방의 피드백 메시지 */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-start">
                <div className="max-w-[70%] bg-gray-200 p-3 rounded-lg shadow-md text-sm text-black">
                  "이번 보고서에 몇 가지 빠진 부분이 있어요. 다음 번에는 이 점들을 더 신경 써주세요."
                </div>
              </div>

              {/* Explanation with Spacing and Divider */}
              <div className="flex flex-col items-center my-4">
                <div className="h-px w-2/3 bg-gray-300 mt-4 mb-4"></div>
                <span className="text-gray-500 text-xs text-center">
                  이 메시지는 개선을 위한 피드백으로, <br/> 업무 능력을 향상시키기 위한 조언입니다.
                </span>
              </div>
            </div>

            {/* User Response */}
            <div className="flex justify-end mt-4">
              <div className="max-w-[70%] bg-green-500 text-white p-3 rounded-lg shadow-md text-sm">
                "알겠습니다. 다음 번에는 더 신경 쓰겠습니다. 피드백 주셔서 감사합니다."
              </div>
            </div>
          </>
        ) : (
          // Insult Example Messages
          <>
            {/* 상대방의 모욕적 표현 */}
            <div className="flex flex-col space-y-2">
              <div className="flex justify-start">
                <div className="max-w-[70%] bg-gray-200 p-3 rounded-lg shadow-md text-sm text-black">
                  "이런 식으로밖에 일 처리를 못한다면 도대체 어떻게 하려는 거죠? 정말 답답하네요."
                </div>
              </div>

              {/* Explanation with Spacing and Divider */}
              <div className="flex flex-col items-center my-4">
                <div className="h-px w-2/3 bg-gray-300 mt-4 mb-4"></div>
                <span className="text-gray-500 text-xs text-center">
                  이 메시지는 비난과 감정적 표현이 포함된 모욕입니다.
                </span>
              </div>
            </div>

            {/* User Response */}
            <div className="flex justify-end mt-4">
              <div className="max-w-[70%] bg-green-500 text-white p-3 rounded-lg shadow-md text-sm">
                "죄송합니다. 다음에는 더 주의를 기울여 진행하겠습니다."
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer Space */}
      <div className="text-gray-400 text-center text-xs mt-4">
        ⓘ 본 예시는 모욕과 피드백을 구분을 돕기 위해 작성되었습니다.
      </div>
    </div>
  );
};

export default InsultFeedbackExample;
