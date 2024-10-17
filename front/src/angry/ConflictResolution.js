  import React from 'react';
  import '../output.css';
  
  const ConflictResolution = () => {
    return (
      <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
        <div className="absolute left-[5.28%] right-[5.56%] top-[826px] h-[893px] bg-[#f7f2fa] rounded-tl-[28px] rounded-tr-[28px] rounded-br-0 rounded-bl-0 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 flex flex-col items-center justify-start p-[16px]">
            <div className="w-[32px] h-[4px] shrink-0 bg-[#79747e] rounded-[100px]"></div>
          </div>
        </div>
        <div className="absolute -translate-y-1/2 left-[19px] top-[calc(50%+32px)] w-[317px] flex flex-col items-start justify-start gap-[12px]">
          <div className="w-[157px] h-[30px] shrink-0 flex flex-row items-center justify-start gap-[1px] p-[10px] bg-[#fff] rounded-[15px]">
            <div className="w-[121px] text-[20px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">모욕 대처 보드</div>
            <img width="20" height="20" src={process.env.PUBLIC_URL + '/img/image65_390.png'} alt="icon" />
          </div>
          <div className="w-[316px] h-[695px] shrink-0 flex flex-col items-center justify-start gap-[5px] p-[2px] bg-[#fbc3bc00] border-[1px] border-solid border-[#d9d9d900] rounded-[15px]">
            <div className="w-[316px] h-[610px] shrink-0 flex flex-col items-center justify-center gap-[10px] py-[2px] px-[5px] bg-[#fbc3bc00] border-[1px] border-solid border-[#d9d9d900] rounded-[15px]">
              <div className="self-stretch h-[141px] shrink-0 flex flex-col items-center justify-center gap-[5px] p-[10px] bg-[#fbc3bc] border-[1px] border-solid border-[#fbc3bc] rounded-[15px]">
                <div className="self-stretch h-[100px] shrink-0 flex flex-col items-start justify-center gap-[8px] py-[5px] px-[10px] overflow-hidden">
                  <div className="w-[192px] h-[21px] shrink-0 flex flex-col items-center justify-center p-[5px] overflow-hidden">
                    <div className="w-[184px] text-[9px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-extralight text-[#000]">2024 / 10 / 15</div>
                  </div>
                  <div className="w-[256px] h-[40px] shrink-0 flex flex-col items-start justify-between justify-center p-[5px] overflow-hidden">
                    <div className="w-[256px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000]">나는 항상 배우고 성장하는 중이야. 모든 사람이 완벽할 필요는 없어.</div>
                  </div>
                  <div className="w-[192px] h-[21px] shrink-0 flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] overflow-hidden">
                    <div className="w-[6px] h-[14px] shrink-0 bg-[#ff8070]"></div>
                    <div className="w-[184px] text-[9px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-extralight text-[#000]">넌 정말 아무것도 제대로 못 해</div>
                  </div>
                </div>
                <div className="self-stretch h-[20px] shrink-0 flex flex-row items-center justify-end p-[5px] overflow-hidden">
                  <img width="15" height="14" src={process.env.PUBLIC_URL + '/img/별65_403.png'} alt="star icon" />
                </div>
              </div>
              {/* 다른 내용들 동일한 구조로 추가 */}
              {/* 두 번째 카드 */}
              <div className="self-stretch h-[141px] shrink-0 flex flex-col items-center justify-center gap-[5px] p-[10px] bg-[#c4f2c7] border-[1px] border-solid border-[#c4f2c7] rounded-[15px]">
                <div className="self-stretch h-[100px] shrink-0 flex flex-col items-start justify-center gap-[8px] p-[10px] overflow-hidden">
                  <div className="w-[192px] h-[21px] shrink-0 flex flex-col items-center justify-center p-[5px] overflow-hidden">
                    <div className="w-[184px] text-[9px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-extralight text-[#000]">2024 / 10 / 15</div>
                  </div>
                  <div className="w-[256px] h-[40px] shrink-0 flex flex-col items-start justify-between justify-center p-[5px] overflow-hidden">
                    <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000] whitespace-nowrap">내 속도대로 가는 거야. <br />내 방식으로 충분히 잘하고 있어.</div>
                  </div>
                  <div className="w-[192px] h-[21px] shrink-0 flex flex-row items-center justify-start gap-[5px] py-[5px] px-[10px] overflow-hidden">
                    <div className="w-[6px] h-[14px] shrink-0 bg-[#3cdf46]"></div>
                    <div className="w-[184px] text-[9px] leading-[20px] tracking-[.01em] font-['Pretendard_Variable'] font-extralight text-[#000]">그 정도밖에 못 하나 보네?</div>
                  </div>
                </div>
                <div className="self-stretch h-[20px] shrink-0 flex flex-row items-center justify-end p-[5px] overflow-hidden">
                  <img width="15" height="14" src={process.env.PUBLIC_URL + '/img/별65_414.png'} alt="star icon" />
                </div>
              </div>
            </div>
            <div className="w-[316px] h-[53px] shrink-0 flex flex-row items-start justify-end py-0 px-[3px] overflow-hidden">
              <div className="h-[57px] flex flex-col items-center justify-center py-[2px] px-[1px] overflow-hidden">
                <img width="38" height="37" src={process.env.PUBLIC_URL + '/img/Vector65_439.png'} alt="vector icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ConflictResolution;
  