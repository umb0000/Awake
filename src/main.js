import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './output.css';
import TodoList from './maintodo';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationMixer, LoopRepeat } from 'three';
import { useFBX } from '@react-three/drei';
import LevelSystem from './LevelSystem';
import LevelUpPopup from './LevelUpPopUp'; // LevelUpPopup 컴포넌트 추가
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import Diary from './calenderDiary.js';
import { VscClose } from "react-icons/vsc";

// 3D 모델 컴포넌트
const Model = () => {
  const modelRef = useRef(); // 모델의 참조
  const clockRef = useRef(0); // 애니메이션을 위한 시계
  const fbx = useFBX(process.env.PUBLIC_URL + '/3d_models/j015.fbx'); // FBX 모델 로드
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
  const navigate = useNavigate();
  const [showDiary, setShowDiary] = useState(false); // 다이어리 팝업 표시 여부 추가
  const [catData, setCatData] = useState({ total_done: 0, cat_percent: 0, cat_level: 0 });

  const handleUpdateCatData = (data) => {
    console.log("Updated cat data:", data);
    setCatData(data);
  };

  // catData 상태 업데이트 함수
  const updateCatData = (data) => {
    setCatData(data);
  };

  useEffect(() => {
      const token = localStorage.getItem('token'); 
      if (!token) {
          navigate('/unlogined');
         return;
      }
  }, [navigate]);

  const handleMailClick = () => {
    setShowDiary(true); // mail.png 클릭 시 다이어리 팝업 열기
  };
  const closeDiary = () => {
    setShowDiary(false); // 다이어리 팝업 닫기
  };
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
    "냐옹~ 오늘도\n 좋은 하루!", 
    "우선순위\n 높은 거 먼저!", 
    "냥냥, 운동 어때?", 
    "건강한 하루 보내!", 
    "물 많이 마시라냥~", 
    "잘하고 있다냥!", 
    "냥냥, 힘내라옹!"
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

     // 1분마다 텍스트 변경 함수
  useEffect(() => {
    const changeText = () => {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      setDisplayText(randomText);
    };
    // 초기 텍스트 설정
    changeText();
    // 1분 간격으로 텍스트 변경
    const interval = setInterval(changeText, 60000);
    return () => clearInterval(interval);
  }, [texts]);
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
  return (
    <div className="relative w-[100%] h-screen custom-gradient overflow-hidden">
      
      {/* LevelUpPopup */}
      <AnimatePresence>
        {showLevelUpPopup && <LevelUpPopup onClose={closeLevelUpPopup} />}
      </AnimatePresence>
      
      
      {/* Diary 팝업 */}
      <AnimatePresence>
      {showDiary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div 
            className="relative bg-gradient-to-t from-[#e8f2ff] to-white w-[340px] h-[557px] rounded-md shadow-lg p-4 flex items-center justify-center"
          >
            <button
              onClick={closeDiary}
              className="absolute top-3 right-3 text-gray-500 z-50">

            <VscClose size={24} />
            </button>
            <Diary />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
      
      <div className="relative left-0 top-0 w-[100%] flex flex-col items-center justify-start gap-[5px]">
      
        
        {/* 말풍선 */}
        <div className="absolute top-[5vh] left-[3vw] bg-white text-[#4B4B4B] px-3 py-2 rounded-lg shadow-lg max-w-[40vw] flex items-center justify-center text-center z-10">
          <span className="text-[1.5vh] font-['Pretendard_Variable'] font-bold">
            {displayText}
          </span>
        </div>
        {/* 오른쪽 상단 작은 이미지 */}
        <a
          href="http://kwawake.duckdns.org/collect"
          className="absolute top-8 right-4 w-[40px] h-[40px] flex items-center justify-center z-10" // z-index 추가
        >
          <img
            src={process.env.PUBLIC_URL + "/img/dogam.png "}
            alt="dogam"
            className="w-[35px] h-[35px] transform rotate-[15deg]"
          />
        </a>
        {/* 오른쪽 상단 메일 아이콘 버튼 */}
        <button
        className="absolute top-15 right-4 w-[49px] h-[45px] flex items-center justify-center z-10"
        onClick={handleMailClick} // 클릭 시 다이어리 팝업 표시
        style={{
          background: 'transparent', // 배경 투명
          border: 'none', // 테두리 없음
          padding: 0, // 기본 여백 제거
        }}
        >
        <img
          src={process.env.PUBLIC_URL + "/img/mail.png"}
          alt="Mail Icon"
          className="w-[30px] h-[25px] transform rotate-[15deg] drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
        />
      </button>
        {/* 3D 모델 표시 영역 */}
        <div className="relative self-stretch w-[100%] h-[25vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '0vh', paddingBottom: '0vh' }}>
          <Canvas className="w-full h-full" gl={{ alpha: true }}>
            
          <ambientLight intensity={2} />  // 주변 조명
          <directionalLight
            position={[2, 5, 5]}  // 방향 조명의 위치를 조정하여 대상에 비치는 각도 설정
            intensity={1.2}  // 강도 조정 (기본값보다 약간 밝게 설정)
          />
          <pointLight
            position={[0, 10, 0]}  // 상단에서 직접 내려오는 위치
            intensity={0.5}  // 낮은 강도로 보조 조명처럼 활용
          />
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
              <span className="w-full h-[40px] text-[24px] leading-[24px] tracking-[.01em] font-bold font-[Pretendard] text-[#000] items-start justify-center"> {totalCards === 0 ? "0.0" : ((completedCards / totalCards) * 100).toFixed(1)}% </span>
              <span className='font-[Pretendard] font-bold text-[13px] text-[#79747e]'>{completedCards}/{totalCards}</span>
            </div></div>
          {/* TodoList 컴포넌트에서 달성률을 받아옴 */}
          <div className="self-stretch h-[600px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
            <TodoList  onCheck={handleCheck} completeTask={(type, priority) => levelSystem.completeTask(type, priority)}
            uncompleteTask={(type, priority) => levelSystem.uncompleteTask(type, priority)} onCompletionRateChange={handleCompletionRateChange} onPointChange={handlePointChange} />
          </div>
          <div className="main-container">
      {/* 고양이 관련 데이터 표시 */}
      <div className="cat-data">
        고양이 레벨: {catData.cat_level} | 달성률: {catData.cat_percent}% | 완료 포인트: {catData.total_done}
      </div>

      {/* TodoList 컴포넌트에 updateCatData 함수를 전달 */}
      <TodoList onUpdateCatData={handleUpdateCatData} />
      <TodoList onUpdateCatData={updateCatData} />
    </div>


        </div>  
             
      </div>

            
    </div>
  );
};

export default Main;