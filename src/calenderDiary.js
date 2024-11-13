import React, { useState, useEffect } from 'react';
import "./output.css";

const Diary = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [isDiaryVisible, setIsDiaryVisible] = useState(false); // 일기 화면 표시 상태
  const [displayedDiaryText, setDisplayedDiaryText] = useState(''); // 일기 텍스트 출력 상태

  // 오늘 날짜 자동 생성
  const today = new Date().toISOString().split("T")[0];

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      // 서버에 일기 생성 요청 보내기
      const response = await fetch("http://112.152.14.116:10211/diary-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ time: today })
      });

      if (!response.ok) {
        throw new Error("일기 생성 실패");
      }

      const data = await response.json();
      console.log(data.diary_text);
      console.log(data.diary_id);
      setDisplayedDiaryText(data.diary_text); // 서버로부터 받은 일기 텍스트 설정
      setIsDiaryVisible(true); // 일기 화면 표시
    } catch (error) {
      console.error("일기 생성 오류:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isDiaryVisible) {
      // 일기 텍스트 타이핑 효과
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedDiaryText((prevText) => prevText + setDisplayedDiaryText[currentIndex]);
        currentIndex++;
        if (currentIndex === setDisplayedDiaryText.length -2) {
          clearInterval(typingInterval); // 모든 텍스트 출력 완료 후 타이머 정리
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isDiaryVisible, displayedDiaryText]);

  return (
    <div className="w-[340px] relative h-[557px]">
      {/* 항상 표시되는 상단 "매일 냥냥 일기" 박스 */}
      <div className="w-[340px] h-[63px] px-[19px] rounded-[10px] flex-col bg-white justify-center items-center gap-2.5 inline-flex">
        <div className="w-[302.91px] flex justify-start items-center gap-[5px]">
          <div className="w-[23.25px] h-[23.25px] relative">
            <img className="w-[19.38px] h-[19.50px] absolute left-[1.94px]" src={`${process.env.PUBLIC_URL}/img/diary_icon.png`} alt="icon" />
          </div>
          <div className="w-[253px] text-black text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">매일 냥냥 일기</div>
        </div>
      </div>

      {/* 초기 화면 또는 일기 화면 아래 표시 */}
      <div className="w-[340px] relative">
        {/* 초기 화면 */}
        {!isLoading && !isDiaryVisible && (
          <div className="w-[340px] h-full relative">
            <div className="w-[340px] h-[377px] left-0 top-0 absolute bg-gradient-to-t from-[#e8f2ff] to-white rounded-[10px]" />
            <div className="w-[190px] h-[54px] left-[74px] top-[276px] absolute" onClick={handleButtonClick}>
              <div className="w-[190px] h-[54px] left-0 top-0 absolute bg-[#6093fd] rounded-[50px]" />
              <div className="left-[26px] top-[21px] absolute text-center text-white text-sm font-extrabold font-['Pretendard'] leading-3 tracking-wide cursor-pointer">
                오늘의 일기 확인하기 ⚡
              </div>
            </div>
            <div className="left-[65px] top-[224px] absolute text-center text-[#1d1b20] text-xs font-light font-['Pretendard'] leading-3 tracking-wide">
              고양이 웨이는 리나 님의 하루를 함께했어요.<br/>웨이가 쓴 일기를 지금 확인해보세요.
            </div>
            <div className="left-[66px] top-[195px] absolute text-black text-xl font-bold font-['Pretendard'] leading-normal tracking-wide">오늘의 일기를 써 드릴게요</div>
            <img className="w-[100px] h-[100px] left-[119px] top-[94px] absolute" src={process.env.PUBLIC_URL + "/img/blue_cat.png"} alt="cat" />
          </div>
        )}

        {/* 로딩 중 화면 */}
        {isLoading && (
          <div className="flex items-center justify-center h-[377px]">
            <div className="loader"></div> {/* 로딩 애니메이션 */}
          </div>
        )}

        {/* 일기 내용 화면 */}
        {!isLoading && isDiaryVisible && (
         <div className="w-[340px] h-[494px] bg-gradient-to-t from-[#e8f2ff] to-white rounded-[10px] flex-col justify-start items-center gap-[7px] inline-flex">
         <div className="h-[463px] flex-col justify-start items-center gap-px flex">
           <div className="self-stretch h-[291px] px-4 py-[11px] bg-white rounded-[10px] border border-[#d9d9d9] flex-col justify-start items-start gap-1.5 flex">
             <div className="w-[119px] h-[21px] px-[15px] py-[7px] bg-[#6093fd] rounded-[50px] justify-center items-center gap-2.5 inline-flex">
               <div className="text-center text-white text-xs font-bold font-['Pretendard'] leading-3 tracking-wide">{today}</div>
             </div>
             <div className="w-[264px] text-[#49454f] text-[13px] font-normal font-['Pretendard'] leading-tight tracking-wide">{displayedDiaryText}</div>
           </div>
           <img className="w-[100px] h-[100px] mt-3" src={process.env.PUBLIC_URL + "/img/blue_cat.png"} />
           <div className="w-[202px] h-[70px] relative">
             <div className="left-0 top-0 absolute text-[#3b60ad] text-xl font-normal font-['Pretendard'] leading-tight tracking-wide">오늘 할 일 / 루틴 달성률</div>
             <div className="w-[115px] h-[38px] left-[46px] top-[22px] absolute text-[#3b60ad] text-[50px] font-black font-['Pretendard'] leading-tight tracking-wide">72%</div>
           </div>
         </div>
       </div>
        )}
      </div>
    </div>
  );
};

export default Diary;
