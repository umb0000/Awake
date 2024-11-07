import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // 별도의 CSS 파일로 스타일 분리
import '.././output.css';

function Login({ setTocken }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentStep, setCurrentStep] = useState(2);
    const [animateOut, setAnimateOut] = useState(false);

    const [isRegister, setIsRegister] = useState(false);
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const navigate = useNavigate();
    
  
    const isEmailValid = email.includes('@','.');
    const isPasswordValid = password.length >= 6;
  
    const handleNext = () => {
      if (
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

    const handleLogin = useCallback(
        async (e) => {
            e.preventDefault();
            setLoading(true);
            setLoginErrorMessage('');

            const email = e.target.loginEmail.value;
            const password = e.target.loginPassword.value;

            try {
                const response = await fetch('http://112.152.14.116:10211/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({ email, password }),
                });

                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('token', data.access_token);
                    localStorage.setItem('email', data.email);
                    setToken(data.access_token);
                    setResult('Login successful: ' + JSON.stringify(data, null, 2));
                    navigate('/main'); // 로그인 성공 시 메인 페이지로 이동
                } else if (response.status === 401) {
                    setLoginErrorMessage('아이디 혹은 비밀번호가 맞지 않습니다.');
                } else {
                    setResult('Login failed: ' + JSON.stringify(data, null, 2));
                }
            } catch (error) {
                setResult('Login error: ' + error.message);
            }
            setLoading(false);
        },
        [navigate, setToken]
    );

    const handleRegisterSuccess = useCallback(() => {
        setIsRegister(false);
    }, []);

    // 비밀번호 찾기 페이지로 이동
    const handleFindPassword = () => {
        navigate('/find-account'); // FindAccount 페이지로 이동
    };
  
    return (
        
      <div className="w-[360px] h-[800px] mx-auto relative bg-white">
        <form
             onSubmit={handleLogin}
            className="flex flex-col items-center justify-center gap-4"
        >
  
        <div className={`transition-container ${animateOut ? 'slide-out-left' : 'slide-in-right'}`}>
  
          {currentStep === 2 && (
            <div className="absolute left-[27px] top-[209px] w-[307px] flex flex-col items-start justify-start gap-[20px]">
            <div className="text-[20px] leading-[30px] tracking-[.01em] whitespace-nowrap">
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
            <span className="font-['Pretendard'] font-bold text-[#ff6b00]">비밀번호</span><span className="font-['Pretendard'] font-medium text-[#000]">를 입력해주세요.</span>
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
        </div>
  
        <button
                    type={currentStep === 3 ? "submit" : "button"}
                    onClick={handleNext}
                    disabled={
                        (currentStep === 2 && !isEmailValid) ||
                        (currentStep === 3 && !isPasswordValid)
                    }
                    className={`w-full py-3 mt-6 absolute bottom-0 left-0 flex items-center justify-center py-[17px] px-[113px] ${
                        (currentStep === 2) ||
                        (currentStep === 3) 
                            ? 'bg-[#ff6d00]'
                            : 'bg-gray-300'
                    } text-white font-semibold z-20`}
                >
                    {currentStep === 3 ? "로그인" : "다음"}
                </button>
</form>
      </div>
    );
  }

export default Login;
