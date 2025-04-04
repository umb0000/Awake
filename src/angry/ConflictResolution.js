import { useState } from 'react';
import '../output.css'; // 전체 코드에 맞게 스타일을 적용합니다.

const ConflictResolution = () => {

  
  return (
    <div className="w-full h-screen bg-white flex flex-col font-['Pretendard_Variable'] pt-20">
      {/* 상단바 */}
      

      {/* 내용 */}
      <div  style={{ paddingTop : '5%'}}className="relative w-[100%] h-full flex flex-col items-center gap-[12px] px-[10px]">
        {/* 단계 1: 상황 설명 */}
        <div className="w-[80%] h-[45px] flex items-center justify-between px-[1px] py-[20px]">
        <div className="text-[20px] font-bold">상감이결 공식</div>
      </div>
        <div className="w-[327px] h-[165px] flex items-center gap-[5px] p-[5px] bg-[#fff] border border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="w-[30%] h-[144px] flex items-center justify-center p-[1px]">
          <img width="69" height="69" src="/img/sang.png"></img>
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <div className="text-[16px] font-bold">상황에 대해 말하기</div>
            <div className="text-[12px]">
              현재 벌어지고 있는 상황을 객관적으로 설명하는 것이 중요합니다.
              주관적인 생각이나 감정을 배제하고, 사실에만 근거해서 상대방에게 상황을 전달합니다.
            </div>
            <div style={{ fontSize: '11px', color: '#B0B0B0' }}className="text-[9px] text-gray-400">예시: 지금 프로젝트 마감일이 다가오고 있어요.</div>
          </div>
        </div>

        {/* 단계 2: 감정 설명 */}
        <div className="w-[327px] h-[165px] flex items-center gap-[5px] p-[5px] bg-[#fff] border border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="w-[30%] h-[144px] flex items-center justify-center p-[1px]">
          <img width="69" height="69" src="/img/gam.png"></img>
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <div className="text-[16px] font-bold">감정 설명하기</div>
            <div className="text-[12px]">
              그 상황에서 자신이 느끼는 감정을 솔직하게 표현하는 것이 중요합니다.
              감정을 명확하게 표현해야, 상대방이 상황을 이해하는 데 도움이 됩니다.
            </div>
            <div style={{ fontSize: '11px', color: '#B0B0B0' }} className="text-[9px] text-gray-400">예시: 이 상황 때문에 저는 조금 불안하고 초조해요.</div>
          </div>
        </div>

        {/* 단계 3: 이해시키기 */}
        <div className="w-[327px] h-[165px] flex items-center [5px] p-[5px] bg-[#fff] border border-solid border-[#d9d9d9] rounded-[15px]">
          <div className="w-[30%] h-[144px] flex items-center justify-center p-[1px]">
          <img width="69" height="69" src="/img/yee.png"></img>
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <div className="text-[16px] font-bold">이해시키기</div>
            <div className="text-[12px]">
              상대방이 왜 이 상황과 감정을 이해해야 하는지 설명합니다.
              상대방이 더 깊이 공감할 수 있도록 논리적으로 풀어가는 단계입니다.
            </div>
            <div style={{ fontSize: '11px', color: '#B0B0B0' }} className="text-[9px] text-gray-400">예시: 제가 이렇게 느끼는 이유는 마감 기한을 지키지 못하면 프로젝트가 차질을 빚을까 걱정되기 때문이에요.</div>
          </div>
        </div>

        {/* 단계 4: 결과 분명히 하기 */}
        <div className="w-[327px] h-[165px] flex items-center [5px] p-[5px] bg-[#fff] border border-solid border-[#d9d9d9] rounded-[15px] mb-6">
          <div className="w-[30%] h-[144px] flex items-center justify-center p-[1%]">
          <img width="69" height="69" src="/img/gyeol.png"></img>
          </div>
          <div className="flex-1 flex flex-col gap-[8px]">
            <div className="text-[16px] font-bold">결과 분명히 하기</div>
            <div className="text-[12px]">
              상황 해결을 위해 구체적인 해결책이나 앞으로의 계획을 제시하는 합니다.
              이렇게 하면 상대방이 무엇을 해야 할지 분명히 알 수 있습니다.
            </div>
            <div  style={{ fontSize: '11px', color: '#B0B0B0' }} className="text-[9px] text-gray-400 !important">예시: 우리 모두 마감 기한 전에 각자의 역할을 다시 점검하면 좋을 것 같아요.</div>
          </div>
        </div>
        <div className='h-[30px]'></div>
      </div>
    </div>
  );
};

export default ConflictResolution;
