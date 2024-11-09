import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // FBXLoader 사용
import './output.css';

// 3D 모델 컴포넌트
const Model = () => {
  const modelRef = useRef();

  // FBXLoader를 이용해 FBX 파일 로드
  const fbx = useLoader(FBXLoader, process.env.PUBLIC_URL + '/img/test_cat.fbx');

  // 매 프레임마다 모델이 좌에서 우로 회전하도록 설정
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002; // 천천히 좌에서 우로 회전
    }
  });

  return (
    <primitive object={fbx} ref={modelRef} castShadow receiveShadow scale={[3, 3, 3]} />
  );
};

// Main 컴포넌트
const Main = () => {
  const [currentText, setCurrentText] = useState(''); // 현재 텍스트 상태
  const [displayText, setDisplayText] = useState(''); // 화면에 표시되는 텍스트
  const [isAnimating, setIsAnimating] = useState(false); // 애니메이션 중인지 여부

  // 텍스트 목록
  const texts = [
    "오 늘은 기분이 어때? ",
    "할 일을 잊지 마! ",
    "운 동을 해볼까? ",
    "건 강한 하루! ",
    "물  많이 마시자! "
  ];

  // 랜덤 텍스트를 선택하고 애니메이션 시작
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
        if (currentIndex + 1 === currentText.length) { // 마지막 글자까지 추가 후 종료
          clearInterval(interval);
          setIsAnimating(false);
        }
      }, 100); // 0.1초마다 한 글자씩 보여줌
    }
  }, [isAnimating, currentText]);

  // 현재 월과 일 설정
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // 월(0부터 시작) +1
  const [currentDate, setCurrentDate] = useState(new Date().getDate()); // 오늘 날짜

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-start gap-[10px]">
        
        {/* 3D 오브젝트 영역 */}
        <div className="relative self-stretch w-[100%] h-[50vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '5vh', paddingBottom: '0vh' }}>
          <Canvas className="w-full h-full" shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} castShadow />
            <Suspense fallback={null}>
              <Model /> {/* 3D 모델 */}
            </Suspense>
            {/* 바닥 메쉬 */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
              <planeGeometry args={[500, 100]} />
              <meshStandardMaterial color="#D7DE8E" />
            </mesh>
            <OrbitControls enableZoom={false} /> {/* 마우스 회전 가능 */}
          </Canvas>
        </div>

        {/* 텍스트 표시 박스 */}
        <div
          className="relative bg-[#f4f7f8] rounded-[16px] px-[10px] py-[5px] text-center text-[10px] leading-[24px]"
          style={{
            position: 'absolute',
            top: '5vh',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto', // 텍스트 길이에 따라 박스 크기 조절
            maxWidth: '300px', // 최대 크기 제한
            whiteSpace: 'nowrap',
          }}
          onClick={changeText} // 텍스트 변경 클릭 이벤트
        >
          {displayText || "클릭해서 말해보세요!"} {/* 텍스트가 없으면 기본 메시지 표시 */}
        </div>

        {/* 날짜 및 To-do 아이템 영역 */}
        <div className="relative w-[100%] h-auto flex shrink-0 flex mt-[3vh] left-[2vh]">
          <div className="absolute w-[100%] h-[443px] flex flex-col items-center justify-start gap-[7px]">
            
            {/* 날짜 표시 */}
            <div className="relative w-[100%] h-[15px] flex ml-[16px]">
              <div className="relative top-0 w-[40%] h-[23px] text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000] text-center flex flex-col justify-center" style={{ paddingLeft: '2vh'}}>
                {currentMonth}월 {currentDate}일 {/* 현재 날짜 */}
              </div>
              <a href='/AddTodo'>
                <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" />
              </a>
            </div>

            {/* To-do 아이템 리스트 */}
            <div className="h-[27px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_119.png"} alt="todo cell 1" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_122.png"} alt="todo cell 2" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_124.png"} alt="todo cell 3" />
            </div>

            {/* 첫 번째 UI 블록 - 중요도 및 작업 표시 */}
            <div className="relative w-[100%] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center">중요도</div>
                  </div>
                  <div className="relative w-[26px] h-[22px] shrink-0 flex">
                    <div className="absolute left-[2px] top-0 w-[22px] h-[22px] bg-[#f44336] rounded-full"></div>
                    <div className="absolute left-0 top-[6px] w-[26px] h-[9px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff] text-center flex flex-col justify-center">상</div>
                  </div>
                </div>
                <div className="w-[196px] h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] flex flex-col justify-center">메일 확인하기</div>
                <img width="26" height="26" src={process.env.PUBLIC_URL + "/img/check.png"} alt="icon" />
              </div>
            </div>

            {/* 두 번째 UI 블록 - 중요도 및 작업 표시 */}
            <div className="relative w-[95%] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center">중요도</div>
                  </div>
                  <div className="relative w-[26px] h-[22px] shrink-0 flex">
                    <div className="absolute left-[2px] top-0 w-[22px] h-[22px] bg-[#ff9800] rounded-full"></div>
                    <div className="absolute left-0 top-[6px] w-[26px] h-[9px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#fff] text-center flex flex-col justify-center">중</div>
                  </div>
                </div>
                <div className="w-[196px] h-[24px] text-[13px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] flex flex-col justify-center">쓰레기 버리기</div>
                <img width="26" height="26" src={process.env.PUBLIC_URL + "/img/check.png"} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
