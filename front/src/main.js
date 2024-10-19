import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // FBXLoader 사용
import './output.css';
import TodoList from './maintodo';

const Model = () => {
  const modelRef = useRef();

  // FBXLoader로 FBX 파일 로드
  const fbx = useLoader(FBXLoader, process.env.PUBLIC_URL + '/img/test_cat.fbx');

  // 천천히 좌에서 우로 회전
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;  // 천천히 좌에서 우로 회전
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

  // 텍스트 목록
  const texts = [
    "오 늘은 기분이 어때? ",
    "할 일을 잊지 마! ",
    "운 동을 해볼까? ",
    "건 강한 하루! ",
    "물  많이 마시자! "
  ];

  // 텍스트 변경 함수
  const changeText = () => {
    if (!isAnimating) {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setCurrentText(randomText);
      setDisplayText(''); // 기존 텍스트 초기화
      setIsAnimating(true);
    }
  };

  // 텍스트 애니메이션 효과
  useEffect(() => {
    if (isAnimating && currentText && currentText.length > 0) {
      let currentIndex = 0;
      setDisplayText(''); // displayText 초기화
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        currentIndex++;
        if (currentIndex +1 === currentText.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100); // 0.5초마다 한 글자씩 보여줌
    }
  }, [isAnimating, currentText]);

const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 0부터 시작하므로 +1
const [currentDate, setCurrentDate] = useState(new Date().getDate()); // 오늘 날짜

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-start gap-[2vh]">
        {/* 3D 오브젝트가 들어갈 곳 */}
        <div className="relative self-stretch w-[100%] h-[50vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '5vh', paddingBottom: '0vh' }}>
          {/* Three.js Canvas */}
          <Canvas className="w-full h-full" shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} castShadow />
            <Suspense fallback={null}>
              <Model /> {/* 3D 모델 */}
            </Suspense>
            {/* 바닥 추가 */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <planeGeometry args={[500, 100]} />
              <meshStandardMaterial color="#D7DE8E" />
            </mesh>
            <OrbitControls enableZoom={false} /> {/* 좌우 회전 가능 */}
          </Canvas>
        </div>

        {/* 텍스트 박스 */}
                <div
          className="relative bg-[#f4f7f8] rounded-[16px] px-[10px] py-[5px] text-center text-[10px] leading-[24px]"
          style={{
            position: 'absolute',
            top: '19vh',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto', // 텍스트 길이에 따라 박스 크기 조절
            maxWidth: '300px', // 최대 크기 제한
            whiteSpace: 'nowrap',
          }}
          onClick={changeText} // 터치하면 텍스트 변경
        >
          {displayText || "클릭해서 말해보세요!"}
        </div>

        {/* 나머지 UI */}
        
        <div className="self-stretch h-[534px] shrink-0 flex flex-col items-center justify-center gap-[5px] py-[10px] px-[15px]"style={{ paddingLeft:'2vh', paddingRight: '2vh'} }>
      {/* 날짜 표시 */}
            <div className="relative w-[100%] h-[15px] flex ml-[16px]">
              <div className="realative top-0 w-[40%] h-[23px] text-[20px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000] text-center flex flex-col justify-center">
                {currentMonth}월 {currentDate}일
              </div>
              <a href='/AddTodo'>
                <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
              </a>
            </div>

      
      <div className="self-stretch h-[454px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[7px]">
          <div className="w-[205px] h-[27px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
            <img width="51" height="23" src={process.env.PUBLIC_URL + "img/todo_cell118_800.png"}></img>
            <img width="51" height="23" src={process.env.PUBLIC_URL + "img/todo_cell118_803.png"}></img>
            <img width="51" height="23" src={process.env.PUBLIC_URL + "img/todo_cell118_805.png"}></img>
          </div>
          <div className="flex-1 h-[27px] flex flex-row items-start justify-end">
            <img width="64" height="23" src={process.env.PUBLIC_URL + "/img/order118_808.png"}></img>
          </div>
        </div>
        <TodoList/>
        </div>
    </div>
  </div>
          </div>
       
  );
};

export default Main;
