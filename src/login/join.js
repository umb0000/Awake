import React, { useState, useCallback } from 'react';
import './Signup.css';
import '.././output.css';

function Join({ onRegisterSuccess, onSwitchToLogin }) {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [animateOut, setAnimateOut] = useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');

    const isNicknameValid = nickname.length >= 2;
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 6;

    const checkEmailDuplicate = async (email) => {
      try {
          const response = await fetch("http://112.152.14.116:10211/check-email", {
              method: "POST",
              headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
              },
              body: new URLSearchParams({ email }),
          });
  
          const data = await response.json();
          if (response.ok) {
              return data.isDuplicate; // 서버에서 중복 확인 후 true/false 반환한다고 가정
          } else {
              console.error("Error checking email: ", data);
              return true; // 오류 시 중복된 것으로 가정
          }
      } catch (error) {
          console.error("Error checking email: ", error);
          return true; // 오류 시 중복된 것으로 가정
      }
  };

    const handleNext = async () => {
      if (currentStep === 2) {
          // 이메일 유효성 검사 후 중복 확인
          if (!isEmailValid) {
              setEmailErrorMessage("유효한 이메일 주소를 입력하세요.");
              return;
          }
  
          const isDuplicate = await checkEmailDuplicate(email);
          if (isDuplicate) {
              setEmailErrorMessage("중복된 이메일입니다.");
              return;
          } else {
              setEmailErrorMessage("");
          }
      }
  
      if (
          (currentStep === 1 && isNicknameValid) ||
          (currentStep === 2 && isEmailValid && !emailErrorMessage) ||
          (currentStep === 3 && isPasswordValid)
      ) {
          setAnimateOut(true);
          setTimeout(() => {
              setAnimateOut(false);
              setCurrentStep((prevStep) => prevStep + 1);
          }, 500);
      }
  };

    const handleBack = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setAnimateOut(false);
            setCurrentStep((prevStep) => prevStep - 1);
        }, 500);
    };

    

    const handleRegister = useCallback(
      async (e) => {
          e.preventDefault();
          setEmailErrorMessage('');
  
          // 이메일 유효성 검사
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
              setEmailErrorMessage("유효한 이메일 주소를 입력하세요.");
              return;
          }
  
          // 회원가입 요청 보내기
          try {
              const response = await fetch("http://112.152.14.116:10211/register", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams({ nickname, password, email }),
              });
  
              if (!response.ok) {
                  const data = await response.json();
                  if (data.detail === "Email already registered") {
                      setEmailErrorMessage("중복된 이메일입니다.");
                      return;
                  }
                  throw new Error("Registration failed");
              }
  
              // 회원가입 성공 시 호출
              if (typeof onRegisterSuccess === 'function') {
                  onRegisterSuccess();
              }
  
          } catch (error) {
              console.error("Registration error: ", error);
          }
      },
      [nickname, email, password, onRegisterSuccess]
  );
  

    return (
        <div className="w-[360px] h-[800px] mx-auto relative bg-white">
            <form onSubmit={handleRegister}>
                {currentStep > 1 && (
                    <div className="w-[360px] flex flex-col items-center justify-start">
                        <div className="self-stretch h-[45px] flex items-end justify-between py-[10px] px-[24px]">
                            <div className="text-[14px] font-['Roboto'] font-medium text-[#1d1b20]">9:30</div>
                            <img width="46" height="17" src="right iconsI257_737;50758_11372.png" alt="icon" />
                        </div>
                        <div className="self-stretch h-[64px] flex items-center justify-start py-[8px] px-[23px] bg-[#fff]">
                            <button onClick={handleBack}>
                                <img width="12" height="24" src={`${process.env.PUBLIC_URL}/img/back.png`} alt="back" />
                            </button>
                        </div>
                    </div>
                )}

                <div className={`transition-container ${animateOut ? 'slide-out-left' : 'slide-in-right'}`}>
                    {currentStep === 1 && (
                        <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start gap-[20px]">
                            <div className="text-[20px]">
                                <span className="font-['Pretendard'] font-medium text-[#000]">안녕하세요!<br /></span>
                                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">닉네임</span><span className="font-['Pretendard'] font-medium text-[#000]">을 알려주세요.</span>
                            </div>
                            <input
                                type="text"
                                placeholder="닉네임을 입력하세요."
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                className="self-stretch h-[55px] flex items-center py-[17px] px-[20px] bg-[#fff] border border-[#b2b2b2] rounded-[10px] text-[14px] font-['Pretendard'] font-semibold"
                            />
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start gap-[20px]">
                            <div className="text-[20px]">
                                <span className="font-['Pretendard'] font-medium text-[#000]">{nickname} 님!<br /></span>
                                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">이메일</span><span className="font-['Pretendard'] font-medium text-[#000]">을 입력해주세요.</span>
                            </div>
                            <input
                                type="email"
                                placeholder="email1234@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="self-stretch h-[55px] flex items-center py-[17px] px-[20px] bg-[#fff] border border-[#b2b2b2] rounded-[10px] text-[14px] font-['Pretendard'] font-semibold"
                            />
                            {emailErrorMessage && <div className="text-red-500">{emailErrorMessage}</div>}
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start gap-[20px]">
                            <div className="text-[20px]">
                                <span className="font-['Pretendard'] font-medium text-[#000]">{nickname} 님!<br /></span>
                                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">사용할 비밀번호</span><span className="font-['Pretendard'] font-medium text-[#000]">를 입력해주세요.</span>
                            </div>
                            <input
                                type="password"
                                placeholder="6자리 이상 비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="self-stretch h-[55px] flex items-center py-[17px] px-[20px] bg-[#fff] border border-[#b2b2b2] rounded-[10px] text-[14px] font-['Pretendard'] font-semibold"
                            />
                        </div>
                    )}

                </div>

                <button
                    type={currentStep === 3 ? "submit" : "button"}
                    onClick={handleNext}
                    disabled={
                        (currentStep === 1 && !isNicknameValid) ||
                        (currentStep === 2 && !isEmailValid) ||
                        (currentStep === 3 && !isPasswordValid)
                    }
                    className={`w-full py-3 mt-6 absolute bottom-0 left-0 flex items-center justify-center py-[17px] px-[113px] ${
                        (currentStep === 1 && isNicknameValid) ||
                        (currentStep === 2 && isEmailValid) ||
                        (currentStep === 3 && isPasswordValid) 

                            ? 'bg-[#ff6d00]'
                            : 'bg-gray-300'
                    } text-white font-semibold z-20`}
                >
                    {currentStep === 3 ? "가입하고 시작하기" : "다음"}
                </button>
            </form>
        </div>
    );
}

export default Join;
