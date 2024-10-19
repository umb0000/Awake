import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const [cards, setCards] = useState([
    { id: 1, level: 3, checked: false, title: "메일 확인하기", detail: "중요🚩, 긴급🚨", image: "level3.png" },
    { id: 2, level: 2, checked: false, title: "과제 확인하기", detail: "긴급🚨", image: "level2.png" },
    { id: 3, level: 1, checked: true, title: "쓰레기 버리기", detail: "", image: "level1.png" },
    { id: 4, level: 2, checked: true, title: "중요한 미팅 준비", detail: "중요🚩", image: "level2.png" }, // 같은 level 추가
    { id: 5, level: 3, checked: true, title: "고객 응대", detail: "긴급🚨", image: "level3.png" } // 같은 level 추가
  ]);

  const handleCheck = (id) => {
    setCards(prevCards => {
      const updatedCards = prevCards.map(card =>
        card.id === id ? { ...card, checked: !card.checked } : card
      );

      const sortedCards = updatedCards.sort((a, b) => {
        if (a.checked !== b.checked) {
          return a.checked ? 1 : -1;
        } else {
          return b.level - a.level;
        }
      });

      return sortedCards;
    });
  };

  return (
    <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
      <AnimatePresence>
        {cards.map(card => (
          <motion.div
            key={card.id}
            className="relative w-[100%] h-[63px] shrink-0 flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[63px]"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-between gap-[21px]">
              <img width="30" height="31" src={process.env.PUBLIC_URL + `/img/${card.image}`} alt={`level${card.level}`} />
              
              {/* 텍스트 영역 */}
              <div className="h-[48px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '160px', maxWidth: '180px' }}>
                <div className="w-full h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-bold text-[#79747e] flex flex-col justify-center">
                  {card.title}
                </div>
                <div className="w-full text-[10px] leading-[10px] tracking-[.01em] font-bold text-[#79747e] flex flex-col justify-center">
                  {card.detail}
                </div>
              </div>
              
              {/* 체크박스 */}
              <img
                width="26" height="26"
                src={process.env.PUBLIC_URL + `/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
                alt={card.checked ? 'checked' : 'unchecked'}
                onClick={() => handleCheck(card.id)}
                className="shrink-0" // 체크박스 위치 고정
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
