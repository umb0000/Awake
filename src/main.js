import React, { useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './output.css';
import TodoList from './maintodo';
import MainAdd from './MainAdd';

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [completionRate, setCompletionRate] = useState(0); // 달성률 상태 추가

  const handleAddClick = () => {
    setIsDrawerOpen(true); // 서랍 열림 상태로 변경
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false); // 서랍 닫힘 상태로 변경
  };

  return (
    <div className="relative w-[100%] h-[800px] bg-[#fff] overflow-hidden">
      {/* Model and Main Content */}
      <div className={`relative left-0 top-0 w-[100%] flex flex-col items-center justify-start gap-[2vh] ${isDrawerOpen ? 'blur-sm' : ''}`}>
        <div className="relative self-stretch w-[100%] h-[50vh] shrink-0 flex justify-center items-center" style={{ paddingTop: '5vh', paddingBottom: '0vh' }}>
          <Canvas className="w-full h-full" shadows>
            <ambientLight intensity={1} />
            <directionalLight position={[0.5, 0.1, 0.3]} intensity={1} castShadow />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0.2, -1, 0]}>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#D7DE8E" />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        <div className="w-full items-center justify-center gap-[5px] py-[10px]" style={{ paddingLeft: '2vh', paddingRight: '2vh', paddingBottom: '2vh' }}>
          <div className="relative flex-col items-start" style={{ paddingBottom: '2vh' }}>
            <div>
              <span className="w-full h-[40px] text-[24px] leading-[24px] tracking-[.01em] font-bold text-[#000] items-start justify-center">{completionRate}%</span>
            </div>
            <a href="#" onClick={handleAddClick}>
              <img className="absolute right-0 top-[3px]" width="27" height="26" src={process.env.PUBLIC_URL + '/img/add1_206.png'} alt="add icon" />
            </a>
          </div>
        </div>
        <div className="self-stretch h-[200px] shrink-0 flex flex-col items-start justify-start gap-[7px]">
          <TodoList onCompletionRateChange={setCompletionRate} />
        </div>
      </div>

      {/* 배경 어둡게 처리 및 입력 서랍 */}
      {isDrawerOpen && (
        <>
          {/* 어두운 배경 */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={handleCloseDrawer}></div>
          
          {/* 입력 서랍 */}
          <div className="fixed bottom-0 left-0 right-0 h-[350px] z-20 transform transition-transform duration-500">
            <MainAdd />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
