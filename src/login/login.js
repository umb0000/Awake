import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import '.././output.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(2);
    const [animateOut, setAnimateOut] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // 이메일 유효성 검사
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = password.length >= 6;

    const handleNext = () => {
        if (
            (currentStep === 2 && isEmailValid) ||
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

    const handleLogin = useCallback(
      async (e) => {
          e.preventDefault();
          setLoading(true);
          setLoginErrorMessage('');
  
          try {
              const response = await fetch('http://112.152.14.116:10211/token', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: new URLSearchParams({ email: email, password: password }),
              });
  
              const data = await response.json();
              if (response.ok) {
                  localStorage.setItem('token', data.access_token);
                  localStorage.setItem('email', data.email);
                  navigate('/main');
              } else if (response.status === 401) {
                  setLoginErrorMessage('아이디 혹은 비밀번호가 맞지 않습니다.');
              } else {
                  setLoginErrorMessage('로그인에 실패했습니다.');
              }
          } catch (error) {
              setLoginErrorMessage('로그인 오류: ' + error.message);
          }
          setLoading(false);
      },
      [email, password, navigate]
  );

    return (
        <div className="w-full h-full mx-auto relative bg-white">
            <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-4">
            {currentStep > 2 && (
                    <div className="w-full flex flex-col items-center justify-start">
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
                    {currentStep === 2 && (
                        <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
                            <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
                                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">이메일</span>
                                <span className="font-['Pretendard'] font-medium text-[#000]">을 입력해주세요.</span>
                            </div>
                            <input
                                type="email"
                                placeholder="email1234@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="self-stretch h-[55px] shrink-0 flex flex-row items-center justify-start py-[17px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#b2b2b2] rounded-[10px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold whitespace-nowrap"
                            />
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
                            <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
                                <span className="font-['Pretendard'] font-bold text-[#ff6b00]">비밀번호</span>
                                <span className="font-['Pretendard'] font-medium text-[#000]">를 입력해주세요.</span>
                            </div>
                            <input
                                type="password"
                                placeholder="6자리 이상 비밀번호"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="self-stretch h-[55px] shrink-0 flex flex-row items-center justify-start py-[17px] px-[20px] bg-[#fff] border-[1px] border-solid border-[#b2b2b2] rounded-[10px] text-[14px] leading-[20px] tracking-[.01em] font-['Pretendard'] font-semibold whitespace-nowrap"
                            />
                        </div>
                    )}
                </div>

                <button
                    type={currentStep === 3 ? 'submit' : 'button'}
                    onClick={handleNext}
                    disabled={
                        (currentStep === 2 && !isEmailValid) ||
                        (currentStep === 3 && !isPasswordValid)
                    }
                    className={`w-full py-3 mt-6 absolute bottom-0 left-0 flex items-center justify-center py-[17px] px-[113px] ${
                        currentStep === 2 && isEmailValid || currentStep === 3 && isPasswordValid ? 'bg-[#ff6d00]' : 'bg-gray-300'
                    } text-white font-semibold z-20`}
                >
                    {currentStep === 3 ? '로그인' : '다음'}
                </button>
            </form>
        </div>
    );
};

export default Login;
