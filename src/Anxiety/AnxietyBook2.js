import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import '../output.css';

const AnxietyBook2 = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Received id:', id); // id 값을 콘솔에 출력
  }, [id]);

  // id를 숫자로 변환
  const numericId = Number(id);
  if (isNaN(numericId)) {
    console.error('Invalid id:', id);
    return <div>유효하지 않은 항목입니다.</div>;
  }

  // 각 id에 맞는 텍스트 설정
  const texts = {
    1: {
      first: "내가 완벽하지 않으면 사람들은 날 싫어할 거야.",
      second: "나는 항상 배우고 성장하는 중이야.\n 모든 사람이 완벽할 필요는 없어.",
    },
    //... (other text entries)
  };

  const text = texts[numericId] || {
    first: "텍스트를 찾을 수 없습니다.",
    second: "잘못된 항목입니다.",
  };

  // 북마크 저장 함수
  const handleSaveBookmark = async () => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    try {
      const response = await fetch('http://your-backend-url/angerbook-post-bookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ worry: text.first, reply: text.second }),
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message); // Display success message
      } else {
        console.error("Failed to save bookmark:", result.detail);
        alert("Failed to save bookmark");
      }
    } catch (error) {
      console.error("Error saving bookmark:", error);
      alert("Error saving bookmark");
    }
  };

  return (
    <div className="relative w-full h-[800px] bg-white overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-start py-10 gap-4">

        {/* First section */}
        <div className="w-[90%] flex items-center justify-center p-4 bg-[#ffcd63] rounded-lg">
          <div className="text-[16px] font-['Pretendard_Variable'] font-bold text-white text-center" style={{ color: '#49454F' }}>
            {text.first.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Second section */}
        <div className="w-[90%] h-[373px] p-4 bg-white rounded-lg flex items-center justify-center" style={{
          background: "radial-gradient(circle at center, #FFFFFF, #F8FEFF 42%, #A4F7FF 100%)"
        }}>
          <div className="text-center text-[#1d1b20] text-xl font-bold font-['Pretendard'] leading-[29px] tracking-tight whitespace-nowrap">
            {text.second.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row items-start justify-between gap-4 w-[90%]">
          <button
            onClick={handleSaveBookmark}
            className="w-[45%] p-4 border-2 border-[#70e9f9] rounded-lg hover:bg-[#70e9f9] hover:text-white transition-all duration-300"
          >
            <div className="text-[14px] font-bold text-[#1d1b20] text-center">
              저장하기
            </div>
          </button>
          <a href="/AnxietyBook" className="w-[45%] p-4 border-2 border-[#70e9f9] rounded-lg hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
            <div className="text-[14px] font-bold text-[#1d1b20] text-center">
              다시 선택
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default AnxietyBook2;
