import React from 'react';

const AnxietyBook = () => {
  return (
    <div className="relative w-[360px] h-[800px] bg-[#fff] overflow-hidden">
      {/* 상단 시간 및 상태 표시 */}
      <div className="absolute left-0 top-0 w-[360px] h-[45px] flex flex-row items-end justify-between py-[10px] px-[24px]">
        <div className="text-[14px] leading-[20px] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>
        <img width="46" height="17" src={process.env.PUBLIC_URL + "/img/right_iconsI34_609.png"} alt="icons" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="absolute left-[19px] top-1/2 -translate-y-1/2 w-[327px] flex flex-col items-start justify-start gap-[12px]">
        {/* 질문 섹션 */}
        <div className="w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] rounded-[15px]">
          <div className="leading-[20px] tracking-[.01em] text-[#000] text-center whitespace-nowrap">
            <span className="text-[16px] font-bold">지금 나의 마음과 <br />가장 비슷한 말은 무엇인가요?</span>
          </div>
        </div>

        {/* 답변 선택 */}
        {[
          '나는 별로 잘하지 못했어.',
          '이걸 해서 뭐해?',
          '실수하면 어떡하지? 끔찍할 거야.',
          '할 말이 없어. 난 지루한 사람이야.',
          '아무도 나를 좋아하지 않아.',
          '다른 사람들은 모두 나보다 잘 지내. 모두 행복해보여.',
          '나는 대인관계가 서툴기 때문에 사람들을 가까이하지 않는 게 나아.',
          '사람들 앞에서 감정 조절이 안 되고 우스꽝스럽게 될 거야.',
          '나는 아무런 희망이 없어. 이 일을 절대로 해결하지 못할 거야.'
        ].map((text, index) => (
          <div key={index} className="w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#fff] border-[1px] border-solid border-[#d9d9d9] rounded-[15px]">
            <div className="text-[14px] leading-[20px] font-medium text-[#000] text-center whitespace-nowrap">{text}</div>
          </div>
        ))}

        {/* '다음' 버튼 */}
        <div className="w-[327px] flex flex-row items-center justify-center p-[10px] bg-[#eeefef] rounded-[15px]">
          <div className="text-[14px] leading-[20px] font-medium text-[#000] whitespace-nowrap">다음</div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyBook;
