import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './output.css';
import TodoList from './maintodo';
import MainAdd from './mainAdd'; // MainAdd 컴포넌트 추가
import { motion, AnimatePresence } from 'framer-motion'; // framer-motion 추가

const Model = () => {
  const modelRef = useRef();
  const fbx = useLoader(FBXLoader, process.env.PUBLIC_URL + '/img/test_cat.fbx');
  const clockRef = useRef(0); // 애니메이션의 시간을 추적하기 위한 변수

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.001;
      clockRef.current += 0.02; // 시간을 지속적으로 증가시킴
      const scale = 5 + Math.sin(clockRef.current) * 0.15; // 주기적으로 0.95 ~ 1.05 크기로 변동
      modelRef.current.scale.set(scale, scale, scale); // 고양이 스케일 조정
    }
  });

  return (
    <primitive 
    object={fbx} 
    ref={modelRef}
    position={[0, -1, 0]}
    castShadow 
    receiveShadow 
    scale={[4, 4, 4]} />
  );
};

const Main = () => {
  const [currentText, setCurrentText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [completionRate, setCompletionRate] = useState(0);
  const [showAddDrawer, setShowAddDrawer] = useState(false); // 입력 서랍 상태 추가
  const [totalCards, setTotalCards] = useState(0);
  const [completedCards, setCompletedCards] = useState(0);

  const texts = [
    "오늘은 기분이 어때? ",
    "할일을 잊지 마! ",
    "운동을 해볼까? ",
    "건강한 하루! ",
    "물 많이 마시자! "
  ];

  const changeText = () => {
    if (!isAnimating) {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setCurrentText(randomText);
      setDisplayText('');
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    if (isAnimating && currentText.length > 0) {
      let currentIndex = 0;
      setDisplayText('');
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        currentIndex++;
        if (currentIndex === currentText.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100);
    }
  }, [isAnimating, currentText]);

  const handleCompletionRateChange = (rate, total, completed) => {
    setCompletionRate(rate);
    setTotalCards(total);
    setCompletedCards(completed);
  };

  const toggleAddDrawer = () => {
    setShowAddDrawer(!showAddDrawer); // 입력 서랍 열고 닫기
  };

  return (
    <div className="relative w-[100%] h-[800px] custom-gradient overflow-hidden">
      <div className="relative left-0 top-0 w-[100%] flex flex-col items-center justify-start ">
        
        {/* 3D 모델 */}
        <div className="relative self-stretch w-[100%] h-[25vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '0vh', paddingBottom: '0vh' }}>
        <Canvas className="w-full h-full" gl={{ alpha: true }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0.3, 0.3, 0.3]} intensity={1}  />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
           
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* 대화 텍스트 */}
        <div
          className="relative bg-[#f4f7f8] rounded-[16px] px-[10px] py-[5px] text-center text-[10px] leading-[24px]"
          style={{
            position: 'absolute',
            top: '5vh',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            maxWidth: '300px',
            whiteSpace: 'nowrap',
          }}
          onClick={changeText}
        >
          {displayText || "클릭해서 말해보세요!"}
        </div>

        {/* 달성률, 날짜 표시 */}
        <div className="rounded-t-[30px] w-full h-full items-center justify-center gap-[5px] py-[20px] bg-[#fff] " style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
          <div className="relative flex-col items-start" style={{ paddingBottom: '1vh'}}>
            <div>
              <span className="w-full h-[40px] text-[24px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#000] items-start justify-center">{completionRate}% </span>
              <span className='font-[Pretendard] font-bold text-[13px] text-[#79747e]'>{completedCards}/{totalCards}</span>
            </div>
            <div className="custom-gradient">
          하이하이
        </div>
            <div className="w-full h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#79747e] flex flex-col justify-center">
              <p>{new Date().getMonth() + 1}월 {new Date().getDate()}일</p>
            </div>
            <a onClick={toggleAddDrawer} href="#">
              <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
            </a>
          </div>

          {/* TodoList에서 달성률을 받아옴 */}
          <div className="self-stretch h-[600px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
            <TodoList onCompletionRateChange={handleCompletionRateChange} />
          </div>
        </div>
        
      </div>

      {/* 입력 서랍 (MainAdd) */}
     
          
          <AnimatePresence>
  {showAddDrawer && (
    <>
      {/* 배경 페이드인/페이드아웃 */}
      <motion.div
        className="fixed inset-0 bg-black z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}  // 배경이 어두워지는 정도
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} // 페이드 인/아웃 속도
        onClick={toggleAddDrawer}  // 클릭하면 서랍 닫기
      />

      {/* 서랍 슬라이드 */}
      <motion.div
        className="fixed inset-x-0 bottom-0 z-20 flex items-end justify-center"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}  // 서랍 외부 클릭 차단
      >
        <motion.div
          className="w-[360px] h-[336px] bg-white relative bg-opacity-0 overflow-visible"
        >
          <MainAdd />  {/* MainAdd 렌더링 */}
        </motion.div>
      </motion.div>
    </>
  )}
</AnimatePresence>
          
      
        

    
    </div>
  );
};

export default Main;
