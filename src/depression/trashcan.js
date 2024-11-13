import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../output.css';

const TrashCan = () => {
  const [currentScreen, setCurrentScreen] = useState('initial');
  const [text, setText] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isTextChanged, setIsTextChanged] = useState(false);
  const [isReadyForNextText, setIsReadyForNextText] = useState(false);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()} / ${('0' + (date.getMonth() + 1)).slice(-2)} / ${('0' + date.getDate()).slice(-2)}`;
    setCurrentDate(formattedDate);
  }, []);

  const goToInitialScreen = () => setCurrentScreen('initial');
  const goToButtonClickedScreen = () => setCurrentScreen('buttonClicked');
  const goToSecondScreen = () => setCurrentScreen('second');
  const goToCleanScreen = () => setCurrentScreen('clean');

  const handleBack = () => {
    if (currentScreen === 'clean') goToSecondScreen();
    else if (currentScreen === 'second') goToButtonClickedScreen();
    else if (currentScreen === 'buttonClicked') goToInitialScreen();
  };

  const handleCleanScreenClick = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://your-backend-url/emobin-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(text),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        goToCleanScreen();
      } else {
        console.error("Failed to add emotion garbage:", response.statusText);
        alert("Failed to add emotion garbage");
      }
    } catch (error) {
      console.error("Error adding emotion garbage:", error);
      alert("Error adding emotion garbage");
    }
  };

  const handleChange = (e) => setText(e.target.value);

  const handleBlur = () => {
    if (text) {
      setIsTextChanged(true);
      setTimeout(() => setIsReadyForNextText(true), 500);
    }
  };

  // 뒤로가기 버튼 컴포넌트
  const BackButton = () => (
   <div className="absolute fixed top-[35px] w-full h-[45px] flex items-center justify-start py-[5px] px-[23px] bg-transparent z-60" onClick={handleBack}>
      <img width="12" height="24" src={process.env.PUBLIC_URL + "/img/back.png"} alt="back" />
    </div>
  );

  if (currentScreen === 'clean') {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        <BackButton />
        <div className="relative h-[40px] w-full flex items-center justify-center mt-8">
          <div className="text-center text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">
            당신의 마음이 정리되었습니다!
          </div>
        </div>
        <img
          className="w-[60%] h-auto"
          src="/img/3dicons_edited.png"
          alt="정리된 상태 이미지"
        />
        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard_Variable'] font-medium text-center text-black text-[16px] font-medium mt-11"
          onClick={goToInitialScreen}
        >
          돌아가기
        </button>
      </div>
    );
  }

  if (currentScreen === 'second') {
    return (
      <div className="relative w-full h-full bg-white">
        
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <div className='flex flex-col items-center justify-center'>
            <div className="relative h-[40px] w-full flex items-center justify-center">
              <div className="text-center text-black text-xl font-extrabold font-['Pretendard_Variable'] leading-tight tracking-tight">
                종이 뭉치가 완성되었습니다!
              </div>
            </div>

            <div className="relative w-[300px] h-[300px] flex justify-center items-center mt-10">
              <img className="w-full h-auto" src="/img/paperball.png" alt="종이 뭉치 이미지" />
            </div>

            <button
              className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard_Variable'] font-medium text-center text-black text-[16px] font-medium mt-11"
              onClick={handleCleanScreenClick}
            >
              버리기
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'buttonClicked') {
    return (
      <div className="relative w-full h-full bg-white">
        
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <div className='flex flex-col items-center justify-center'>
            <div className="relative h-[40px] w-full flex items-center justify-center mb-10">
              <div
                className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${isTextChanged ? 'opacity-0' : 'opacity-100'}`}
              >
                당신의 감정과 생각을 <br /> 솔직하게 적어보세요.
              </div>
              <div
                className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${isReadyForNextText ? 'opacity-100' : 'opacity-0'}`}
              >
                종이 뭉치 만들 준비가 됐나요?
              </div>
            </div>

            <div className="relative w-[300px] h-[300px] flex justify-center items-center bg-gray-200 rounded-lg shadow-md mb-8">
              <textarea
                className="w-[269px] h-[245px] text-black text-[13px] font-medium font-['Pretendard'] leading-tight tracking-tight outline-none bg-transparent border-none placeholder-gray-500 resize-none"
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="내용을 입력하세요..."
                autoFocus
                style={{ paddingBottom: '5px' }}
              />
              <div className="absolute bottom-2 right-2 text-gray-500 text-[12px]">{currentDate}</div>
            </div>

            <button
              className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full text-center text-black text-[16px] font-['Pretendard_Variable'] font-medium flex justify-center items-center mt-3"
              onClick={goToSecondScreen}
            >
              종이 뭉치로 만들기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center">
      <Link to="/trashcan_i">
        <img
          className="absolute top-20 right-0 w-[35px] h-auto mt-2 mr-10 cursor-pointer"
          src={process.env.PUBLIC_URL + "/img/sqmenu.png"}
          alt="icon"
        />
      </Link>
      <div className="relative w-full flex flex-col items-center justify-start">
        <img className="w-[248px] h-auto" src="/img/3dicons_edited.png" alt="3D icon" />

        <div className="mt-5 font-extrabold text-[20px] leading-[100%] font-['Pretendard'] text-center text-black whitespace-nowrap">
          당신을 괴롭히는 <br /> 생각을 버려볼까요?
        </div>

        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard'] text-center text-black text-[16px] font-['Pretendard_Variable'] font-medium flex justify-center items-center mt-9"
          onClick={goToButtonClickedScreen}
        >
          버리러 가기
        </button>
      </div>
    </div>
  );
};

export default TrashCan;
