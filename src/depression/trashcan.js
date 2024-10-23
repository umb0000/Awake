import React, { useState } from 'react';
import '../output.css';

const TrashCan = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [text, setText] = useState(''); // 입력된 텍스트 관리
  const [isEditing, setIsEditing] = useState(false); // 편집 상태 관리

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  const handleImageClick = () => {
    setIsEditing(true); // 이미지 클릭 시 편집 상태로 전환
  };

  const handleChange = (e) => {
    setText(e.target.value); // 입력된 텍스트 업데이트
  };

  if (isButtonClicked) {
    return (
      <div className="w-[360px] h-[800px] bg-white flex-col justify-center items-start gap-3 inline-flex">
        <div className="self-stretch grow shrink basis-0 px-2.5 flex-col justify-start items-center gap-12 inline-flex">
          <div className="w-[360px] h-[590px] px-2.5 flex-col justify-end items-center gap-6 flex">
            <div className="w-[358px] h-[487px] relative">
              <div className="w-[266px] h-[35px] p-1.5 left-[46px] top-[452px] absolute bg-[#c0e4dc] rounded-[15px] flex-col justify-center items-center gap-1.5 inline-flex">
                <div className="w-[254px] h-4 text-center text-black text-[11px] font-medium font-['Pretendard'] leading-normal tracking-wide">종이 뭉치로 만들기</div>
              </div>
              <div className="left-[87px] top-[369px] absolute text-center text-black text-xl font-extrabold font-['Pretendard'] leading-tight tracking-tight">
                당신의 감정과 생각을 <br /> 솔직하게 적어보세요.
              </div>
              <img 
                className="w-[358px] h-[358px] left-0 top-0 absolute cursor-pointer" 
                src={process.env.PUBLIC_URL + "/img/memo.png"} 
                alt="placeholder" 
                onClick={handleImageClick} // 이미지 클릭 이벤트 추가
              />
              <div className="w-[289px] h-[292px] p-2.5 left-[34px] top-[33px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch h-[245px] justify-start items-start gap-2.5 inline-flex">
                  {isEditing ? (
                    <textarea
                      className="w-[269px] h-full text-black text-[13px] font-medium font-['Pretendard'] leading-tight tracking-tight outline-none bg-transparent border-none placeholder-gray-500"
                      value={text}
                      onChange={handleChange}
                      placeholder="내용을 입력하세요..."
                      autoFocus
                    />
                  ) : (
                    <div className="w-[269px] text-black text-[13px] font-medium font-['Pretendard'] leading-tight tracking-tight cursor-pointer" onClick={handleImageClick}>
                      {text || "내용을 입력하세요..."}
                    </div>
                  )}
                </div>
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 text-right text-black text-[13px] font-normal font-['Pretendard'] leading-tight tracking-tight">2024 / 10 / 17</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[800px] flex items-start justify-center">
      <div className="w-full max-w-[400px] h-auto flex flex-col items-center justify-start">
        <div className="w-full h-auto flex flex-col items-start justify-center ">
          <img className="w-[15%] h-auto" src={process.env.PUBLIC_URL + "/img/sqmenu.png"} alt="icon" />
        </div>
        <div className="flex flex-col items-center justify-start  w-[100%] h-auto">
          <img style={{ marginTop: '30%' }} className="w-[60%] h-auto" src={process.env.PUBLIC_URL + "/img/3dicons_edited.png"} alt="3D icon" />

          <div style={{ marginTop: '5%', fontWeight: '800', fontSize: '6vw' }} className="w-[80%] text-[20px] leading-[100%] tracking-[.01em] font-['Pretendard_Variable'] font-extrabold text-[#000] text-center whitespace-nowrap ">
            당신을 괴롭히는 <br /> 생각을 버려볼까요?
          </div>

          {/* 수정된 버튼 스타일 */}
          <div
            style={{ backgroundColor: '#c0e4dc', marginTop: '10%', width: '50%', padding: '3% 0' }}
            className="w-[80%] flex items-center justify-center rounded-[15px] "
            onClick={handleButtonClick} // 버튼 클릭 이벤트 핸들러 추가
          >
            <div style={{ fontSize: '5vw' }} className="self-stretch text-center leading-[5vw] tracking-[.01em] font-['Pretendard_Variable'] font-medium text-[#000] ">
              버리러 가기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrashCan;
