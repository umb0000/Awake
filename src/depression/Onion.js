import React, { useState } from 'react';

const EncouragementPage = () => {
  const encouragements = [
    "지금 느끼는 어려움도 곧 지나갈 거야.",
    "넌 충분히 소중하고 존재 자체가 의미 있어.",
    "너는 있는 그대로 사랑받을 자격이 있어.",
    "완벽하지 않아도 돼. 충분히 노력하고 있어.",
  ];

  const [isEncouraged, setIsEncouraged] = useState(false); // 상태 전환
  const [selectedMessage, setSelectedMessage] = useState(''); // 선택한 메시지 저장
  const [isInputMode, setIsInputMode] = useState(false); // 직접 입력 모드 여부
  const [inputText, setInputText] = useState('');

  // 메시지 클릭 시
  const handleMsgClick = (msg) => {
    setSelectedMessage(msg);
    setIsEncouraged(true);
  };

  // 직접 입력 후 제출 시
  const handleEnterClick = () => {
    setSelectedMessage(inputText);
    setIsEncouraged(true);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white font-['Pretendard_Variable']">
      <div className="w-[360px] h-[800px] relative bg-white">
        {isEncouraged ? (
          <div>
            {/* 선택된 메시지 표시 화면 */}
            <div className="w-[360px] h-[800px] relative bg-white">
              <div className="w-[317px] h-[737px] left-[22px] top-[63px] absolute flex-col justify-start items-start gap-3 inline-flex">
                <div className="w-[316px] h-[737px] p-0.5 bg-[#fbc3bc]/0 rounded-[15px] border border-[#d9d9d9]/0 flex-col justify-center items-center gap-[5px] flex">
                  <div className="w-[316px] h-[667px] px-[5px] py-0.5 bg-[#fbc3bc]/0 rounded-[15px] border border-[#d9d9d9]/0 flex-col justify-start items-center gap-4 flex">
                    <div className="w-[316px] h-[47px] flex-col justify-start items-center gap-[5px] flex">
                      <div className="w-[118px] text-center text-black text-2xl font-bold leading-tight tracking-tight">양파 키우기</div>
                      <div className="w-[168px] text-center text-black text-[12px] font-medium leading-tight tracking-tight">양파 양과 함께 긍정의 말을 연습해요</div>
                    </div>
                    <div className="w-[316px] h-[302px] flex-col justify-start items-center gap-2.5 flex">
                      <img className="self-stretch h-[306px]" src="/img/happy_onion.png" alt="Onion character" />
                    </div>
                    <div className="h-9 p-2.5 bg-[#237740] flex-col justify-between items-center inline-flex">
                      {/* 선택된 메시지 표시 */}
                      <div className="w-[162px] text-center text-white text-[11px] font-bold leading-tight tracking-tight">
                        {selectedMessage}
                      </div>
                    </div>
                    <div className="w-[316px] h-11 flex-col justify-start items-center gap-3 flex mt-3">
                      <div className="w-[262px] h-10 text-center text-[15px] text-black text-sm font-medium leading-tight tracking-tight">
                        당신의 위로 덕분에<br />양파 양이 기운을 되찾았어요!
                      </div>
                    </div>
                    <div className="w-[316px] h-[184px] flex-col justify-end items-center gap-2.5 inline-flex">
                      <div className="self-stretch h-9 p-2.5 bg-[#e0e0e0] rounded-lg flex-col justify-between items-center flex">
                      <a href="http://112.152.14.116:10201/depression" target="_blank" rel="noopener noreferrer">
                        <div className="w-[162px] text-center text-black text-[11px] font-bold leading-tight tracking-tight">
                            떠나기
                        </div>
                      </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 h-screen justify-center">
            <div className="w-[316px] h-[47px] px-[5px] py-0.5 flex-col justify-start items-center gap-2.5 flex">
              <div className="w-[118px] text-center text-black text-2xl font-bold leading-tight tracking-tight">양파 키우기</div>
              <div className="w-[168px] text-center text-black text-[12px] font-medium leading-tight tracking-tight">양파 양과 함께 긍정의 말을 연습해요</div>
            </div>
            <div className="w-[316px] h-[302px] px-[5px] py-0.5 flex-col justify-start items-center gap-2.5 flex">
              <img className="self-stretch h-[306px]" src="/img/sad_onion.png" alt="Onion character" />
            </div>
            <div className="w-[316px] h-11 flex-col justify-start items-center gap-2.5 flex">
              <div className="w-[262px] h-10 text-center text-black text-sm font-medium leading-tight tracking-tight">울적해 하는 양파 양에게<br />따뜻한 말 한 마디 건네주세요!</div>
            </div>

            {/* encouragements 목록 */}
            {!isInputMode && (
              <div className="encouragement-list flex flex-col gap-2">
                {encouragements.map((msg, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleMsgClick(msg)}
                    className="w-[220px] h-9 p-2.5 bg-[#c8f7d9] rounded-lg text-center text-[11px] font-medium"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            )}

            {/* 직접 입력 모드 */}
            {isInputMode ? (
              <div className="flex items-center gap-2 mt-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="따뜻한 말을 입력하세요"
                  className="w-[180px] p-2 bg-white border-[#C2D9CA] border rounded-lg text-[12px] font-medium leading-tight"
                />
                <button
                  onClick={handleEnterClick}
                  className="w-[33px] h-[33px] bg-[#237740] flex items-center justify-center rounded-lg"
                >
                  <img src="/img/icon_enter.png" alt="enter icon" />
                </button>
              </div>
            ) : (
              <div 
                onClick={() => setIsInputMode(true)}
                className="w-[220px] h-9 rounded-lg justify-between items-center inline-flex cursor-pointer"
              >
                <div className="w-[183px] h-9 p-2.5 bg-white border border-[#c2d9ca] rounded-lg text-[12px] font-medium leading-tight text-[#8d8d8d] flex items-center">
                  직접 위로의 말 건낼래요...!
                </div>
                <div className="w-[33px] h-9 p-[5px] bg-[#237740] rounded-lg flex items-center justify-center">
                  <img src="/img/icon_enter.png" alt="enter icon" className="w-[21.56px] h-[16.79px]" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EncouragementPage;
