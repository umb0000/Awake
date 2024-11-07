import React, { useState } from 'react';
import './Signup.css'; // 별도의 CSS 파일로 스타일 분리
import '.././output.css';

function Join() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [animateOut, setAnimateOut] = useState(false);
  
    const isNicknameValid = nickname.length >= 2;
    const isEmailValid = email.includes('@','.');
    const isPasswordValid = password.length >= 6;
  
    const handleNext = () => {
      if ((currentStep === 1 && isNicknameValid) || 
          (currentStep === 2 && isEmailValid) || 
          (currentStep === 3 && isPasswordValid)) {
        setAnimateOut(true);
        setTimeout(() => {
          setAnimateOut(false);
          setCurrentStep((prevStep) => prevStep + 1);
        }, 500); // 애니메이션 시간과 일치시킵니다.
      }
    };
  
    const handleBack = () => {
      setAnimateOut(true);
      setTimeout(() => {
        setAnimateOut(false);
        setCurrentStep((prevStep) => prevStep - 1);
      }, 500);
    };
  
    return (
        
      <div className="w-[360px] h-[800px] mx-auto relative bg-white">


        {currentStep > 1 && (

<div className="w-[360px] flex flex-col items-center justify-start">
<div className="self-stretch h-[45px] shrink-0 flex flex-row items-end justify-between py-[10px] px-[24px]">
  <div className="text-[14px] leading-[20px] tracking-[.01em] font-['Roboto'] font-medium text-[#1d1b20] whitespace-nowrap">9:30</div>
  <img width="46" height="17" src="right iconsI257_737;50758_11372.png"></img>
</div>
<div className="self-stretch h-[64px] shrink-0 flex flex-row items-center justify-start py-[8px] px-[23px] bg-[#fff]">
  <button onClick={handleBack}><img width="12" height="24"  src={process.env.PUBLIC_URL + "/img/back.png"}></img></button>
</div>

</div>
          
        )}
  
        <div className={`transition-container ${animateOut ? 'slide-out-left' : 'slide-in-right'}`}>
          {currentStep === 1 && (
             <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
                <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
                <span className="font-['Pretendard'] font-medium text-[#000]">안녕하세요!<br/></span>
                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">닉네임</span><span className="font-['Pretendard'] font-medium text-[#000]">을 알려주세요.</span>
                </div>
              <input
                type="text"
                placeholder="닉네임을 입력하세요."
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className=" self-stretch h-[55px] shrink-0 flex flex-row items-center justify-start py-[17px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#b2b2b2] rounded-[10px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold  whitespace-nowrap"
              />
            </div>
          )}
  
          {currentStep === 2 && (
            <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
            <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
            <span className="font-['Pretendard'] font-medium text-[#000]">{nickname} 님!<br/></span>
            <span className="font-['Pretendard'] font-bold text-[#ff6b00]">이메일</span><span className="font-['Pretendard'] font-medium text-[#000]">을 입력해주세요.</span>
            </div>
          <input
            type="email"
            placeholder="email1234@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" self-stretch h-[55px] shrink-0 flex flex-row items-center justify-start py-[17px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#b2b2b2] rounded-[10px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold  whitespace-nowrap"
          />
        </div>

          )}
  
          {currentStep === 3 && (
            <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
            <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
            <span className="font-['Pretendard'] font-medium text-[#000]">{nickname} 님!<br/></span>
            <span className="font-['Pretendard'] font-bold text-[#ff6b00]">사용할 비밀번호</span><span className="font-['Pretendard'] font-medium text-[#000]">를 입력해주세요.</span>
            </div>
          <input
            type="password"
            placeholder="6자리 이상 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" self-stretch h-[55px] shrink-0 flex flex-row items-center justify-start py-[17px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#b2b2b2] rounded-[10px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold  whitespace-nowrap"
          />
        </div>
            
          )}

        {currentStep === 4 && (
            <div className="w-[360px] h-[800px] relative bg-white">
            <div className="w-full h-[60px]  flex-col justify-center items-center gap-5 inline-flex">
            <div className="text-center mt-[600px] text-black text-xl font-medium font-['Pretendard'] font-bold leading-[30px] tracking-tight">어웨이크! <br/>깨어날 준비가 되었습니다.</div>
          </div>
          </div>
            
          )}
        </div>
  
        <button
  onClick={handleNext}
  disabled={
    (currentStep === 1 && !isNicknameValid) ||
    (currentStep === 2 && !isEmailValid) ||
    (currentStep === 3 && !isPasswordValid)
  }
  className={`w-full py-3 mt-6 absolute bottom-0 left-0 flex flex-row items-center justify-center py-[17px] px-[113px] ${((currentStep === 1 && isNicknameValid) || (currentStep === 2 && isEmailValid) || (currentStep === 3 && isPasswordValid) || (currentStep === 4)) ? 'bg-[#ff6d00]' : 'bg-gray-300'} 
  text-white font-semibold z-20`}
>


<div className="w-[134px] text-[16px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold text-[#fff] text-center">다음</div>
</button>
      </div>
    );
  }

export default Join;
