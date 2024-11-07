import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainEdit from './mainEdit';
import './output.css';

const Card = ({ card, onCheck, onDelete }) => {
  const [isDragged, setIsDragged] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      // 스와이프된 거리가 -100px을 넘으면 삭제 버튼을 보여줌
      setIsDragged(true);
    } else {
      setIsDragged(false);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(card.id);
  };

  return (
    <motion.div
      key={card.id}
      className="relative w-[100%] h-[50px] shrink-0 flex"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ x: isDragged ? -60 : 0 }} // 삭제 버튼을 보일 만큼만 이동
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute left-0 top-0 w-[100%] h-[50px] bg-[#f4f7f8] rounded-[10px]"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[60px]"></div>
      
      


      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center gap-[10px]">
        <img width="30" height="31" src={process.env.PUBLIC_URL + `/img/${card.image}`} alt={`level${card.level}`} />

        <div className="h-[30px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '73%', maxWidth: '180px' }}>
          <div className="w-full text-[13px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold text-[#79747e] flex flex-col justify-center">
            {card.title}
          </div>
          <div className="w-full text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard'] text-[#79747e] flex flex-col justify-center">
            {card.detail}
          </div>
        </div>

        {isDragged && (
          <motion.button
            className="absolute right-[-70px] transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDeleteClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: -10 }} // 카드가 밀린 만큼 삭제 버튼 위치 조정
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            X
          </motion.button>
        )}

        <img
          width="26"
          height="26"
          src={process.env.PUBLIC_URL + `/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
          alt={card.checked ? 'checked' : 'unchecked'}
          onClick={(e) => {
            e.stopPropagation();
            onCheck(card.id);
          }}
          className="shrink-0"
        />

        
      </div>
    </motion.div>
  );
};

const TodoList = ({ onCompletionRateChange, onPointChange }) => {
  const [cards, setCards] = useState([
    { id: 1, level: 5, checked: false, title: "비타민 먹기", detail: "아침", image: "main_morning.png", type: "routine", points: 50 },
    { id: 2, level: 4, checked: false, title: "책 2페이지 읽기", detail: "저녁", image: "main_dinner.png", type: "routine", points: 40 },
    { id: 6, level: 5, checked: false, title: "텀블러 한 컵 다 마시기", detail: "종일", image: "main_allday.png", type: "routine", points: 50 },
    { id: 3, level: 3, checked: false, title: "기계학습 5주차 강의 듣기", detail: "긴급🚨", image: "level3.png", type: "todo", points: 30 },
    { id: 4, level: 2, checked: false, title: "과제 확인하기", detail: "긴급🚨", image: "level2.png", type: "todo", points: 20 },
    { id: 5, level: 1, checked: false, title: "쓰레기 버리기", detail: "", image: "level1.png", type: "todo", points: 10 }
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const handleButtonClick = (type) => {
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

      const checkedCard = updatedCards.find(card => card.id === id);
      if (checkedCard.checked) {
        onPointChange(checkedCard.level);
      } else {
        onPointChange(-checkedCard.level);
      }

      return updatedCards.sort((a, b) => {
        if (a.checked !== b.checked) {
          return a.checked ? 1 : -1;
        } else {
          return b.level - a.level;
        }
      });
    });
  };

  const handleDeleteCard = (id) => {
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };

  return (
    <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
      <div className="w-[205px] h-[23px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_all_clicked.png`}
          onClick={() => handleButtonClick('all')}
          alt="All"
        />
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_routine_unclicked.png`}
          onClick={() => handleButtonClick('routine')}
          alt="Routine"
        />
        <img
          width="51"
          height="23"
          src={process.env.PUBLIC_URL + `/img/main_todo_unclicked.png`}
          onClick={() => handleButtonClick('todo')}
          alt="Todo"
        />
      </div>

      <AnimatePresence>
        {filteredCards.map(card => (
          <Card
            key={card.id}
            card={card}
            onCheck={handleCheck}
            onDelete={handleDeleteCard}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
