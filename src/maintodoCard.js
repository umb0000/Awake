import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ card, onCheck, onDelete }) => {
  return (
    <motion.div
      key={card.id}
      className="relative w-full h-[50px] flex"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.x < -100) {
          onDelete(card.id);
        }
      }}
      layout
    >
      <div className="absolute left-0 top-0 w-full h-[50px] bg-[#f4f7f8] rounded-[10px]"></div>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center gap-[10px]">
        <img
          width="30"
          height="31"
          src={`${process.env.PUBLIC_URL}/img/${card.image}`}
          alt={`level${card.level}`}
        />
        
        <div className="h-[30px] flex-grow flex flex-col items-start justify-center" style={{ minWidth: '73%', maxWidth: '180px' }}>
          <div className="w-full text-[13px] font-semibold text-[#79747e] flex justify-center">
            {card.title}
          </div>
          <div className="w-full text-[10px] text-[#79747e] flex justify-center">
            {card.detail}
          </div>
        </div>

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
