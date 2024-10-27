import { useState, useEffect } from 'react';
import '../output.css';

const ConflictBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userResponses, setUserResponses] = useState([]); 
  const [finalMessage, setFinalMessage] = useState('');
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allResponses, setAllResponses] = useState([
    { // 예시 답변 1
      finalMessage: "괜찮아, 네가 한 노력은 모두 의미가 있어.",
      userResponses: ["네가 해낸 건 별거 아니야, 다들 쉽게 할 수 있는 거야."]
    },
    { // 예시 답변 2
      finalMessage: "넌 충분히 잘하고 있어, 그러니 자신감을 가져.",
      userResponses: ["왜 그렇게 게으른 거야? 뭔가 제대로 해낸 게 있어?"]
    },
  ]);

  const initialMessages = [
    { sender: '웨이', text: `안녕하세요! 저는 웨이예요. 😊 모욕을 슬기롭게 대처하는 방법을 알려드리기 위해 왔어요!` },
    { sender: '웨이', text: `효과적인 대처를 돕기 위해 몇 가지 질문을 할게요.` },
    { sender: '웨이', text: `답변은 자동으로 저장됩니다. 📝` },
    { sender: '웨이', text: `첫 번째 질문입니다!\n당신의 기분을 상하게 한 말은 무엇인가요?` },
  ];

  const questions = [
    "두 번째 질문이에요.\n그 말이 왜 당신을 속상하게 만들었나요?",
    "마지막 질문입니다.\n상대가 그 말을 한 이유는 무엇일까요?",
  ];

  useEffect(() => {
    if (isChatOpen) {
      setMessages([]);
      setUserResponses([]);
      setCurrentQuestionIndex(0);

      initialMessages.forEach((message, index) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, message]);
        }, index * 1500);
      });
    }
  }, [isChatOpen]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length + 1) {
      const summaryMessage = {
        sender: '웨이',
        text: `요약해 볼게요:\n\n` +
              `- 당신을 기분 상하게 한 말: ${userResponses[0] || ''}\n` +
              `- 속상하게 한 포인트: ${userResponses[1] || ''}\n` +
              `- 상대방의 말의 의도: ${userResponses[2] || ''}\n\n` +
              "요약을 읽고 스스로에게 해 주고 싶은 말은 무엇인가요?"
      };
      setMessages((prev) => [...prev, summaryMessage]);
    }
  }, [currentQuestionIndex, userResponses]);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages((prev) => [...prev, { sender: '사용자', text: userMessage }]);
      setUserResponses((prev) => [...prev, userMessage]); 
      setUserMessage('');
      setIsTyping(true);

      setTimeout(() => {
        const nextMessage = getNextBotMessage();
        if (nextMessage) {
          setMessages((prev) => [...prev, nextMessage]);
        }
        setIsTyping(false);
      }, 2000);
    }
  };

  const getNextBotMessage = () => {
    if (currentQuestionIndex < questions.length) {
      const question = questions[currentQuestionIndex];
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return { sender: '웨이', text: question };
    } else if (currentQuestionIndex === questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return null;
    }
    return null;
  };

  const handleFinalMessage = () => {
    setFinalMessage(userMessage);
    setMessages((prev) => [...prev, { sender: '사용자', text: userMessage }]);
    setUserMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: '웨이', text: "기록을 저장할게요! 고생하셨어요 😊" }]);
      setIsTyping(false);
      setTimeout(() => {
        setAllResponses((prev) => [
          {
            finalMessage: userMessage,
            userResponses: [...userResponses],
          },
          ...prev,
        ]);
        setShowSavePopup(true);
      }, 3000);
    }, 2000);
  };

  const handleReturnToMain = () => {
    setShowSavePopup(false);
    setIsChatOpen(false);
    setFinalMessage('');
  };

  const renderTimeline = () => (
    <div className="relative w-full h-[800px] bg-gray-100 overflow-y-scroll p-4">
      <div className="sticky top-0 z-10 bg-white py-3 shadow-md rounded-tl-[20px] rounded-tr-[20px]">
        <h1 className="text-center text-xl font-semibold text-gray-800">내 감정 기록</h1>
      </div>

      <div className="space-y-6 mt-6">
        {allResponses.map((response, index) => (
          <div key={index} className="flex flex-col items-start space-y-1 bg-white p-4 rounded-lg shadow-md relative">
            {index !== allResponses.length - 1 && (
              <div className="absolute left-4 top-full h-6 w-1 bg-gray-300"></div>
            )}
            <h2 className="text-base font-semibold text-gray-800">{response.finalMessage}</h2>
            <p className="text-xs text-gray-500 mt-1">
              {response.userResponses[0] || ''}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-[20px] right-[20px] bg-[#ff9800] text-white p-4 rounded-full shadow-lg hover:bg-[#ff6d00] transition duration-200"
      >
        ✒️
      </button>
    </div>
  );

  const renderChat = () => (
    <div className="w-full h-[800px] bg-white flex flex-col">
      <div className="w-full h-[50px] bg-[#f7f2fa] flex items-center justify-between px-4">
        <span className="text-lg font-bold">웨이와의 대화</span>
        <button onClick={() => setIsChatOpen(false)} className="text-gray-500 text-xl font-bold">×</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          msg && msg.sender && msg.text ? (
            <div key={idx} className={`flex ${msg.sender === '웨이' ? 'items-start' : 'justify-end'}`}>
              {msg.sender === '웨이' && (
                <img className="w-8 h-8 rounded-full" src="/img/emoji_cat.png" alt="웨이" />
              )}
              <div className={`p-3 rounded-lg ${msg.sender === '웨이' ? 'bg-gray-200' : 'bg-blue-500 text-white'} max-w-[80%] shadow-md ml-2 whitespace-pre-line`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ) : null
        ))}

        {isTyping && (
          <div className="flex items-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-ping"></div>
          </div>
        )}
      </div>

      <div className="flex items-center px-4 py-2 border-t bg-gray-50">
        <textarea
          rows={1}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          className="flex-1 p-2 bg-white border rounded-full resize-none overflow-hidden"
          placeholder="메시지 입력"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          style={{ maxHeight: '72px' }}
        />
        <button onClick={currentQuestionIndex === 3 ? handleFinalMessage : handleSendMessage} className="ml-2">
          ✈️
        </button>
      </div>

      {showSavePopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>기록이 저장되었습니다. 메인 화면으로 돌아갑니다.</p>
            <button onClick={handleReturnToMain} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">메인으로 돌아가기</button>
          </div>
        </div>
      )}
    </div>
  );

  return isChatOpen ? renderChat() : renderTimeline();
};

export default ConflictBoard;
