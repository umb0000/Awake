import React, { useState, useEffect } from 'react';

const Diary = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태
  const [isDiaryVisible, setIsDiaryVisible] = useState(false); // 일기 화면 표시 상태
  const [displayedDiaryText, setDisplayedDiaryText] = useState(''); // 일기 텍스트 출력 상태

  const diaryText = "오늘 아침에는 하늘이 흐렸지만 점심 이후에는 맑아졌다냥. ☀️ 리나는 평소보다 일찍 일어나서 아침 수영을 갔다. 🏊‍♀️ 리나는 정말 부지런한 것 같아! 🥹..."; // 일기 내용

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsDiaryVisible(true); // 로딩 후 일기 화면 표시
    }, 2000); // 로딩 시간 (2초)
  };

  useEffect(() => {
    if (isDiaryVisible) {
      // 일기 텍스트 타이핑 효과
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        setDisplayedDiaryText((prevText) => prevText + diaryText[currentIndex]);
        currentIndex++;
        if (currentIndex === diaryText.length) {
          clearInterval(typingInterval); // 모든 텍스트 출력 완료 후 타이머 정리
        }
      }, 50); // 각 글자가 0.05초마다 출력

      return () => clearInterval(typingInterval);
    }
  }, [isDiaryVisible]);

  return (
    <div className="w-[340px] relative h-[557px]">
      {/* 항상 표시되는 상단 "매일 냥냥 일기" 박스 */}
      <div className="w-[340px] h-[63px] px-[19px] py-2.5 rounded-[10px] flex-col bg-white justify-center items-center gap-2.5 inline-flex">
        <div className="w-[302.91px] flex justify-start items-center gap-[5px]">
          <div className="w-[23.25px] h-[23.25px] relative">
            <img className="w-[19.38px] h-[19.50px] absolute left-[1.94px]" src={`${process.env.PUBLIC_URL}/img/diary_icon.png`} alt="icon" />
          </div>
          <div className="w-[253px] text-black text-sm font-bold font-['Pretendard'] leading-normal tracking-wide">매일 냥냥 일기</div>
          <img className="w-2.5 h-[16.15px] origin-top-left rotate-90 mt-2" src={`${process.env.PUBLIC_URL}/img/right.png`} alt="right arrow" />
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
               <div className="text-center text-white text-xs font-bold font-['Pretendard'] leading-3 tracking-wide">10월 16일 수요일</div>
             </div>
             <div className="w-[264px] text-[#49454f] text-[13px] font-normal font-['Pretendard'] leading-tight tracking-wide">오늘 아침에는 하늘이 흐렸지만 점심 이후에는 맑아졌다냥. ☀️ 리나는 평소보다 일찍 일어나서 아침 수영을 갔다. 🏊‍♀️ 리나는 정말 부지런한 것 같아! 🥹<br/>아침부터 교수님의 메일을 확인했고 영화의 이해 과제 제출도 잊지 않았다냥! 🖥️ 점심에 비타민도 챙겼다. 💊 날씨가 점점 쌀쌀해지고 있지만, 리나는 몸을 잘 챙기고 있어 다행이야! ❤️‍🩹 <br/>저녁에는 토익 문제풀이 1회를 해냈다! 🤓 웨이는 리나가 최선을 다하고 있는 것 같아냥 🥰 자기 전 스트레칭까지 완료했다. 🧘‍♀️ 오늘은 정말 알찬 하루였어 😸</div>
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