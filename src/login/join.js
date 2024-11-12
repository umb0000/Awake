import React, { useState, useCallback } from 'react';
import './Signup.css';
import '.././output.css';
import { useNavigate } from 'react-router-dom';

function Join({ onRegisterSuccess, onSwitchToLogin }) {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [animateOut, setAnimateOut] = useState(false);

    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

    const isNicknameValid = nickname.length >= 1;
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 6;

    const navigate = useNavigate();

    const handleNextClick = () => {
        if (currentStep === 7) {
            navigate('/unlogined');
        } else {
            handleNext();
        }
    };

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
                setIsEmailDuplicate(data.isDuplicate);
                return data.isDuplicate; // 서버에서 중복 확인 후 true/false 반환한다고 가정
            } else {
                console.error("Error checking email: ", data);
                setIsEmailDuplicate(true);
                return true; // 오류 시 중복된 것으로 가정
            }
        } catch (error) {
            console.error("Error checking email: ", error);
            setIsEmailDuplicate(true);
            return true; // 오류 시 중복된 것으로 가정
        }
    };

    const handleNext = async () => {
        if (currentStep === 2) {
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
            (currentStep === 2 && isEmailValid && !isEmailDuplicate) ||
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

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setEmailErrorMessage("유효한 이메일 주소를 입력하세요.");
                return;
            }

            if (isEmailDuplicate) {
                setEmailErrorMessage("중복된 이메일입니다.");
                return;
            }

            try {
                const response = await fetch("http://112.152.14.116:10211/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({ username: nickname, password, email }),
                });

                if (!response.ok) {
                    const data = await response.json();
                    if (data.detail === "Email already registered") {
                        setEmailErrorMessage("중복된 이메일입니다.");
                        return;
                    }
                    throw new Error("Registration failed");
                }

                if (typeof onRegisterSuccess === 'function') {
                    onRegisterSuccess();
                }

            } catch (error) {
                console.error("Registration error: ", error);
            }
        },
        [nickname, email, password, onRegisterSuccess, isEmailDuplicate]
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
                                <img width="12" height="24" src={process.env.PUBLIC_URL + "/img/back.png"} alt="back" />
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
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setIsEmailDuplicate(false);
                                    setEmailErrorMessage('');
                                }}
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

{currentStep === 4 && (
            <div className="w-[360px] h-[800px] relative bg-white">
            <div className="w-full h-[60px]  flex-col justify-center items-center gap-5 inline-flex">
            <div className="text-center mt-[600px] text-black text-xl font-medium font-['Pretendard'] font-bold leading-[30px] tracking-tight">어웨이크! <br/>깨어날 준비가 되었습니다.</div>
          </div>
          </div>
            
          )}
          {currentStep === 5 && (
            <div className="w-[360px] h-screen bg-white relative pt-20">
            <div className="absolute top-20 left-6 flex gap-2">
        <div className="w-[11px] h-[11px] bg-[#ff6d00] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
        <div className="w-[11px] h-[11px] bg-[#d9d9d9] rounded-full" />
      </div>

      <div className="flex flex-col justify-start items-start gap-5 px-6 pt-16">
        <div>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">먼저</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight"> 해야 할 일을 <br/></span>
          <span className="text-[#ff6d00] text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight">먼저</span>
          <span className="text-black text-[23px] font-bold font-['Pretendard'] leading-[30px] tracking-tight"> 하도록 도와줄게요</span>
        </div>

        <img className="w-[143px] h-[46px]" src="/img/levelexplain.png" alt="Eisenhower Matrix Example" />

        <div>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">아이젠하워 매트릭스 (The Eisenhower Matrix) 를 아세요?<br/></span>
          <span className="text-[#ff6d00] text-xs font-bold font-['Pretendard'] leading-[18px] tracking-tight">긴급성</span>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">과 </span>
          <span className="text-[#ff6d00] text-xs font-bold font-['Pretendard'] leading-[18px] tracking-tight">중요도</span>
          <span className="text-black text-xs font-medium font-['Pretendard'] leading-[18px] tracking-tight">에 따라 업무를 체계적으로 정리하는 방법으로, <br/>가장 중요한 업무의 우선순위를 효과적으로 지정할 수 있습니다.</span>
        </div>

        <img className="self-stretch h-[311px]" src="/img/matrix.png" alt="Matrix Diagram" />
      </div>
          </div>
            
          )}
                </div>

                <button
            type={currentStep === 3 ? "submit" : "button"}
            onClick={handleNextClick}
            disabled={
                (currentStep === 1 && !isNicknameValid) ||
                (currentStep === 2 && !isEmailValid) ||
                (currentStep === 3 && !isPasswordValid)
            }
            className={`w-full py-3 mt-6 absolute bottom-0 left-0 flex items-center justify-center py-[17px] px-[113px] ${
                (currentStep === 1 && isNicknameValid) ||
                (currentStep === 2 && isEmailValid && !isEmailDuplicate) ||
                (currentStep === 3 && isPasswordValid) ||
                (currentStep >= 4)
                    ? 'bg-[#ff6d00]'
                    : 'bg-gray-300'
            } text-white font-semibold z-20`}
        >
            {currentStep === 4 ? "어웨이크 시작하기" : "다음"}
        </button>
            </form>
        </div>
    );
}

export default Join;
