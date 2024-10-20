import { useState } from 'react';
import '../output.css'; // 전체 프로젝트에 맞춘 스타일 적용

const ConflictBoard = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단 바 */}
      <div className="absolute top-0 left-0 right-0 h-[45px] flex items-center justify-center bg-[#f7f2fa] rounded-tl-[28px] rounded-tr-[28px]">
        <div className="w-[32px] h-[4px] bg-[#79747e] rounded-full"></div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="absolute top-[50px] left-[10px] right-[10px] flex flex-col items-center gap-[12px]">
        {/* 모욕 대처 보드 */}
        <div className="flex items-center gap-[5px] bg-[#fff] p-[10px] rounded-[15px]">
          <div className="text-[20px] font-bold">Insult Coping Board</div>
          <img width="20" height="20" src={process.env.PUBLIC_URL + "/img/image65_390.png"} alt="icon" />
        </div>

        {/* 카드 1 */}
        <div className="w-[316px] flex flex-col items-start gap-[10px] p-[10px] bg-[#fbc3bc] border border-solid border-[#fbc3bc] rounded-[15px]">
          <div className="text-[9px] text-center text-[#000] font-extralight">2024 / 10 / 15</div>
          <div className="text-[14px] font-bold">나는 항상 배우고 성장하는 중이야. 모든 사람이 완벽할 필요는 없어.</div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[6px] h-[14px] bg-[#ff8070]"></div>
            <div className="text-[9px] text-[#000] font-extralight">넌 정말 아무것도 제대로 못 해</div>
          </div>
          <div className="flex justify-end w-full">
            <img width="15" height="14" src={process.env.PUBLIC_URL + "/img/star65_403.png"} alt="star" />
          </div>
        </div>

        {/* 카드 2 */}
        <div className="w-[316px] flex flex-col items-start gap-[10px] p-[10px] bg-[#c4f2c7] border border-solid border-[#c4f2c7] rounded-[15px]">
          <div className="text-[9px] text-center text-[#000] font-extralight">2024 / 10 / 15</div>
          <div className="text-[14px] font-bold">내 속도대로 가는 거야. 내 방식으로 충분히 잘하고 있어.</div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[6px] h-[14px] bg-[#3cdf46]"></div>
            <div className="text-[9px] text-[#000] font-extralight">그 정도밖에 못 하나 보네?</div>
          </div>
          <div className="flex justify-end w-full">
            <img width="15" height="14" src={process.env.PUBLIC_URL + "/img/star65_414.png"} alt="star" />
          </div>
        </div>

        {/* 카드 3 */}
        <div className="w-[316px] flex flex-col items-start gap-[10px] p-[10px] bg-[#c2edf2] border border-solid border-[#c2edf2] rounded-[15px]">
          <div className="text-[9px] text-center text-[#000] font-extralight">2024 / 10 / 15</div>
          <div className="text-[14px] font-bold">과거는 이미 지나갔고, 나는 매일 더 나아지고 있어.</div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[6px] h-[14px] bg-[#3fd6e8]"></div>
            <div className="text-[9px] text-[#000] font-extralight">넌 왜 항상 그 모양이야?</div>
          </div>
          <div className="flex justify-end w-full">
            <img width="15" height="14" src={process.env.PUBLIC_URL + "/img/star65_425.png"} alt="star" />
          </div>
        </div>

        {/* 카드 4 */}
        <div className="w-[316px] flex flex-col items-start gap-[10px] p-[10px] bg-[#c4d4f2] border border-solid border-[#c4d4f2] rounded-[15px]">
          <div className="text-[9px] text-center text-[#000] font-extralight">2024 / 10 / 15</div>
          <div className="text-[14px] font-bold">나는 최선을 다했고, 그걸로도 충분해.</div>
          <div className="flex items-center gap-[5px]">
            <div className="w-[6px] h-[14px] bg-[#2d70ec]"></div>
            <div className="text-[9px] text-[#000] font-extralight">네가 한 건 언제나 미완성이야.</div>
          </div>
          <div className="flex justify-end w-full">
            <img width="15" height="14" src={process.env.PUBLIC_URL + "/img/star65_436.png"} alt="star" />
          </div>
        </div>
      </div>

      {/* 하단 */}
      <div className="absolute bottom-0 w-[100%] flex justify-end p-[3px]">
        <img width="38" height="37" src={process.env.PUBLIC_URL + "/img/vector65_439.png"} alt="icon" />
      </div>
    </div>
  );
};

export default ConflictBoard;
