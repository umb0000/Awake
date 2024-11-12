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
  const [trashItems, setTrashItems] = useState([]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()} / ${('0' + (date.getMonth() + 1)).slice(-2)} / ${('0' + date.getDate()).slice(-2)}`;
    setCurrentDate(formattedDate);

    fetchTrashItems(); // Fetch existing items on mount
  }, []);

  const fetchTrashItems = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://your-backend-url/emobin-get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setTrashItems(data.trash_items);
    } catch (error) {
      console.error("Failed to fetch trash items:", error);
    }
  };

  const addTrashItem = async () => {
    const token = localStorage.getItem('token');
    try {
      await fetch('http://your-backend-url/emobin-add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(text),
      });
      setText(''); // Clear the input
      fetchTrashItems(); // Refresh the list
    } catch (error) {
      console.error("Failed to add trash item:", error);
    }
  };

  const deleteAllTrash = async () => {
    const token = localStorage.getItem('token');
    try {
      await fetch('http://your-backend-url/emobin-dump', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTrashItems([]); // Clear local list
    } catch (error) {
      console.error("Failed to delete all trash items:", error);
    }
  };

  const handleButtonClick = () => setIsButtonClicked(true);
  const handleSecondScreenClick = () => setIsSecondScreen(true);
  const handleCleanScreenClick = () => {
    deleteAllTrash();
    setIsCleanScreen(true);
  };

  const handleReset = () => {
    setIsButtonClicked(false);
    setIsSecondScreen(false);
    setText('');
    setIsTextChanged(false);
    setIsReadyForNextText(false);
    setIsCleanScreen(false);
  };

  const handleChange = (e) => setText(e.target.value);
  const handleBlur = () => {
    if (text) {
      setIsTextChanged(true);
      setTimeout(() => setIsReadyForNextText(true), 500);
    }
  };

  if (isCleanScreen) {
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
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
          onClick={handleReset}
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[800px] flex flex-col justify-start items-center pt-20">
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
          onClick={() => {
            handleButtonClick();
            addTrashItem();
          }}
        >
          버리러 가기
        </button>
      </div>
    </div>
  );
};

export default TrashCan;
