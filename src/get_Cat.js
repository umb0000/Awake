import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose } from "react-icons/vsc";
import Confetti from 'react-confetti';
import './output.css';

const LevelUpPopup = ({ onClose }) => {
  const [showCat, setShowCat] = useState(false);

  const handleRevealCat = () => setShowCat(true);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-[300px] h-[400px] rounded-xl shadow-lg flex flex-col items-center p-5 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {/* 닫기 버튼 */}
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">
            <VscClose size={24} />
          </button>

          <h2 className="text-2xl font-bold text-orange-500 mt-2 mb-4">Level Up!</h2>
          <p className="text-lg text-gray-700">고양이를 얻었습니다!</p>

          <div className="w-40 h-40 flex items-center justify-center my-6">
            {!showCat ? (
              <div className="bg-gray-300 rounded-full w-full h-full" />
            ) : (
              <motion.img
                src={process.env.PUBLIC_URL + "/img/cat.png"}
                alt="Cat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full"
              />
            )}
          </div>

          {/* 고양이 얻기 버튼 */}
          {!showCat ? (
            <button
              onClick={handleRevealCat}
              className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-orange-600 transition duration-200"
            >
              고양이 얻기
            </button>
          ) : (
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={150} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LevelUpPopup;
