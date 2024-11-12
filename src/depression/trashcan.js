import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../output.css';

const TrashCan = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isSecondScreen, setIsSecondScreen] = useState(false);
  const [text, setText] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isTextChanged, setIsTextChanged] = useState(false);
  const [isReadyForNextText, setIsReadyForNextText] = useState(false);
  const [isCleanScreen, setIsCleanScreen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()} / ${('0' + (date.getMonth() + 1)).slice(-2)} / ${('0' + date.getDate()).slice(-2)}`;
    setCurrentDate(formattedDate);
  }, []);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleSecondScreenClick = () => {
    setIsSecondScreen(true);
  };

  // Function to save the emotion garbage item to the backend
  const handleCleanScreenClick = async () => {
    const token = localStorage.getItem('token'); // Retrieve the token from local storage
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
        alert(result.message); // Show success message
        setIsCleanScreen(true); // Proceed to clean screen
      } else {
        console.error("Failed to add emotion garbage:", response.statusText);
        alert("Failed to add emotion garbage");
      }
    } catch (error) {
      console.error("Error adding emotion garbage:", error);
      alert("Error adding emotion garbage");
    }
  };

  const handleReset = () => {
    setIsButtonClicked(false);
    setIsSecondScreen(false);
    setText('');
    setIsTextChanged(false);
    setIsReadyForNextText(false);
    setIsCleanScreen(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    if (text) {
      setIsTextChanged(true);
      setTimeout(() => {
        setIsReadyForNextText(true);
      }, 500);
    }
  };

  if (isCleanScreen) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center pt-20">
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
          onClick={handleReset} // 돌아가기 클릭 시 초기 화면으로 돌아가게 함
        >
          돌아가기
        </button>
      </div>
    );
  }

  if (isSecondScreen) {
    return (
      <div className="relative w-full h-full bg-white flex flex-col items-center justify-center pt-20">
        <div className="relative h-[40px] w-full flex items-center justify-center mt-8">
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
    );
  }

  if (isButtonClicked) {
    return (
      <div className="relative w-full h-full bg-white flex flex-col items-center justify-center pt-20">
        <div className="relative h-[40px] w-full flex items-center justify-center mt-10 mb-8">
          <div
            className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${
              isTextChanged ? 'opacity-0' : 'opacity-100'
            }`}
          >
            당신의 감정과 생각을 <br /> 솔직하게 적어보세요.
          </div>
          <div
            className={`absolute w-full text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight transition-opacity duration-500 ${
              isReadyForNextText ? 'opacity-100' : 'opacity-0'
            }`}
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
          onClick={handleSecondScreenClick}
        >
          종이 뭉치로 만들기
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[800px] flex flex-col justify-center items-center pt-20">
      <Link to="/trashcan_i">
        <img
          className="absolute top-0 right-0 w-[35px] h-auto mt-2 mr-10 cursor-pointer"
          src={process.env.PUBLIC_URL + "/img/sqmenu.png"}
          alt="icon"
        />
      </Link>
      <div className="relative w-full flex flex-col items-center justify-start">
        <img className="w-[248px] h-auto" src={process.env.PUBLIC_URL + "/img/3dicons_edited.png"} alt="3D icon" />

        <div className="mt-5 font-extrabold text-[20px] leading-[100%] font-['Pretendard'] text-center text-black whitespace-nowrap">
          당신을 괴롭히는 <br /> 생각을 버려볼까요?
        </div>

        <button
          className="w-[260px] h-[45px] bg-[#c0e4dc] rounded-full font-['Pretendard'] text-center text-black text-[16px] font-['Pretendard_Variable'] font-medium flex justify-center items-center mt-9"
          onClick={handleButtonClick}
        >
          버리러 가기
        </button>
      </div>
    </div>
  );
};

export default TrashCan;
