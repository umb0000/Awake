import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VscClose } from "react-icons/vsc";
import Confetti from 'react-confetti';
import './output.css';

// 11개의 고양이 이미지 경로 배열
const catImages = [
  "/img/AllPurple.png",
  "/img/Black_orangeCheeck.png",
  "/img/Black_pinkCheeck.png",
  "/img/Blue.png",
  "/img/DarkGray.png",
  "/img/Black_eyeWhite_5.png",
  "/img/Gray.png",
  "/img/Green_redCheeck.png",
  "/img/GreenWhite.png",
  "/img/Pink.png",
  "/img/Purple.png",
  "/img/SamSack.png"
];

const LevelUpPopup = ({ onClose }) => {
  const [showCat, setShowCat] = useState(false);
  const [randomCatImage, setRandomCatImage] = useState(null);

  const handleRevealCat = () => {
    const randomIndex = Math.floor(Math.random() * catImages.length);
    setRandomCatImage(catImages[randomIndex]);
    setShowCat(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white w-[300px] h-[450px] rounded-xl shadow-lg flex flex-col items-center p-5 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          {/* 닫기 버튼 - 모든 화면에서 표시 */}
          <button onClick={onClose} className="absolute top-3 right-3 text-gray-500">
            <VscClose size={24} />
          </button>

          <h2 className="text-2xl font-bold text-orange-500 mt-2 mb-4">
            Level Up!
          </h2>
          <p className="text-lg text-gray-700">
            {showCat ? "고양이를 얻었습니다!" : "어떤 고양이가 나올까요?"}
          </p>

          <div className="w-40 h-40 flex items-center justify-center my-6">
            {!showCat ? (
              <motion.img
                src={process.env.PUBLIC_URL + "/img/mysteryCat.png"}
                alt="Mystery Cat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full"
              />
            ) : (
              <motion.img
                src={process.env.PUBLIC_URL + randomCatImage}
                alt="Cat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full"
              />
            )}
          </div>

          {!showCat ? (
            <button
              onClick={handleRevealCat}
              className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-orange-600 transition duration-200"
            >
              고양이 얻기
            </button>
          ) : (
            <>
              <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={150}
                recycle={false}
                run={true}
                style={{ position: "fixed", top: 0 }}
              />
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-orange-600 duration-200"
                onClick={() => window.location.href = "http://kwawake.duckdns.org/collect"}>
                도감 바로가기
              </button>

            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LevelUpPopup;
