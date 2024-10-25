import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 가져오기
import '../output.css';

const TrashCan = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSecondScreen, setIsSecondScreen] = useState(false); // 두 번째 화면 전환 상태
  const [text, setText] = useState(''); // 입력된 텍스트 관리
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜 저장
  const [isTextChanged, setIsTextChanged] = useState(false); // 텍스트 변경 여부 관리
  const [isReadyForNextText, setIsReadyForNextText] = useState(false); // 새로운 텍스트 표시 딜레이
  const [isCleanScreen, setIsCleanScreen] = useState(false); // 버리기 버튼 클릭 후 상태

  // 페이지를 열 때 현재 날짜를 받아와서 설정하는 useEffect
  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()} / ${('0' + (date.getMonth() + 1)).slice(-2)} / ${('0' + date.getDate()).slice(-2)}`;
    setCurrentDate(formattedDate);
  }, []);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleSecondScreenClick = () => {
    setIsSecondScreen(true); // 두 번째 화면으로 전환
  };

  const handleCleanScreenClick = () => {
    setIsCleanScreen(true); // 버리기 버튼 클릭 후 마지막 화면 전환
  };

  // 텍스트 입력 시 상태 변경
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 포커스를 잃을 때 텍스트가 변경되도록 설정
  const handleBlur = () => {
    if (text) {
      setIsTextChanged(true); // 텍스트 변경을 트리거

      // 0.5초 후 새로운 텍스트 표시 준비
      setTimeout(() => {
        setIsReadyForNextText(true);
      }, 500); // 0.5초 딜레이 후 페이드 인 시작
    }
  };

  // 최종 화면 (버리기 버튼을 클릭했을 때 렌더링)
  if (isCleanScreen) {
    return (
      <div className="relative w-full h-[800px] flex flex-col items-center justify-center">
        <img
          className="w-[60%] h-auto"
          src="/img/3dicons_edited.png"
          alt="정리된 상태 이미지"
        />
        <div className="mt-8 text-center text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">
          당신의 마음이 정리되었습니다.
        </div>
      </div>
    );
  }

  // 두 번째 화면 렌더링
  if (isSecondScreen) {
    return (
      <div className="relative w-[360px] h-[800px] bg-white flex flex-col items-center justify-start pt-20">
        {/* 설명 텍스트 영역 */}
        <div className="relative h-[40px] w-full flex items-center justify-center mt-8">
          <div className="text-center text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">
            종이 뭉치가 완성되었습니다!
          </div>
        </div>

        {/* 종이 뭉치 이미지 */}
        <div className="relative w-[300px] h-[300px] flex justify-center items-center mt-10">
          <img className="w-full h-auto" src="/img/paperball.png" alt="종이 뭉치 이미지" />
        </div>

        {/* 마지막 버리기 버튼 */}
        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard_Variable'] font-medium text-center text-black text-[16px] font-medium mt-11"
          onClick={handleCleanScreenClick} // 최종 화면으로 전환하는 클릭 핸들러
        >
          버리기
        </button>
      </div>
    );
  }

  // 첫 번째 화면 렌더링
  if (isButtonClicked) {
    return (
      <div className="relative w-[360px] h-[800px] bg-white flex flex-col items-center justify-start pt-20">
        {/* 설명 텍스트 영역 */}
        <div className="relative h-[40px] w-full flex items-center justify-center mt-10 mb-8">
          {/* 기존 텍스트 페이드 아웃 */}
          <div
            className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${
              isTextChanged ? 'opacity-0' : 'opacity-100'
            }`}
          >
            당신의 감정과 생각을 <br /> 솔직하게 적어보세요.
          </div>
          {/* 새 텍스트 페이드 인 */}
          <div
            className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${
              isReadyForNextText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            종이 뭉치 만들 준비가 됐나요?
          </div>
        </div>

        {/* 메모 이미지 영역 */}
        <div className="relative w-[300px] h-[300px] flex justify-center items-center bg-gray-200 rounded-lg shadow-md mb-8">
          <textarea
            className="w-[269px] h-[245px] text-black text-[13px] font-medium font-['Pretendard'] leading-tight tracking-tight outline-none bg-transparent border-none placeholder-gray-500 resize-none"
            value={text}
            onChange={handleChange}
            onBlur={handleBlur} // 포커스를 잃었을 때 텍스트 변경
            placeholder="내용을 입력하세요..."
            autoFocus
            style={{ paddingBottom: '5px' }} // 날짜와 겹치지 않도록 여유 공간 추가
          />
          <div className="absolute bottom-2 right-2 text-gray-500 text-[12px]">{currentDate}</div>
        </div>

        {/* 종이 뭉치로 만들기 버튼 */}
        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full text-center text-black text-[16px] font-['Pretendard_Variable'] font-medium flex justify-center items-center mt-3"
          onClick={handleSecondScreenClick} // 상태 전환을 위한 클릭 핸들러
        >
          종이 뭉치로 만들기
        </button>
      </div>
    );
  }

  // 초기 화면 렌더링
  return (
    <div className="relative w-full h-[800px] flex flex-col justify-start items-center pt-20">
      {/* sqmenu.png를 화면 최상단에 고정 */}
      <Link to="/trashcan_i">
        <img
          className="absolute top-0 left-0 w-[15%] h-auto mt-2 cursor-pointer"
          src={process.env.PUBLIC_URL + "/img/sqmenu.png"}
          alt="icon"
        />
      </Link>
      {/* 나머지 컨텐츠는 sqmenu.png 아래에서 시작 */}
      <div className="relative w-full flex flex-col items-center justify-start mt-[50px]">
        <img className="w-[60%] h-auto" src={process.env.PUBLIC_URL + "/img/3dicons_edited.png"} alt="3D icon" />

        <div className="mt-5 font-extrabold text-[20px] leading-[100%] font-['Pretendard'] text-center text-black whitespace-nowrap">
          당신을 괴롭히는 <br /> 생각을 버려볼까요?
        </div>

        {/* 버리러 가기 버튼 - 동일한 위치에 배치 */}
        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard'] text-center text-black text-[16px] font-['Pretendard_Variable'] font-medium  flex justify-center items-center mt-9"
          onClick={handleButtonClick}
        >
          버리러 가기
        </button>
      </div>
    </div>
  );
};

export default TrashCan;
