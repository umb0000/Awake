import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../output.css';

const AnxietyBook2 = () => {
  const { id } = useParams();
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    console.log('Received id:', id);
  }, [id]);

  const numericId = Number(id);
  if (isNaN(numericId)) {
    console.error('Invalid id:', id);
    return <div>유효하지 않은 항목입니다.</div>;
  }

  const texts = {
    1: {
      worry: "내가 완벽하지 않으면 사람들은 날 싫어할 거야.",
      reply: "나는 항상 배우고 성장하는 중이야.\n 모든 사람이 완벽할 필요는 없어.",
    },
    // Add other texts here as in the original code
  };

  const text = texts[numericId] || {
    worry: "텍스트를 찾을 수 없습니다.",
    reply: "잘못된 항목입니다.",
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token'); // Get token from local storage
    try {
      const response = await fetch('http://112.152.14.116:10211/angerbook-post-bookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add token in Authorization header
        },
        body: JSON.stringify({ worry: text.worry, reply: text.reply }),
      });
      
      if (response.ok) {
        setSaveMessage("북마크가 성공적으로 추가되었습니다.");
      } else {
        setSaveMessage("북마크 저장에 실패했습니다.");
      }
    } catch (error) {
      console.error('Error saving bookmark:', error);
      setSaveMessage("서버 오류로 인해 북마크를 저장할 수 없습니다.");
    }
  };

  return (
    <div className="relative w-full h-[800px] bg-white overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-start py-10 gap-4">

        {/* First section */}
        <div className="w-[90%] flex items-center justify-center p-4 bg-[#ffcd63] rounded-lg">
          <div className="text-[16px] font-['Pretendard_Variable'] font-bold text-white text-center" style={{ color: '#49454F' }}>
            {text.worry.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Second section */}
        <div className="w-[90%] h-[373px] p-4 bg-white rounded-lg flex items-center justify-center" style={{
          background: "radial-gradient(circle at center, #FFFFFF, #F8FEFF 42%, #A4F7FF 100%)"
        }}>
          <div className="text-center text-[#1d1b20] text-xl font-bold font-['Pretendard'] leading-[29px] tracking-tight whitespace-nowrap">
            {text.reply.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row items-start justify-between gap-4 w-[90%]">
          <button onClick={handleSave} className="w-[45%] p-4 border-2 border-[#70e9f9] rounded-lg hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
            <div className="text-[14px] font-bold text-[#1d1b20] text-center">
              저장하기
            </div>
          </button>
          <a href="/AnxietyBook" className="w-[45%] p-4 border-2 border-[#70e9f9] rounded-lg hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
            <div className="text-[14px] font-bold text-[#1d1b20] text-center">
              다시 선택
            </div>
          </a>
        </div>

        {/* Save message */}
        {saveMessage && (
          <div className="w-[90%] mt-4 p-2 text-center text-sm text-green-600">
            {saveMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnxietyBook2;
