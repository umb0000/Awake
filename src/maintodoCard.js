import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, onCheck, onDelete }) => {
  const [isDragged, setIsDragged] = useState(false); // 드래그 상태 저장

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(`http://112.152.14.116:10211/todo-delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ id: card.id }),
      });

      if (response.ok) {
        onDelete(card.id); // 성공적으로 삭제되면 onDelete 함수 호출
      } else {
        console.error(`Failed to delete todo with ID ${card.id}. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <motion.div
      key={card.id}
      className="relative w-full h-[60px] flex"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x < -100) {
          setIsDragged(true); // 드래그 시 삭제 버튼 표시
        } else {
          setIsDragged(false); // 드래그가 원래 위치로 돌아가면 버튼 숨김
        }
      }}
      animate={{ x: isDragged ? -60 : 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      layout
      style={{ height: '60px' }} // 카드의 고정 높이 설정
    >
      <div className="absolute left-0 top-0 w-full h-full bg-[#f4f7f8] rounded-[10px] flex items-center px-4">
        <img
          width="30"
          height="31"
          src={`${process.env.PUBLIC_URL}/img/${card.image}`}
          alt={`level${card.level}`}
          className="mr-2"
        />
        <div className="flex-grow">
          <div className="text-[13px] font-semibold text-[#79747e]">
            {card.title}
          </div>
          <div className="text-[10px] text-[#79747e]">
            {card.detail}
          </div>
        </div>
        
        {/* Checkbox */}
        <img
          width="26"
          height="26"
          src={`${process.env.PUBLIC_URL}/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
          alt={card.checked ? 'checked' : 'unchecked'}
          onClick={() => onCheck(card)} // 부모 컴포넌트에서 내려받은 onCheck 함수 호출
          className="ml-2"
        />
      </div>

      {/* Delete Button */}
      {isDragged && (
        <motion.button
          className="absolute right-[-60px] bg-red-500 text-white px-2 py-1 rounded"
          onClick={handleDeleteClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img
            width="40"
            height="45"
            src={`${process.env.PUBLIC_URL}/img/main_del.png`}
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Card;
