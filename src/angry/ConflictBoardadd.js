import { useState } from 'react';
import '../output.css'; // 전체 프로젝트 스타일

const ConflictBoardadd = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden  font-['Pretendard_Variable']">
      {/* Main Container */}
      <div className="absolute top-0 left-0 w-[100%] h-[100%] flex flex-col items-center justify-center gap-[15px] bg-[#fbc3bc00] p-[10px]">

        {/* 첫 번째 카드 */}
        <div className="w-[100%] flex flex-col items-center gap-[15px] bg-[#fff5a6] border border-solid border-[#d9d9d9] rounded-[15px] p-[10px]">
          <div className="w-full text-[16px] font-bold text-[#000]">그 말을 듣고 왜 기분이 나빠졌는가?</div>
          <div className="w-full text-[10px] font-medium text-[#9c9c9c] mb-2">
            예시: 상사가 나를 무시하는 것처럼 들려서 기분이 나빴어. 내가 열심히 일했는데, 그걸 전혀 인정받지 못한 것 같았어.
          </div>
          <div className="flex items-center justify-between w-full bg-[#fff] rounded-[10px] p-[10px]">
            <input
              type="text"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="내용을 입력해주세요..."
              className="w-[85%] text-[11px] leading-[18px] bg-transparent border-none focus:outline-none"
            />
            <button className="w-[33px] h-[36px] bg-[#ffcd63] rounded-[8px] flex items-center justify-center">
              <img width="21" height="16" src={process.env.PUBLIC_URL + "/img/enter_icon.png"} alt="enter" />
            </button>
          </div>
        </div>

        {/* 두 번째 카드 */}
        <div className="w-[100%] flex flex-col items-center gap-[15px] bg-[#fff48f] border border-solid border-[#d9d9d9] rounded-[15px] p-[10px]">
          <div className="w-full text-[16px] font-bold text-[#000]">그 말과 관련해 무엇이 당신을 화나게 했는가?</div>
          <div className="w-full text-[11px] font-semibold text-[#000]">
            말의 내용? 말하는 방식? 어조? 태도? 신체 언어?
          </div>
          <div className="w-full text-[10px] font-medium text-[#9c9c9c] mb-2">
            예시: 어조가 매우 공격적이었어. 말을 하면서 비꼬는 듯한 목소리였고, 나를 깔보는 느낌을 받았어.
          </div>
          <div className="flex items-center justify-between w-full bg-[#fff] rounded-[10px] p-[10px]">
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="내용을 입력해주세요..."
              className="w-[85%] text-[11px] leading-[18px] bg-transparent border-none focus:outline-none"
            />
            <button className="w-[33px] h-[36px] bg-[#ffcd63] rounded-[8px] flex items-center justify-center">
              <img width="21" height="16" src={process.env.PUBLIC_URL + "/img/enter_icon.png"} alt="enter" />
            </button>
          </div>
        </div>

        {/* 세 번째 카드 */}
        <div className="w-[100%] flex flex-col items-center gap-[15px] bg-[#fff5a6] border border-solid border-[#d9d9d9] rounded-[15px] p-[10px]">
          <div className="w-full text-[16px] font-bold text-[#000]">상대가 그 말을 한 이유는 무엇일까?</div>
          <div className="w-full text-[10px] font-medium text-[#9c9c9c] mb-2">
            예시: 본인이 스트레스를 받고 있어서 나에게 화풀이를 한 것 같아. 내 실수를 지적하고 싶었겠지만 방법이 너무 과격했어.
          </div>
          <div className="flex items-center justify-between w-full bg-[#fff] rounded-[10px] p-[10px]">
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              placeholder="내용을 입력해주세요..."
              className="w-[85%] text-[11px] leading-[18px] bg-transparent border-none focus:outline-none"
            />
            <button className="w-[33px] h-[36px] bg-[#ffcd63] rounded-[8px] flex items-center justify-center">
              <img width="21" height="16" src={process.env.PUBLIC_URL + "/img/enter_icon.png"} alt="enter" />
            </button>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full flex items-center justify-center bg-[#eeefef] rounded-[10px] p-[10px]">
          <button className="text-[14px] font-medium text-[#000]">다음</button>
        </div>
      </div>
    </div>
  );
};

export default ConflictBoardadd;
