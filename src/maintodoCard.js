import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, onCheck, onDelete }) => {
  return (
    <motion.div
      key={card.id}
      className="relative w-full h-[50px] flex" // 세로 높이 고정
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x < -100) {
          onDelete(true);
        } else {
          onDelete(false);
        }
      }}
      animate={{ x: onDelete ? -60 : 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      layout
      style={{ height: '50px' }} // 카드의 고정 높이
    >
      <div className="absolute left-0 top-0 w-full h-full bg-[#f4f7f8] rounded-[10px]"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center gap-[10px]">
        <img
          width="30"
          height="31"
          src={`${process.env.PUBLIC_URL}/img/${card.image}`}
          alt={`level${card.level}`}
        />

        <div className="h-[30px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '73%', maxWidth: '180px' }}>
          <div className="w-full text-[13px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold text-[#79747e] flex flex-col justify-center">
            {card.title}
          </div>
          <div className="w-full text-[10px] leading-[10px] tracking-[.01em] font-['Pretendard'] text-[#79747e] flex flex-col justify-center">
            {card.detail}
          </div>
        </div>

        {onDelete && (
          <motion.button
            className="absolute right-[-70px] transform -translate-y-1/2 bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDeleteClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            X
          </motion.button>
        )}

        <img
          width="26"
          height="26"
          src={`${process.env.PUBLIC_URL}/img/${card.checked ? 'checked.png' : 'unchecked.png'}`}
          alt={card.checked ? 'checked' : 'unchecked'}
          onClick={() => onCheck(card)}
          className="shrink-0"
        />
      </div>
    </motion.div>
  );
};

export default Card;
