import React, { useEffect, useState } from 'react';

const HelpList = () => {
  const [inquiries, setInquiries] = useState([]);

  // Default inquiries to display below dynamically added ones
  const defaultInquiries = [
    "달성률을 다 채운 것 같은데 색이 안변해요",
    "앱이 자꾸 꺼져요",
    "고양이 색깔 업데이트 해주세요"
  ];

  useEffect(() => {
    // Load inquiries from localStorage and place them above default inquiries
    const savedInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    setInquiries([...savedInquiries, ...defaultInquiries]);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center min-h-screen bg-white pt-20">
    <div className="w-[360px] h-[800px] relative bg-white">
      
      {/* Buttons for 문의하기 and 문의내역확인 */}
      <a href="http://kwawake.duckdns.org/Help" className="w-[54px] h-[27px] left-[73px] top-[71px] absolute text-center text-black text-[15px] font-normal font-['Pretendard'] leading-tight tracking-wide">
        문의하기
      </a>
      <a href="http://kwawake.duckdns.org/HelpList" className="w-[83px] h-[27px] left-[223px] top-[71px] absolute text-center text-black text-[15px] font-extrabold font-['Pretendard'] leading-tight tracking-wide">
        문의내역확인
      </a>

      {/* Header */}
      <div className="w-[360px] h-16 px-1 py-2 left-0 top-0 absolute bg-white justify-start items-center gap-1 inline-flex">
        <div className="grow shrink basis-0 text-center text-[#1d1b20] text-lg font-bold font-['Pretendard'] leading-7">문의 내역 확인</div>
      </div>

      {/* Inquiry List */}
      <div className="relative top-24 p-4 space-y-2">
        {/* Display inquiries with new ones on top */}
        {inquiries.map((title, index) => (
          <div key={index} className="w-full h-auto bg-white border border-[#d9d9d9] rounded-md flex items-center px-4 py-3">
            <div className="text-black text-[13px] font-bold font-['Pretendard'] leading-normal tracking-wide">
              {title}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HelpList;
