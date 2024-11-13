import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './output.css';
import TodoList from './maintodo';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationMixer, LoopRepeat } from 'three';
import { useFBX } from '@react-three/drei';
import LevelSystem from './LevelSystem';
import LevelUpPopup from './LevelUpPopUp';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import Diary from './calenderDiary.js';
import { VscClose } from "react-icons/vsc";

// 3D 모델 컴포넌트
const Model = () => {
  const modelRef = useRef();
  const clockRef = useRef(0);
  const fbx = useFBX(process.env.PUBLIC_URL + '/3d_models/j015.fbx');
  const mixer = useRef(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    if (fbx && fbx.animations.length > 0) {
      mixer.current = new AnimationMixer(fbx);
      const action = mixer.current.clipAction(fbx.animations[0]);
      action.setLoop(LoopRepeat, Infinity);
      action.play();
      setIsModelLoaded(true);
    }
  }, [fbx]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.000;
      clockRef.current += 0.02;
      const scale = 4 + Math.sin(clockRef.current) * 0.15;
      modelRef.current.scale.set(scale, scale, scale);
      if (isModelLoaded && mixer.current) {
        mixer.current.update(delta);
      }
    }
  });

  return <primitive object={fbx} ref={modelRef} position={[0, -2, 0]} receiveShadow scale={[3, 3, 3]} />;
};

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [completionRate, setCompletionRate] = useState(0);
  const [totalCards, setTotalCards] = useState(0);
  const [completedCards, setCompletedCards] = useState(0);
  const [points, setPoints] = useState(0);
  const [levelSystem] = useState(new LevelSystem());
  const [level, setLevel] = useState(levelSystem.level);
  const [currentScore, setCurrentScore] = useState(levelSystem.currentScore);
  const [scoreToNextLevel, setScoreToNextLevel] = useState(levelSystem.scoreToNextLevel);
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/unlogined');
      return;
    }
  }, [navigate]);

  const updateLevelSystemState = (updatedState) => {
    if (updatedState) {
      if (updatedState.level > level) {
        setShowLevelUpPopup(true);
      }
      setLevel(updatedState.level);
      setCurrentScore(updatedState.currentScore);
      setScoreToNextLevel(updatedState.scoreToNextLevel);
      setCompletionRate(((updatedState.currentScore / updatedState.scoreToNextLevel) * 100).toFixed(1));
    }
  };

  const handleCheck = (card) => {
    const priority = card.type === "todo" 
      ? (card.image === "level3.png" ? "상" : card.image === "level2.png" ? "중" : "하") 
      : "routine";
    const isHighPriorityCompleted = priority === "상";
    const updatedState = card.checked
      ? levelSystem.uncompleteTask(priority, isHighPriorityCompleted)
      : levelSystem.completeTask(priority, isHighPriorityCompleted);
    card.checked = !card.checked;
    updateLevelSystemState(updatedState);
  };

  const closeLevelUpPopup = () => {
    setShowLevelUpPopup(false);
  };

  return (
    <div className="relative w-[100%] h-screen custom-gradient overflow-hidden">
      <AnimatePresence>
        {showLevelUpPopup && <LevelUpPopup onClose={closeLevelUpPopup} />}
      </AnimatePresence>

      {/* 텍스트 게이지 바 */}
      <div className='flex-row items-center' style={{
        position: 'absolute',
        top: '20vh',
        left: '67px',
        width: 'auto',
        whiteSpace: 'nowrap',
      }}>
        <div className="w-[229px] h-[31px] px-[18px] py-[5px] bg-white rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="justify-start items-center gap-[11px] inline-flex">
            <div className="w-[21px] h-[21px] relative">
              <div className="w-[21px] h-[21px] left-0 top-0 absolute bg-[#ff9800] rounded-full" />
              <div className="w-[7.30px] h-[18.26px] left-[6.39px] top-[0.91px] absolute text-white text-sm font-medium font-['Pretendard_Variable'] leading-tight tracking-tight">{level}</div>
            </div>
            <div className="w-[123px] h-[5px] relative bg-[#EEEFEF] overflow-hidden rounded-2xl">
              {/* 애니메이션 게이지 바 */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentScore / scoreToNextLevel) * 100).toFixed(1)}%` }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 10
                }}
                className="absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] h-full rounded-2xl"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[#ff6d00] text-sm font-medium font-['Pretendard_Variable'] leading-tight tracking-tight"
            >
              {((currentScore / scoreToNextLevel) * 100).toFixed(1)}%
            </motion.div>
          </div>
        </div>
      </div>

      {/* 기타 컴포넌트 및 3D 모델 영역 */}
      <Canvas className="w-full h-full" gl={{ alpha: true }}>
        <ambientLight intensity={2} />
        <directionalLight position={[2, 5, 5]} intensity={1.2} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Main;
