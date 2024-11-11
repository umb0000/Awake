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
    <div className="w-full h-screen max-w-md mx-auto bg-white relative">
      {/* Header */}
      <div className="w-full h-16 flex items-center justify-center bg-white shadow-md absolute top-0 left-0">
        <div className="text-[#1d1b20] text-lg font-bold font-['Pretendard']">문의내역확인</div>
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
  );
};

export default HelpList;
