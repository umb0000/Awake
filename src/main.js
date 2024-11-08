import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './output.css';
import TodoList from './maintodo';
import MainAdd from './mainAdd';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationMixer, LoopRepeat } from 'three';
import { useFBX } from '@react-three/drei';
import LevelSystem from './LevelSystem';

// 3D 모델 컴포넌트
const Model = () => {
  const modelRef = useRef(); // 모델의 참조
  const clockRef = useRef(0); // 애니메이션을 위한 시계
  const fbx = useFBX(process.env.PUBLIC_URL + '/3d_models/cat_ani_orangewhite.fbx'); // FBX 모델 로드
  const mixer = useRef(null); // 애니메이션 믹서
  const [isModelLoaded, setIsModelLoaded] = useState(false); // 모델 로드 여부

  useEffect(() => {
    if (fbx && fbx.animations.length > 0) {
      mixer.current = new AnimationMixer(fbx); // 애니메이션 믹서 초기화
      const action = mixer.current.clipAction(fbx.animations[0]); // 첫 번째 애니메이션 사용
      action.setLoop(LoopRepeat, Infinity); // 무한 반복 설정
      action.play();
      setIsModelLoaded(true); // 모델이 로드됨을 표시
    }
  }, [fbx]);

  // 매 프레임마다 애니메이션 업데이트
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.000; // 모델 회전
      clockRef.current += 0.02; // 시계 업데이트
      const scale = 4 + Math.sin(clockRef.current) * 0.15; // 모델 크기 애니메이션
      modelRef.current.scale.set(scale, scale, scale);
      if (isModelLoaded && mixer.current) {
        mixer.current.update(delta * 1); // 애니메이션 업데이트
      }
    }
  });

  return <primitive object={fbx} ref={modelRef} position={[0, -2, 0]} receiveShadow scale={[3, 3, 3]} />;
};

const Main = () => {
  const [selectedTab, setSelectedTab] = useState('all'); // 선택된 탭 상태
  const [currentText, setCurrentText] = useState(''); // 현재 텍스트
  const [displayText, setDisplayText] = useState(''); // 화면에 표시되는 텍스트
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 상태
  const [completionRate, setCompletionRate] = useState(0); // 달성률
  const [showAddDrawer, setShowAddDrawer] = useState(false); // 입력 서랍 표시 여부
  const [totalCards, setTotalCards] = useState(0); // 전체 카드 개수
  const [completedCards, setCompletedCards] = useState(0); // 완료된 카드 개수
  const [points, setPoints] = useState(0); // 포인트
  const [levelSystem] = useState(new LevelSystem()); // LevelSystem 인스턴스 생성
  const [level, setLevel] = useState(levelSystem.level);
  const [currentScore, setCurrentScore] = useState(levelSystem.currentScore);
  const [scoreToNextLevel, setScoreToNextLevel] = useState(levelSystem.scoreToNextLevel);


  const handleTabChange = (tab) => {
    setSelectedTab(tab); // 탭 변경
  };
  
  // 점수 및 레벨 업데이트 핸들러
const updateLevelSystemState = (updatedState) => {
  setLevel(updatedState.level); // 새로운 레벨 설정
  setCurrentScore(updatedState.currentScore); // 현재 점수 설정
  setScoreToNextLevel(updatedState.scoreToNextLevel); // 다음 레벨까지 필요한 점수 설정

  // 퍼센트로 계산된 게이지 바 업데이트
  const progressPercentage = ((updatedState.currentScore / updatedState.scoreToNextLevel) * 100).toFixed(1);
  setCompletionRate(progressPercentage); // 달성률 업데이트
};


  // 체크박스 클릭 시 실행되는 함수
  const handleCheck = (card) => {
    const priority = card.type === "todo" ? 
    (card.image === "level3.png" ? "상" : card.image === "level2.png" ? "중" : "하") 
    : "routine";

  const isHighPriorityCompleted = priority === "상"; // 우선순위가 "상"인 경우


  const updatedState = card.checked
  ? levelSystem.uncompleteTask(priority, isHighPriorityCompleted)
  : levelSystem.completeTask(priority, isHighPriorityCompleted);


    updateLevelSystemState(updatedState);
    card.checked = !card.checked; // 체크 상태 반전
  };

  
  const texts = [
    "오늘은 기분이 어때? ",
    "할일을 잊지 마! ",
    "운동을 해볼까? ",
    "건강한 하루! ",
    "물 많이 마시자! "
  ];

  // 텍스트 변경 함수
  const changeText = () => {
    if (!isAnimating) {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setCurrentText(randomText);
      setDisplayText('');
      setIsAnimating(true);
    }
  };

  // 텍스트 애니메이션 효과
  useEffect(() => {
    if (isAnimating && currentText.length > 0) {
      let currentIndex = 0;
      setDisplayText('');
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        currentIndex++;
        if (currentIndex === currentText.length - 1) { // 마지막 글자까지 표시 후 종료
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100); // 0.1초 간격으로 텍스트 표시
    }
  }, [isAnimating, currentText]);

  // 달성률 및 카드 개수 업데이트 함수
  const handleCompletionRateChange = (rate, total, completed) => {
    setCompletionRate(rate);
    setTotalCards(total);
    setCompletedCards(completed);
  };

  // 포인트 변경 함수
  const handlePointChange = (newPoints) => {
    setPoints(prevPoints => prevPoints + newPoints); // 포인트 누적
  };

  // 입력 서랍 열고 닫기
  const toggleAddDrawer = () => {
    setShowAddDrawer(!showAddDrawer);
  };

  return (
    <div className="relative w-[100%] h-[800px] custom-gradient overflow-hidden">
      <div className="relative left-0 top-0 w-[100%] flex flex-col items-center justify-start ">
        
        {/* 3D 모델 표시 영역 */}
        <div className="relative self-stretch w-[100%] h-[25vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '0vh', paddingBottom: '0vh' }}>
          <Canvas className="w-full h-full" gl={{ alpha: true }}>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 0.7, 0.7]} intensity={1}  />
            <Suspense fallback={null}>
              <Model /> {/* 3D 모델 렌더링 */}
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* 텍스트 게이지 바 */}
        <div className='flex-row items-center' style={{
          position: 'absolute',
          top: '20vh',
          left:'67px',
          width: 'auto',
          whiteSpace: 'nowrap',
        }}>
          <div className="w-[229px] h-[31px] px-[18px] py-[5px] bg-white rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="justify-start items-center gap-[11px] inline-flex">
              <div className="w-[21px] h-[21px] relative">
                <div className="w-[21px] h-[21px] left-0 top-0 absolute bg-[#ff9800] rounded-full" />
                <div className="w-[7.30px] h-[18.26px] left-[6.39px] top-[0.91px] absolute text-white text-sm font-medium font-['Pretendard_Variable'] leading-tight tracking-tight">{level}</div>
              </div>
              <div className="w-[123px] h-[5px] relative bg-[#EEEFEF]">
                {/* 게이지 바 */}
                <div
                  className="absolute bg-gradient-to-r from-[#ff8300] via-[#ff9800] to-[#ffdb8f] rounded-2xl"
                  style={{
                    width: `${((currentScore / scoreToNextLevel) * 100).toFixed(1)}%`,
                    height: '100%',
                  }}
                />
              </div>
              <div className="text-[#ff6d00] text-sm font-medium font-['Pretendard_Variable'] leading-tight tracking-tight">{((currentScore / scoreToNextLevel) * 100).toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* 달성률, 날짜 표시 */}
        <div className="rounded-t-[30px] w-full h-full items-center justify-center gap-[5px] py-[20px] bg-[#fff]" style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
          <div className="relative flex-col items-start" style={{ paddingBottom: '1vh'}}>
            <div>
              <span className="w-full h-[40px] text-[24px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#000] items-start justify-center">{completionRate}% </span>
              <span className='font-[Pretendard] font-bold text-[13px] text-[#79747e]'>{completedCards}/{totalCards}</span>
            </div>
            <div className="w-full h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#79747e] flex flex-col justify-center">
              <p>{new Date().getMonth() + 1}월 {new Date().getDate()}일 Current Points: {points}</p> 
            </div>
            <a onClick={toggleAddDrawer} href="#">
              <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
            </a>
          </div>

          {/* TodoList 컴포넌트에서 달성률을 받아옴 */}
          <div className="self-stretch h-[600px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
            <TodoList  onCheck={handleCheck} completeTask={(type, priority) => levelSystem.completeTask(type, priority)}
            uncompleteTask={(type, priority) => levelSystem.uncompleteTask(type, priority)} onCompletionRateChange={(rate, total, completed) => {
              setCompletionRate(rate);
              setTotalCards(total);
              setCompletedCards(completed);
            }} />
          </div>
        </div>  

        {/* Add 버튼을 우측 하단에 고정 */}
        <button
          onClick={toggleAddDrawer}
          className="fixed bottom-[100px] right-[20px] bg-[#ff9800] text-white p-[10px] rounded-full shadow-lg hover:bg-[#ff6d00] transition duration-200"
        >
          <img width="46" height="46" src={process.env.PUBLIC_URL + "/img/main_add_btn.png"} alt="Add" />
        </button>      
      </div>

      {/* 입력 서랍 (MainAdd) */}          
      <AnimatePresence>
        {showAddDrawer && (
          <>
            {/* 배경 페이드인/페이드아웃 */}
            <motion.div
              className="fixed inset-0 bg-black z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }} // 배경 어두워짐
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }} // 페이드 인/아웃 속도
              onClick={toggleAddDrawer}  // 클릭 시 서랍 닫기
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
                <MainAdd />  {/* MainAdd 컴포넌트 렌더링 */}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
