






import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'; // FBXLoader 사용
import './output.css';

const Model = () => {
  const modelRef = useRef();

  // FBXLoader로 FBX 파일 로드
  const fbx = useLoader(FBXLoader, process.env.PUBLIC_URL + '/img/test_cat.fbx');

  // 천천히 좌에서 우로 회전
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;  // 천천히 좌에서 우로 회전
    }
  });

  return (
    <primitive object={fbx} ref={modelRef} castShadow receiveShadow scale={[3, 3, 3]} />
  );
};

const Main = () => {
  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      <div className="absolute left-0 top-0 w-[100%] h-[800px] flex flex-col items-center justify-start gap-[10px]">
        {/* 3D 오브젝트가 들어갈 곳 */}
        <div className="relative self-stretch w-[95%] h-[40vh] shrink-0 flex justify-center items-center bg-red " style={{ top: '10vh' }}>
          {/* Three.js Canvas */}
          <Canvas className="w-full h-full " shadows>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0.3, 1, 0.5]} intensity={0.5} castShadow />
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

        {/* 나머지 UI */}
        <div className="relative w-[95%] h-[478px] shrink-0 flex">
          <div className="absolute left-0 top-[35px] w-[100%] h-[443px] flex flex-col items-start justify-start gap-[7px]">
            <div className="h-[27px] shrink-0 flex flex-row items-start justify-start gap-[7px]">
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_119.png"} alt="todo cell 1" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_122.png"} alt="todo cell 2" />
              <img width="51" height="23" src={process.env.PUBLIC_URL + "/img/todo_cell1_124.png"} alt="todo cell 3" />
            </div>
            <div className="relative w-[95%] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[100%] h-[63px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center flex flex-col justify-center">중요도</div>
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
            <div className="relative w-[95%] h-[63px] shrink-0 flex">
              <div className="absolute left-0 top-0 w-[100%] h-[63px] bg-[#f4f7f8] rounded-[10px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[330px] h-[63px]"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[294px] flex flex-row items-center justify-start gap-[21px]">
                <div className="w-[30px] h-[31px] shrink-0 flex flex-col items-center justify-between">
                  <div className="relative w-[26px] h-[9px] shrink-0 flex">
                    <div className="absolute left-0 top-0 w-[26px] h-[9px] text-[7px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#79747e] text-center flex flex-col justify-center">중요도</div>
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
          <div className="absolute left-0 top-0 w-[100%] h-[29px] flex">
            <div className="absolute left-0 top-0 w-[40%] h-[23px] text-[24px] leading-[24px] tracking-[.01em] font-['Pretendard_Variable'] font-bold text-[#000] text-center flex flex-col justify-center">8월 24일</div>
            <a href='/AddTodo'><img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + "/img/add1_206.png"} alt="add icon" /></a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Main;
