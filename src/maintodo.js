import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MainEdit from './mainEdit';
import Card from './maintodoCard.js';
import './output.css';
import MainAdd from './mainAdd.js'; // MainAdd 컴포넌트 import

const getCardProperties = (card) => {
  let level, points, image, detail;

  if (card.is_routine) {
    switch (card.when_routine) {
      case '아침':
        level = 7;
        points = 30;
        image = 'main_morning.png';
        detail = '아침';
        break;
      case '점심':
        level = 6;
        points = 30;
        image = 'main_lunch.png';
        detail = '점심';
        break;
      case '저녁':
        level = 5;
        points = 30;
        image = 'main_dinner.png';
        detail = '저녁';
        break;
      case '종일':
        level = 4;
        points = 30;
        image = 'main_allday.png';
        detail = '종일';
        break;
      default:
        level = 4;
        points = 30;
        image = 'main_allday.png';
        break;
    }
  } else {
    if (card.is_importance && card.is_emergency) {
      level = 3;
      points = 50;
      image = 'level3.png';
      detail = '중요 🚩, 긴급 🚨';
    } else if (card.is_importance || card.is_emergency) {
      level = 2;
      points = 40;
      image = 'level2.png';
      detail = card.is_importance ? '중요 🚩' : '긴급 🚨';
    } else {
      level = 1;
      points = 20;
      image = 'level1.png';
    }
  }

  return { ...card, level, points, image, detail };
};

// 날짜 포맷 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(date);

  return `${month}월 ${day}일 (${dayOfWeek})`;
}

const TodoList = ({ onCompletionRateChange, onPointChange, onCheck }) => {
    const [cards, setCards] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [editingCard, setEditingCard] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [showAddDrawer, setShowAddDrawer] = useState(false);

  const fetchTodos = () => {
    const token = localStorage.getItem('token');
    fetch(`http://112.152.14.116:10211/todo-get?time=${selectedDate}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data && Array.isArray(data.undones)) {
        const processedCards = data.undones.map(card => ({
          ...getCardProperties({
            ...card,
            checked: card.is_done,
          }),
        }));

        const sortedCards = processedCards.sort((a, b) => {
          if (!a.checked && b.checked) return -1;
          if (a.checked && !b.checked) return 1;
          if (!a.checked && !b.checked) return b.level - a.level;
          return 0;
        });
        setCards(sortedCards);
        updateCompletionRate(sortedCards);
      } else {
        console.error('Expected an array but received:', data);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchTodos();
  }, [selectedDate]);


   // updateCompletionRate 함수 정의
   const updateCompletionRate = (updatedCards) => {
    const totalCount = updatedCards.length;
    const completedCount = updatedCards.filter(item => item.checked).length;
    const newCompletionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    onCompletionRateChange(newCompletionRate, totalCount, completedCount);
  };

  const handleCheck = async (card) => {
    try {
      await fetch('http://112.152.14.116:10211/todo-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ item: card.id }),
      });

      setCards(prevCards => {
        const updatedCards = prevCards.map(item =>
          item.id === card.id ? { ...item, checked: !item.checked } : item
        );

        const sortedCards = updatedCards.sort((a, b) => {
          if (!a.checked && b.checked) return -1;
          if (a.checked && !b.checked) return 1;
          if (!a.checked && !b.checked) return b.level - a.level;
          return 0;
        });

        updateCompletionRate(sortedCards);
        return sortedCards;
      });

     // onCheck(card);
      //fetchTodos();
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

    const handleAddSuccess = () => {
    setShowAddDrawer(false);
    fetchTodos();
  };

  const toggleAddDrawer = () => {
    setShowAddDrawer(!showAddDrawer);
  };

  const handleDeleteCard = (id) => {
    setCards(prevCards => {
      const updatedCards = prevCards.filter(card => card.id !== id);
      updateCompletionRate(updatedCards);
      return updatedCards;
    });
  };

  const handleCloseEdit = () => {
    setEditingCard(null);
  };

  const filteredCards = cards.filter(card => {
    if (activeFilter === 'all') return true;
    return card.type === activeFilter;
  });

  return (
    <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
      <div className="w-[200px] h-7 flex-row gap-[5px] relative">
        <div className="w-[100px] left-0 top-0 absolute text-left text-[#49454f] font-bold text-[13px] font-['Pretendard'] leading-7">
          {formatDate(selectedDate)}
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
        <img
          className="w-[12px] h-[7px] left-[105px] top-[7px] relative"
          src={`${process.env.PUBLIC_URL}/img/down.png`}
          alt="Calendar Icon"
        />
      </div>

      <div className="w-[205px] h-[23px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
        <img
          width="51"
          height="23"
          src={`${process.env.PUBLIC_URL}/img/main_all_clicked.png`}
          onClick={() => setActiveFilter('all')}
          alt="All"
        />
        <img
          width="51"
          height="23"
          src={`${process.env.PUBLIC_URL}/img/main_routine_unclicked.png`}
          onClick={() => setActiveFilter('routine')}
          alt="Routine"
        />
        <img
          width="51"
          height="23"
          src={`${process.env.PUBLIC_URL}/img/main_todo_unclicked.png`}
          onClick={() => setActiveFilter('todo')}
          alt="Todo"
        />
      </div>

      <AnimatePresence>
        {filteredCards.map(card => (
          <Card
            key={card.id}
            card={card}
            onCheck={() => handleCheck(card)}
            onDelete={handleDeleteCard}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {editingCard && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseEdit}
            />
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

      <AnimatePresence>
        {showAddDrawer && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleAddDrawer}
            />
            <motion.div
              className="fixed inset-x-0 bottom-0 z-20 flex items-end justify-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="w-[360px] h-[336px] bg-white relative bg-opacity-0 overflow-visible">
                <MainAdd onAddSuccess={handleAddSuccess} />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={toggleAddDrawer}
        className="fixed bottom-[100px] right-[20px] bg-[#ff9800] text-white p-[10px] rounded-full shadow-lg hover:bg-[#ff6d00] transition duration-200"
      >
        <img width="46" height="46" src={`${process.env.PUBLIC_URL}/img/main_add_btn.png`} alt="Add" />
      </button>
    </div>
  );
};

export default TodoList;
