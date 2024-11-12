import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, onCheck, onDelete }) => {
  const [isDragged, setIsDragged] = useState(false); // 드래그 상태를 저장하는 상태 추가

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    try {
      // 서버에 DELETE 요청을 보냅니다.
      const response = await fetch(`http://112.152.14.116:10211/todo-delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // 토큰 추가
        },
        body: JSON.stringify({ id: card.id }),
      });

      if (response.ok) {
        // 성공적으로 삭제되면 onDelete 함수 호출
        onDelete(card.id);
        console.log(`Todo with ID ${card.id} has been deleted.`);
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
            setIsDragged(true); // Show delete button when dragged left
        } else {
            setIsDragged(false); // Hide delete button when dragged right
        }
    }}
    animate={{ x: isDragged ? -60 : 0 }}
    transition={{ type: "spring", stiffness: 300 }}
    layout
>
    <div className="absolute left-0 top-0 w-full h-full bg-[#f4f7f8] rounded-[10px] flex items-center px-4">
        {/* Icon */}
        <img
            width="30"
            height="31"
            src={`${process.env.PUBLIC_URL}/img/${card.image}`}
            alt={`level${card.level}`}
            className="mr-2"
        />

        {/* Title and Details */}
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
            onClick={(e) => {
                e.stopPropagation();
                onCheck(card.id);
            }}
            className="ml-2"
        />
    </div>

    {/* Delete Button */}
    {isDragged && (
        <motion.button
            className="absolute right-[-70px] transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDeleteClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            X
        </motion.button>
    )}
</motion.div>
);
};

export default Card;
