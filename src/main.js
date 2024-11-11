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
import LevelUpPopup from './LevelUpPopUp'; // LevelUpPopup 컴포넌트 추가


// 3D 모델 컴포넌트
const Model = () => {
  const modelRef = useRef(); // 모델의 참조
  const clockRef = useRef(0); // 애니메이션을 위한 시계
  const fbx = useFBX(process.env.PUBLIC_URL + '/3d_models/cat_ani_orangewhite.fbx'); // FBX 모델 로드
  const mixer = useRef(null); // 애니메이션 믹서
  const [isModelLoaded, setIsModelLoaded] = useState(false); // 모델 로드 여부

  useEffect(() => {
    // 모델이 로드된 후 애니메이션 믹서 및 애니메이션 초기화
    if (fbx && fbx.animations.length > 0) {
      mixer.current = new AnimationMixer(fbx);
      const action = mixer.current.clipAction(fbx.animations[0]); // 첫 번째 애니메이션 액션
      action.setLoop(LoopRepeat, Infinity); // 무한 반복 설정
      action.play();
      setIsModelLoaded(true); // 모델이 로드되었음을 표시
    }
  }, [fbx]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // 모델 회전
      modelRef.current.rotation.y += 0.000;
      // 스케일 애니메이션 처리
      clockRef.current += 0.02;
      const scale = 4 + Math.sin(clockRef.current) * 0.15;
      modelRef.current.scale.set(scale, scale, scale);
      // 모델 로드 상태가 true일 때만 애니메이션 믹서 업데이트
      if (isModelLoaded && mixer.current) {
        // 애니메이션 속도를 느리게 하기 위해 delta 값을 조정
        const slowDelta = delta * 1; // 애니메이션 속도를 절반으로 줄임 (0.5배 속도)
        // 믹서 업데이트
        mixer.current.update(slowDelta);
        // 애니메이션의 현재 시점을 콘솔에 출력
        //const action = mixer.current.clipAction(fbx.animations[0]);
        //console.log(`Current animation time: ${action.time.toFixed(2)}s`);
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
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]); // 초기 상태를 오늘 날짜로 설정

   // LevelUpPopup 표시 상태 추가
  const [showLevelUpPopup, setShowLevelUpPopup] = useState(false);


  const handleTabChange = (tab) => {
    setSelectedTab(tab); // 탭 변경
  };


  // 점수 및 레벨 업데이트 핸들러
  const updateLevelSystemState = (updatedState) => {
    if (updatedState) {
      // 레벨업 발생 시 showLevelUpPopup을 true로 설정
      if (updatedState.level > level) {
        setShowLevelUpPopup(true);
      }

      setLevel(updatedState.level);
      setCurrentScore(updatedState.currentScore);
      setScoreToNextLevel(updatedState.scoreToNextLevel);

      const progressPercentage = ((updatedState.currentScore / updatedState.scoreToNextLevel) * 100).toFixed(1);
      setCompletionRate(progressPercentage);
    } else {
      console.error("Error: updatedState is undefined or null");
    }
  };


  // LevelUpPopup 닫기 함수
  const closeLevelUpPopup = () => {
    setShowLevelUpPopup(false);
  };


  // 체크박스 클릭 시 실행되는 함수
  const handleCheck = (card) => {
    const priority = card.type === "todo" 
      ? (card.image === "level3.png" ? "상" : card.image === "level2.png" ? "중" : "하") 
      : "routine";

    const isHighPriorityCompleted = priority === "상"; // 우선순위가 "상"인 경우

    // 레벨 시스템 업데이트를 완료/취소에 따라 다르게 호출
    const updatedState = card.checked
      ? levelSystem.uncompleteTask(priority, isHighPriorityCompleted)
      : levelSystem.completeTask(priority, isHighPriorityCompleted);


    card.checked = !card.checked; // 체크 상태 반전
    updateLevelSystemState(updatedState); // 레벨 시스템 상태 업데이트

  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = new Intl.DateTimeFormat('ko-KR', { weekday: 'long' }).format(date); // 요일 추가
    
    return `${month}월 ${day}일 (${dayOfWeek})`;
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
      {/* LevelUpPopup */}
      <AnimatePresence>
        {showLevelUpPopup && <LevelUpPopup onClose={closeLevelUpPopup} />}
      </AnimatePresence>
      
      
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
        <div className="relative flex-col items-start">
            <div>
              <span className="w-full h-[40px] text-[24px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#000] items-start justify-center">{completionRate}% </span>
              <span className='font-[Pretendard] font-bold text-[13px] text-[#79747e]'>{completedCards}/{totalCards}</span>
            </div></div>
        <div className="w-[200px] h-7 flex-row gap-[5px] relative">
                
                <div className="w-[100px] left-0 top-0 absolute text-left text-[#49454f] font-bold text-[13px] font-['Pretendard'] leading-7">
                  {formatDate(selectedDate)}
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <img
                  className="w-[12px] h-[7px] left-[100px] top-[7px] relative"
                  src={process.env.PUBLIC_URL + `/img/down.png`}
                  alt="Calendar Icon"
                />
              </div>

          {/* TodoList 컴포넌트에서 달성률을 받아옴 */}
          <div className="self-stretch h-[600px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
            <TodoList  onCheck={handleCheck} completeTask={(type, priority) => levelSystem.completeTask(type, priority)}
            uncompleteTask={(type, priority) => levelSystem.uncompleteTask(type, priority)} onCompletionRateChange={handleCompletionRateChange} onPointChange={handlePointChange} />
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