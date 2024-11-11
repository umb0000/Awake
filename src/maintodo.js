import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainEdit from './mainEdit'; // EditTodo 컴포넌트 임포트
import './output.css';
import DatePicker from './datepicker';


// 개별 카드 컴포넌트
const Card = ({ card, onCheck, onDelete }) => {
  const [isDragged, setIsDragged] = useState(false);

   // 드래그 종료 시 호출되는 함수
   const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      // 드래그가 -100px 이상일 때 삭제 버튼 표시
      setIsDragged(true);
    } else {
      setIsDragged(false);
    }
  };

   // 삭제 버튼 클릭 시 호출되는 함수
   const handleDeleteClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    onDelete(card.id); // 카드 삭제
  };

  return (
    <motion.div
      key={card.id}
      className="relative w-[100%] h-[50px] shrink-0 flex"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={{ x: isDragged ? -60 : 0 }} // 삭제 버튼을 보일 만큼만 이동
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      layout
    >
      {/* 카드 배경 */}
      <div className="absolute left-0 top-0 w-[100%] h-[50px] bg-[#f4f7f8] rounded-[10px]"></div>
      {/*<div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[60px]"></div>
      */}
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center gap-[10px]">
        {/* 카드의 레벨 아이콘 */}
        <img width="30" height="31" src={process.env.PUBLIC_URL + `/img/${card.image}`} alt={`level${card.level}`} />
        
        {/* 카드의 제목과 세부 정보 */}
        <div className="h-[30px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '73%', maxWidth: '180px' }}>
          <div className="w-full text-[13px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold text-[#79747e] flex flex-col justify-center">
            {card.title}
          </div>
          <div className="w-full text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard'] text-[#79747e] flex flex-col justify-center">
            {card.detail}
          </div>
        </div>

        {/* 삭제 버튼 */}
        {isDragged && (
          <motion.button
            className="absolute right-[-70px] transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDeleteClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: -10 }} // 삭제 버튼 표시 위치 조정
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            X
          </motion.button>
        )}

        {/* 체크박스 아이콘 */}
        <img
          width="26"
          height="26"
          src={process.env.PUBLIC_URL + `/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
          alt={card.checked ? 'checked' : 'unchecked'}
          onClick={(e) => {
            e.stopPropagation();
            onCheck(card); // // 체크 상태 변경
          }}
          className="shrink-0"
        />
      </div>
    </motion.div>
  );
};

// TodoList 컴포넌트
const TodoList = ({ onCompletionRateChange, onPointChange, onCheck }) => {
  const [cards, setCards] = useState([
    { id: 1, level: 7, checked: false, title: "비타민 먹기", detail: "아침", image: "main_morning.png", type: "routine", points: 50 },
    { id: 2, level: 5, checked: false, title: "책 2페이지 읽기", detail: "저녁", image: "main_dinner.png", type: "routine", points: 40 },
    { id: 6, level: 4, checked: false, title: "텀블러 한 컵 다 마시기", detail: "종일", image: "main_allday.png", type: "routine", points: 50 },
    { id: 3, level: 3, checked: false, title: "기계학습 5주차 강의 듣기", detail: "긴급🚨", image: "level3.png", type: "todo", points: 30 },
    { id: 4, level: 2, checked: false, title: "과제 확인하기", detail: "긴급🚨", image: "level2.png", type: "todo", points: 20 },
    { id: 5, level: 1, checked: false, title: "쓰레기 버리기", detail: "", image: "level1.png", type: "todo", points: 10 }
  ]); // 초기 카드 목록


  const [activeFilter, setActiveFilter] = useState('all'); // 필터 상태
  const [editingCard, setEditingCard] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // 초기 상태를 오늘 날짜로 설정

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(date); // 요일 추가
    
    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  const [buttonState, setButtonState] = useState({
    all: 'clicked',
    routine: 'unclicked',
    todo: 'unclicked'
  });
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    const completedCards = cards.filter(card => card.checked).length;
    const totalCards = cards.length;
    const completionRate = Math.floor((completedCards / totalCards) * 100);

    onCompletionRateChange(completionRate, totalCards, completedCards);
  }, [cards, onCompletionRateChange]);



  // 필터 버튼 클릭 시 필터 설정
  const handleButtonClick = (type) => {
    setButtonState({
      all: type === 'all' ? 'clicked' : 'unclicked',
      routine: type === 'routine' ? 'clicked' : 'unclicked',
      todo: type === 'todo' ? 'clicked' : 'unclicked'
    });
    setActiveFilter(type);
  };

  // 필터에 맞는 카드 목록 필터링
  const filteredCards = cards.filter(card => {
    if (activeFilter === 'all') return true;
    return card.type === activeFilter;
  });


  // 체크박스 클릭 시 체크 상태 변경 및 점수 업데이트
  const handleCheck = (card) => {
    setCards(prevCards => {
      const updatedCards = prevCards.map((item) =>
        item.id === card.id ? { ...item, checked: !item.checked } : item
    );
  
      
        // 완료된 항목과 전체 항목 수 계산
     // 완료된 항목과 전체 항목 수 계산
    const completedCount = updatedCards.filter((item) => item.checked).length;
    const totalCount = updatedCards.length;
    const newCompletionRate = Math.round((completedCount / totalCount) * 100);

    onCompletionRateChange(newCompletionRate, totalCount, completedCount);
      
    const sortedCards = updatedCards.sort((a, b) => {
        if (a.checked !== b.checked) {
          return a.checked ? 1 : -1;
        } else {
          return b.level - a.level;
        }
      });

      return updatedCards, sortedCards
    });

    onCheck(card);
  };


  const handleCardClick = (card) => {
    setEditingCard(card);
  };

  const handleCloseEdit = () => {
    setEditingCard(null);
  };

  // 카드 삭제 시 호출되는 함수
  const handleDeleteCard = (id) => {
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };

  useEffect(() => {
    const completedCount = cards.filter(card => card.checked).length;
    const totalCount = cards.length;
    const rate = Math.round((completedCount / totalCount) * 100);

    onCompletionRateChange(rate, totalCount, completedCount);
  }, [cards, onCompletionRateChange]);
    
  return (
    <div>
    <div className="w-[200px] h-7 flex-row gap-[5px] relative">                
                <div className="w-[100px] left-0 top-0 absolute text-left text-[#49454f] font-bold text-[13px] font-['Pretendard'] leading-7">
                  {formatDate(selectedDate)}
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="absolute inset-0 w-200px h-10px opacity-0 cursor-pointer"
                  />
                </div>
                <img
                  className="w-[12px] h-[7px] left-[105px] top-[7px] relative"
                  src={process.env.PUBLIC_URL + `/img/down.png`}
                  alt="Calendar Icon"
                />
              </div>
    <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
      
      {/* 필터 버튼 */}
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
            onCheck={() => handleCheck(card)} // card 객체 전체를 넘김
            onDelete={handleDeleteCard}
          />
        ))}
      </AnimatePresence>


      <AnimatePresence>
        {editingCard && (
          <>
            {/* 배경 클릭 시 서랍 닫기 */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseEdit}
            />

            {/* 서랍 슬라이드 */}
            <motion.div
              className="fixed inset-x-0 bottom-0 z-20 flex items-end justify-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-[360px] h-[336px] bg-white relative bg-opacity-0 overflow-visible">
                <MainEdit card={editingCard} onClose={handleCloseEdit} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default TodoList;
