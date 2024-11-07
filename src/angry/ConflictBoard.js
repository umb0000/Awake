import { useState, useEffect, useRef } from 'react';
import '../output.css';
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

const ConflictBoard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [finalMessage, setFinalMessage] = useState('');
  const [showSavePopup, setShowSavePopup] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const [imageChoices, setImageChoices] = useState([]);
  const [showImageAndMoodOptions, setShowImageAndMoodOptions] = useState(false);
  const [allResponses, setAllResponses] = useState([
    {
      finalMessage: "괜찮아, 네가 한 노력은 충분히 가치 있어",
      userResponses: ["네가 해낸 건 별거 아니야, 다들 쉽게 할 수 있는 거야."],
      timestamp: "5분 전",
      moodIcon: "😊",
      image: "/img/c.jpg"
    },
    {
      finalMessage: "넌 충분히 잘하고 있어, 자신감을 가져!",
      userResponses: ["왜 그렇게 게으른 거야? 뭔가 제대로 해낸 게 있어?"],
      timestamp: "1일 전",
      moodIcon: "🌈",
      image: "/img/d.jpg"
    },
  ]);

  const moodIcons = ["😊", "😌", "🙂", "🌈", "☀️", "🌟", "👍", "💪", "🤘", "❤️"];
  const imageOptions = [
    "/img/a.jpg", "/img/b.jpg", "/img/c.jpg", "/img/d.jpg", "/img/e.jpg",
    "/img/f.jpg", "/img/g.jpg", "/img/h.jpg", "/img/i.jpg", "/img/j.jpg",
    "/img/k.jpg", "/img/l.jpg", "/img/m.jpg", "/img/n.jpg", "/img/o.jpg",
    "/img/p.jpg", "/img/q.jpg", "/img/r.jpg", "/img/t.jpg", "/img/u.jpg",
    "/img/v.jpg", "/img/x.jpg"
  ];

  const initialMessages = [
    { 
      sender: '웨이', 
      text: `안녕하세요, 저는 웨이입니다. 🐱\n\n오늘 속상한 일이 있으셨나요?\n\n저와 함께 천천히 이야기 나누며\n마음을 정리해보는 건 어때요? 💫`
    },
    {
      sender: '웨이',
      text: `제가 차근차근 도와드릴게요. 🧓\n\n질문은 총 3개로 구성되어 있고,\n마지막 답변 후엔 전체 내용을 요약해 보여드릴게요. 📝`
    },
    {
      sender: '웨이',
      text: `정리된 내용을 보시고,\n스스로에게 위로의 말을\n건네보는 시간을 가져보세요. 💬`
    },
    { 
      isSeparator: true 
    },
    { 
      sender: '웨이', 
      text: `첫 번째 질문입니다. 🌱\n\n오늘 가장 속상했던 말은\n무엇인가요? 🤔`
    }
  ];

  const questions = [
    "두 번째 질문입니다.\n\n그 말이 왜 속상했는지\n말씀해 주실래요? 🥺",
    "마지막 질문입니다.\n\n상대가 그런 말을 한\n이유가 무엇일까요?",
  ];

  const getRandomImages = () => {
    const shuffled = [...imageOptions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  useEffect(() => {
    if (isChatOpen) {
      setMessages([]);
      setUserResponses([]);
      setCurrentQuestionIndex(0);
      setFinalMessage('');
      setShowImageAndMoodOptions(false);

      const sendMessagesSequentially = async () => {
        for (let index = 0; index < initialMessages.length; index++) {
          await new Promise((resolve) => setTimeout(resolve, 3000));
          setMessages((prev) => [...prev, initialMessages[index]]);
          scrollToBottom();
        }
      };
      sendMessagesSequentially();
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
      scrollToBottom();
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
        scrollToBottom();
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
      setMessages((prev) => [
        ...prev, 
        { sender: '웨이',  text: `멋진 답변이에요. 자신을 다독이는 말이 큰 힘이 될 거예요. 😊\n\n` +
          `이제 감정을 표현할 수 있는 사진과 이모티콘을 선택해 주세요.\n이 기록을 저장할게요, 나중에 돌아보며 스스로를 다독이는 데 도움이 될 거예요.` }
      ]);
      setIsTyping(false);
      setImageChoices(getRandomImages());
      setShowImageAndMoodOptions(true);
      scrollToBottom();
    }, 2000);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleReturnToMain = () => {
    setShowSavePopup(false);
    setIsChatOpen(false);
    setFinalMessage('');
  };

  const renderTimeline = () => (
    <div className="relative w-full min-h-screen bg-[#F5F3EF] overflow-y-scroll p-4 font-['Pretendard_Variable']">
      <div className="sticky top-0 z-10 bg-white py-3 shadow-md rounded-tl-[20px] rounded-tr-[20px] border-b border-[#FFAD7A]">
        <h1 className="text-center text-xl font-bold text-[#FFAD7A] font-['Pretendard_Variable']">웨이의 분노 진정소</h1>
      </div>

      <div className="space-y-6 mt-6">
        {allResponses.map((response, index) => (
          <div key={index} className="flex flex-col items-start space-y-3 bg-white p-5 rounded-lg shadow-md border border-gray-200 relative">
            {index !== allResponses.length - 1 && (
              <div className="absolute left-4 top-full h-6 w-1 bg-gray-300"></div>
            )}
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <span className="mr-2 p-1 rounded-full bg-[#FFAD7A]/20 text-[#D88C65] text-lg">{response.moodIcon}</span>
              <span className="text-gray-400">{response.timestamp}</span>
            </div>
            <h2 className="text-lg font-semibold text-[#4B4B4B] leading-relaxed mb-2 font-['Pretendard_Variable']">{response.finalMessage}</h2>
            {response.image && (
              <div className="mb-3 rounded-lg overflow-hidden w-full">
                <img 
                  src={response.image} 
                  alt="선택한 사진" 
                  className="object-cover w-full max-h-[300px] rounded-lg"
                />
              </div>
            )}
            <p className="text-xs text-gray-500 mt-2 whitespace-pre-wrap">
              {response.userResponses[0] || ''}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-[20px] right-[20px] bg-[#FFAD7A] text-white p-4 rounded-full shadow-lg hover:bg-[#E5946D] transition duration-200"
      >
        <img 
          src="/img/pen_icon.png" 
          alt="펜" 
          className="w-[22px] h-[24px] rounded-lg"
        />
      </button>
    </div>
  );

  const renderChat = () => (
    <div className="w-full min-h-screen bg-white flex flex-col font-['Pretendard_Variable']">
      <div className="w-full h-[60px] bg-[#f7f2fa] flex items-center justify-between px-6 shadow-sm border-b fixed top-0 z-10">
        <span className="text-lg font-bold">웨이와의 대화</span>
        <button onClick={() => setIsChatOpen(false)} className="text-gray-500 text-xl font-bold">×</button>
      </div>
  
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50 mt-[60px]">
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

        <div ref={messagesEndRef} />
      </div>
  
      <div className="flex items-center px-4 py-3 bg-white border-t border-gray-200 fixed bottom-0 w-full">
        <textarea
          ref={textareaRef}
          rows={1}
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          className="flex-1 p-3 bg-gray-100 border rounded-lg resize-none overflow-hidden"
          placeholder={isTyping ? "지금은 메세지 입력이 불가합니다. 기다려주세요." : "메시지를 입력하세요.."}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          style={{ maxHeight: '80px' }}
          disabled={isTyping}
        />

        <button 
          onClick={currentQuestionIndex === 3 ? handleFinalMessage : handleSendMessage} 
          className="ml-2 px-4 py-2 bg-[#FFAD7A] text-white font-semibold rounded-[11px] hover:bg-[#E5946D] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAD7A]"
          disabled={isTyping}
        >
          보내기
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

const WayMessage = ({ text }) => {
  useEffect(() => {
    const app = document.getElementById("way-message");
    const stringSplitter = (string) => {
      const splitter = new GraphemeSplitter();
      return splitter.splitGraphemes(string);
    };

    if (app) {
      const typewriter = new Typewriter(app, {
        loop: false,
        delay: 75,
        stringSplitter,
      });

      typewriter.typeString(text).start();
    }
  }, [text]);

  return (
    <div className="flex items-start">
      <div className="w-12 h-12 rounded-full bg-[#FFAD7A] flex items-center justify-center shadow-md font-['Pretendard_Variable']">
        <img
          className="w-10 h-10 rounded-full"
          src="/img/cat_way_crop2.png"
          alt="웨이"
        />
      </div>
      <div
        id="way-message"
        className="typewriter-text p-4 rounded-lg bg-gray-200 shadow-md ml-2"
        style={{
          display: 'inline-block',
          maxWidth: '75%',
          whiteSpace: 'pre-wrap',
          hyphens: 'auto',
          overflowWrap: 'break-word',
        }}
      />
    </div>
  );
};

const UserMessage = ({ text }) => (
  <div className="flex justify-end">
    <div
      className="p-4 rounded-lg bg-blue-500 text-white shadow-md ml-2"
      style={{
        display: 'inline-block',
        maxWidth: '75%',
        whiteSpace: 'pre-wrap',
        hyphens: 'auto',
        overflowWrap: 'break-word',
      }}
    >
      {text}
    </div>
  </div>
);
