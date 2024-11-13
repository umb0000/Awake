import { useState, useEffect, useRef } from 'react';
import '../output.css';

const ConflictBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [finalMessage, setFinalMessage] = useState('');
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedMood, setSelectedMood] = useState(null);
  const [showMoodOptions, setShowMoodOptions] = useState(false);
  const [allResponses, setAllResponses] = useState([
    {
      finalMessage: "괜찮아, 네가 한 노력은 충분히 가치 있어",
      userResponses: [
        "네가 해낸 건 별거 아니야, 다들 쉽게 할 수 있는 거야.",
        "그 말이 속상했던 이유: 아무리 노력해도 부족한 느낌이 들어요.",
        "상대방의 의도: 아마 저를 자극하려고 한 말일지도 몰라요."
      ],
      timestamp: "5분 전",
      moodIcon: "😊",
      isExpanded: false,
    },
    {
      finalMessage: "넌 충분히 잘하고 있어, 자신감을 가져!",
      userResponses: [
        "왜 그렇게 게으른 거야?",
        "그 말이 속상했던 이유: 스스로가 게으르다는 생각이 들어요.",
        "상대방의 의도: 제가 더 발전하길 바라서 한 말일 수도 있어요."
      ],
      timestamp: "1일 전",
      moodIcon: "🌈",
      isExpanded: false,
    },
  ]);

  const moodIcons = ["😊", "😌", "🙂", "🌈", "🌟", "👍", "💪", "❤️"];

  const initialMessages = [
    { sender: '웨이', text: `안녕하세요, 저는 웨이입니다. 🐱\n\n오늘 속상한 일이 있으셨나요?\n\n저와 함께 천천히 이야기 나누며\n마음을 정리해보는 건 어때요? 💭` },
    { sender: '웨이', text: `🕊️\n\n질문은 총 3개로 구성되어 있고,\n마지막 답변 후 전체 내용을 요약해 드릴게요. 📝` },
    { sender: '웨이', text: `정리된 내용을 보시고,\n스스로에게 위로의 말을\n건네보는 시간을 가져보세요. 💬` },
    { isSeparator: true },
    { sender: '웨이', text: `첫 번째 질문입니다. 🌱\n\n오늘 가장 속상했던 말은\n무엇인가요? 🤔` }
  ];

  const questions = [
    "두 번째 질문입니다.\n\n그 말이 왜 속상했는지\n말씀해 주실래요? 🥺",
    "마지막 질문입니다.\n\n상대가 그런 말을 한\n이유가 무엇일까요?",
  ];

  useEffect(() => {
    if (isChatOpen) {
      setMessages([]);
      setUserResponses([]);
      setCurrentQuestionIndex(0);
      setFinalMessage('');
      setShowMoodOptions(false);

      initialMessages.forEach((message, index) => {
        setTimeout(() => {
          setMessages((prev) => [...prev, message]);
        }, index * 3000);
      });
    }
  }, [isChatOpen]);

  useEffect(() => {
    if (currentQuestionIndex === questions.length + 1) {
      const summaryMessage = {
        sender: '웨이',
        text: `제가 정리한 내용을 말씀드릴게요. 💡\n\n` +
              `▪️ 속상하게 한 말: "${userResponses[0] || ''}\n"` +
              `▪️ 상처가 된 이유: ${userResponses[1] || ''}\n` +
              `▪️ 상대방의 의도: ${userResponses[2] || ''}\n\n` +
              "이 내용을 바탕으로, 자신에게 위로의 말을 건네보세요. 💬",
      };
      setMessages((prev) => [...prev, summaryMessage]);
    }
  }, [currentQuestionIndex, userResponses]);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      setMessages((prev) => [...prev, { sender: '사용자', text: userMessage }]);
      setUserResponses((prev) => [...prev, userMessage]); 
      setUserMessage('');
      resetTextareaHeight();
      setIsTyping(true);

      setTimeout(() => {
        const nextMessage = getNextBotMessage();
        if (nextMessage) {
          setMessages((prev) => [...prev, nextMessage]);
        }
        setIsTyping(false);
      }, 3500);
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
      setMessages((prev) => [
        ...prev, 
        { sender: '웨이',  text: `멋진 답변이에요. 자신을 다독이는 말이 큰 힘이 될 거예요. 😊\n\n` +
          "이제 감정을 표현할 수 있는 이모티콘을 선택해 주세요.\n이 기록을 저장할게요, 나중에 돌아보며 스스로를 다독이는 데 도움이 될 거예요." }
      ]);
      setIsTyping(false);
      setShowMoodOptions(true);
    }, 2000);
  };

  const selectMood = (moodIcon) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setAllResponses((prev) => [
      {
        finalMessage: finalMessage,
        userResponses: [...userResponses],
        timestamp: timestamp,
        moodIcon: moodIcon,
        isExpanded: false,
      },
      ...prev,
    ]);
    setSelectedMood(moodIcon);
    setShowSavePopup(true);
    setShowMoodOptions(false);
  };

  const handleReturnToMain = () => {
    setShowSavePopup(false);
    setIsChatOpen(false);
    setFinalMessage('');
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const toggleExpandCard = (index) => {
    setAllResponses((prev) =>
      prev.map((response, idx) =>
        idx === index ? { ...response, isExpanded: !response.isExpanded } : response
      )
    );
  };

  const WayMessage = ({ text }) => (
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full bg-[#FEC673] flex items-center justify-center shadow-md font-['Pretendard_Variable']">
        <img
          className="w-10 h-10 rounded-full"
          src="/img/pink_catCrop.png"
          alt="웨이"
        />
      </div>
      <div
        className="p-4 rounded-lg bg-gray-200 shadow-md ml-2"
        style={{
          display: 'inline-block',
          maxWidth: '75%',
          whiteSpace: 'pre-wrap',
          hyphens: 'auto',
          overflowWrap: 'break-word',
        }}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );

  const UserMessage = ({ text }) => (
    <div className="flex justify-end">
      <div
        className="p-4 rounded-lg bg-blue-500 text-white shadow-md ml-2"
        style={{
          display: 'inline-block',
          maxWidth: '75%',
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
          hyphens: 'auto',
        }}
      >
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="relative w-full h-[800px] flex flex-col justify-start items-center bg-white  font-['Pretendard_Variable'] pt-0">
      <div className="sticky top-10 z-10 p-4 bg-[#f7f2fa] flex items-center justify-center shadow-sm border-b fixed px-6">
        <span className="text-[20px] font-bold text-[#4B4B4B]">웨이의 분노 상담소</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 pt-5 bg-gray-50">
        {messages.map((msg, idx) =>
          msg.isSeparator ? (
            <div key={idx} className="flex items-center justify-center my-4">
              <div className="border-t border-gray-300 w-full mx-4"></div>
            </div>
          ) : msg.sender === '웨이' ? (
            <WayMessage key={idx} text={msg.text} />
          ) : (
            <UserMessage key={idx} text={msg.text} />
          )
        )}

        {isTyping && (
          <div className="typing-indicator flex items-center justify-start bg-gray-200 px-3 py-2 rounded-lg max-w-[75%] shadow-md ml-2">
            <div className="dot bg-gray-500 rounded-full w-2 h-2 mx-1 animate-bounce"></div>
            <div className="dot bg-gray-500 rounded-full w-2 h-2 mx-1 animate-bounce delay-75"></div>
            <div className="dot bg-gray-500 rounded-full w-2 h-2 mx-1 animate-bounce delay-150"></div>
          </div>
        )}

        {showMoodOptions && (
          <div className="flex space-x-2 mt-4">
            {moodIcons.map((icon, index) => (
              <span
                key={index}
                onClick={() => selectMood(icon)}
                className={`cursor-pointer text-2xl ${selectedMood === icon ? 'text-blue-500 border-2 border-blue-500 rounded-full p-1' : 'text-gray-500'}`}
              >
                {icon}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center px-4 py-3 bg-white border-t border-gray-200">
        <textarea
          ref={textareaRef}
          rows={1}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          className="flex-1 p-3 bg-gray-100 border rounded-lg resize-none overflow-hidden"
          placeholder="메시지를 입력해 주세요"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          style={{ maxHeight: '80px' }}
        />

        <button
          onClick={currentQuestionIndex === 3 ? handleFinalMessage : handleSendMessage}
          className="ml-2 px-4 py-2 bg-[#FFAD7A] text-white font-semibold rounded-[11px] hover:bg-[#E5946D] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAD7A]"
        >
          보내기
        </button>
      </div>

      {showSavePopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p>기록이 저장되었습니다.<br/>메인 화면으로 돌아갑니다.</p>
            <button onClick={handleReturnToMain} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">메인으로 돌아가기</button>
          </div>
        </div>
      )}
    </div>
  );

  const renderTimeline = () => (
    
    <div className="relative w-full h-[800px] flex flex-col justify-start items-center bg-[#F9F8F6]  font-['Pretendard_Variable'] pt-0">
      <div className="sticky top-0 z-10 p-4 bg-white shadow-md">
        <h1 className="text-center text-[20px] font-bold text-[#4B4B4B]">웨이의 상담 기록</h1>
      </div>
  
      <div className="space-y-6 p-4 mt-10 overflow-y-scroll">
        {allResponses.map((response, index) => (
          <div
            key={index}
            onClick={() => toggleExpandCard(index)}
            className="flex flex-col items-start bg-white p-5 rounded-lg shadow-md border border-gray-200 relative space-y-2 cursor-pointer"
          >
            {index !== allResponses.length - 1 && (
              <div className="absolute left-4 top-full h-6 w-1 bg-gray-300"></div>
            )}
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="mr-2 p-1 rounded-full bg-[#FFAD7A]/20 text-[#D88C65] text-lg">{response.moodIcon}</span>
              <span className="text-gray-400">{response.timestamp}</span>
            </div>
            <h2 className="text-[15px] font-semibold text-[#4B4B4B] leading-relaxed mb-2">
              {response.finalMessage}
            </h2>
            {response.isExpanded && (
              <div className="space-y-2 mt-2">
                <p className="text-[12px] text-gray-500">{response.userResponses[0]}</p>
                <p className="text-[12px] text-gray-500">{response.userResponses[1]}</p>
                <p className="text-[12px] text-gray-500">{response.userResponses[2]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
  
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-[20px] right-[20px] bg-[#FFAD7A] text-white p-4 rounded-full shadow-lg hover:bg-[#E5946D] transition duration-200"
      >
        <img src="/img/pen_icon.png" alt="펜" className="w-[48px] h-[50px] rounded-lg" />
      </button>
    </div>
  );

  return isChatOpen ? renderChat() : renderTimeline();
};

export default ConflictBoard;
