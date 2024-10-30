import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './output.css'

const TodoList = ({ onCompletionRateChange, onPointChange }) => {
  const [cards, setCards] = useState([
    { id: 1, level: 6, checked: false, title: "비타민 먹기", detail: "아침", image: "main_morning.png", type: "routine", points: 50 },
    { id: 2, level: 5, checked: false, title: "책 2페이지 읽기", detail: "저녁", image: "main_dinner.png", type: "routine", points: 40 },
    { id: 6, level: 4, checked: false, title: "텀블러 한 컵 다 마시기", detail: "종일", image: "main_allday.png", type: "routine", points: 50 },
    { id: 3, level: 3, checked: false, title: "기계학습 5주차 강의 듣기", detail: "긴급🚨", image: "level3.png", type: "todo", points: 30 },
    { id: 4, level: 2, checked: false, title: "과제 확인하기", detail: "긴급🚨", image: "level2.png", type: "todo", points: 20 },
    { id: 5, level: 1, checked: false, title: "쓰레기 버리기", detail: "", image: "level1.png", type: "todo", points: 10 }
    
  ]);

  const [activeFilter, setActiveFilter] = useState('all'); 
  const [buttonState, setButtonState] = useState({
    all: 'clicked',
    routine: 'unclicked',
    todo: 'unclicked'
  });

  useEffect(() => {
    const completedCards = cards.filter(card => card.checked).length;
    const totalCards = cards.length;
    const completionRate = Math.floor((completedCards / totalCards) * 100);

    // 달성률을 Main 컴포넌트로 전달
    onCompletionRateChange(completionRate, totalCards, completedCards);
  }, [cards, onCompletionRateChange]);

  const handleButtonClick = (type) => {
    setButtonState({
      all: type === 'all' ? 'clicked' : 'unclicked',
      routine: type === 'routine' ? 'clicked' : 'unclicked',
      todo: type === 'todo' ? 'clicked' : 'unclicked'
    });
    setActiveFilter(type);
  };

  const filteredCards = cards.filter(card => {
    if (activeFilter === 'all') return true;
    return card.type === activeFilter;
  });

  const handleCheck = (id) => {
    setCards(prevCards => {
      const updatedCards = prevCards.map(card =>
        card.id === id ? { ...card, checked: !card.checked } : card
      );

      // 체크된 카드에 따라 포인트 변경
      const checkedCard = updatedCards.find(card => card.id === id);
      if (checkedCard.checked) {
        onPointChange(checkedCard.level); // 체크되면 포인트 추가
      } else {
        onPointChange(-checkedCard.level); // 체크 해제되면 포인트 감소
      }

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
      <div className="w-[205px] h-[23px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_all_${buttonState.all}.png`}
          onClick={() => handleButtonClick('all')}
          alt="All"
        />
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_routine_${buttonState.routine}.png`}
          onClick={() => handleButtonClick('routine')}
          alt="Routine"
        />
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_todo_${buttonState.todo}.png`}
          onClick={() => handleButtonClick('todo')}
          alt="Todo"
        />
      </div>
      

      <AnimatePresence>
        {filteredCards.map(card => (
          <motion.div
            key={card.id}
            className="relative w-[100%] h-[50px] shrink-0 flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            layout
            transition={{ duration: 0.5 }}
          >
            <div className="absolute left-0 top-0 w-[100%] h-[50px] bg-[#f4f7f8] rounded-[10px]"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[60px]"></div>
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center gap-[10px]">
              <img width="30" height="31" src={process.env.PUBLIC_URL + `/img/${card.image}`} alt={`level${card.level}`} />

              {/* 텍스트 영역 */}
              <div className="h-[30px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '73%', maxWidth: '180px' }}>
                <div className="w-full text-[13px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold text-[#79747e] flex flex-col justify-center">
                  {card.title}
                </div>
                <div className="w-full text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard']  text-[#79747e] flex flex-col justify-center">
                  {card.detail}
                </div>
              </div>

              {/* 체크박스 */}
              <img
                width="26"
                height="26"
                src={process.env.PUBLIC_URL + `/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
                alt={card.checked ? 'checked' : 'unchecked'}
                onClick={() => handleCheck(card.id)}
                className="shrink-0"
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
