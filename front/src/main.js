import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // FBXLoader 사용
import './output.css';
import TodoList from './maintodo';

const Model = () => {
  const modelRef = useRef();
  const fbx = useLoader(FBXLoader, process.env.PUBLIC_URL + '/img/test_cat.fbx');

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive object={fbx} ref={modelRef} castShadow receiveShadow scale={[3, 3, 3]} />
  );
};

const Main = () => {
  const [currentText, setCurrentText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [completionRate, setCompletionRate] = useState(0); // 달성률 상태 추가

  const texts = [
    "오 늘은 기분이 어때? ",
    "할 일을 잊지 마! ",
    "운 동을 해볼까? ",
    "건 강한 하루! ",
    "물  많이 마시자! "
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
        if (currentIndex === currentText.length-1) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100);
    }
  }, [isAnimating, currentText]);

  const [currentMonth] = useState(new Date().getMonth() + 1);
  const [currentDate] = useState(new Date().getDate());

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="relative left-0 top-0 w-[100%] flex flex-col items-center justify-start gap-[2vh]">

        
        <div className="relative self-stretch w-[100%] h-[50vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '5vh', paddingBottom: '0vh' }}>
          <Canvas className="w-full h-full" shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} castShadow />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <planeGeometry args={[500, 100]} />
              <meshStandardMaterial color="#D7DE8E" />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div
          className="relative bg-[#f4f7f8] rounded-[16px] px-[10px] py-[5px] text-center text-[10px] leading-[24px]"
          style={{
            position: 'absolute',
            top: '19vh',
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

  <div className="w-full items-center justify-center gap-[5px] py-[10px] " style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
  <div className="relative flex-col items-start" style={{ paddingBottom: '2vh'}}>
  <div className="w-full h-[24px] text-[24px] leading-[24px] tracking-[.01em] font-bold text-[#000] flex flex-col justify-center">
      <p className="text-[40px] font-bold">{completionRate}% </p>
    </div>
    <div className="w-full h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-bold text-[#79747e] flex flex-col justify-center">
      {currentMonth}월 {currentDate}일
    </div>
    <a href='/AddTodo'>
      <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
    </a>
  </div>

          <div className="self-stretch h-[200px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
            {/* TodoList에서 달성률을 받아옴 */}
            <TodoList onCompletionRateChange={setCompletionRate} />
            </div>

            {/* 달성률 게이지 */}
          </div>
  </div>


        <div className="absolute text-[50px] text-gray-700">
    오늘 달성률: {completionRate}%
  </div>
      </div>

  );
};

export default Main;
