import React, { useState } from 'react';

const Help = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isFormComplete = title.trim() !== '' && content.trim() !== '';

  const handleRegisterClick = () => {
    if (isFormComplete) {
      // Retrieve existing inquiries from localStorage or initialize with an empty array
      const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      
      // Add the new inquiry title to the array
      inquiries.push(title);
      
      // Save the updated array back to localStorage
      localStorage.setItem('inquiries', JSON.stringify(inquiries));
      
      // Navigate to HelpList
      window.location.href = "http://kwawake.duckdns.org/HelpList";
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen bg-white">
      <div className="w-[360px] h-[800px] relative bg-white">
        
        {/* Buttons for 문의하기 and 문의내역확인 */}
        <a href="http://kwawake.duckdns.org/Help" className="w-[54px] h-[27px] left-[73px] top-[71px] absolute text-center text-black text-[15px] font-extrabold font-['Pretendard'] leading-tight tracking-wide">
          문의하기
        </a>
        <a href="http://kwawake.duckdns.org/HelpList" className="w-[83px] h-[27px] left-[223px] top-[71px] absolute text-center text-black text-[15px] font-normal font-['Pretendard'] leading-tight tracking-wide">
          문의내역확인
        </a>

        {/* Header */}
        <div className="w-[360px] h-16 px-1 py-2 left-0 top-0 absolute bg-white justify-start items-center gap-1 inline-flex">
          <div className="grow shrink basis-0 text-center text-[#1d1b20] text-lg font-bold font-['Pretendard'] leading-7">문의하기</div>
        </div>

        {/* Form Fields */}
        <div className="h-[495px] py-2.5 left-[12px] top-[105px] absolute flex-col justify-center items-center gap-[19px] inline-flex">
          {/* Inquiry Title */}
          <div className="w-[336px] h-10 relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="문의 제목"
              className="w-full h-full bg-white rounded-[5px] border border-[#f2f2f2] px-3 text-xs text-[#79747e] font-normal font-['Pretendard'] leading-7"
            />
          </div>
          
          {/* Inquiry Content */}
          <div className="w-[336px] h-[345px] relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="문의 내용"
              className="w-full h-full bg-white rounded-[5px] border border-[#f2f2f2] p-3 text-xs text-[#79747e] font-normal font-['Pretendard'] leading-7 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleRegisterClick}
            className={`w-[336px] h-[52px] rounded-[5px] text-center text-white text-lg font-bold font-['Pretendard'] leading-7 ${
              isFormComplete ? 'bg-[#ff7936]' : 'bg-[#d9d9d9]'
            }`}
            disabled={!isFormComplete}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
