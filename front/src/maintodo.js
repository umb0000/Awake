import React, { useState } from 'react';

const TodoList = () => {
  // 카드의 순서와 상태를 관리하는 상태 변수 (초기 인덱스를 포함)
  const [cards, setCards] = useState([
    { id: 1, level: 3, checked: false, title: "메일 확인하기", detail: "중요🚩, 긴급🚨", image: "level3.png", initialIndex: 0 },
    { id: 2, level: 2, checked: true, title: "과제 확인하기", detail: "긴급🚨", image: "level2.png", initialIndex: 1 },
    { id: 3, level: 1, checked: true, title: "쓰레기 버리기", detail: "", image: "level1.png", initialIndex: 2 }
  ]);

  // 체크박스 클릭 핸들러
  const handleCheck = (id) => {
    setCards(prevCards => {
      // 선택한 카드를 찾아 checked 상태를 토글
      const updatedCards = prevCards.map(card =>
        card.id === id ? { ...card, checked: !card.checked } : card
      );

      // 체크된 카드는 아래로 이동, 체크 해제된 카드는 원래 인덱스를 유지하여 정렬
      return updatedCards.sort((a, b) => {
        if (a.checked !== b.checked) {
          return a.checked ? 1 : -1;
        }
        return a.initialIndex - b.initialIndex;
      });
    });
  };

  return (
    <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
      {cards.map(card => (
        <div
          key={card.id}
          className="relative w-[100%] h-[63px] shrink-0 flex"
          style={{ transition: 'transform 0.5s ease' }} // 자연스러운 이동 애니메이션 추가
        >
          <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[63px]"></div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
            <img width="30" height="31" src={process.env.PUBLIC_URL + `/img/${card.image}`} alt={`level${card.level}`} />
            <div className="h-[48px] flex flex-col items-start justify-center" style={{ marginRight: '35%' }}>
              <div className="w-[100%] h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-bold text-[#79747e] flex flex-col justify-center">
                {card.title}
              </div>
              <div className="w-[100%] text-[10px] leading-[10px] tracking-[.01em] font-bold text-[#79747e] flex flex-col justify-center">
                {card.detail}
              </div>
            </div>
            <img
              width="26" height="26"
              src={process.env.PUBLIC_URL + `/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
              alt={card.checked ? 'checked' : 'unchecked'}
              onClick={() => handleCheck(card.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
