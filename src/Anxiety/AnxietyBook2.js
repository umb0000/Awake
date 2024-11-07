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
      second: "나는 항상 배우고 성장하는 중이야. 모든 사람이 완벽할 필요는 없어.",
    },
    2: {
      first: "다른 사람들보다 뒤쳐지고 있는 것 같아.",
      second: "내 속도대로 가는 거야. 내 방식으로 충분히 잘하고 있어.",
    },
    3: {
      first: "과거의 실수 때문에 난 앞으로도 실패할 거야.",
      second: "과거는 이미 지나갔고, 나는 매일 더 나아지고 있어.",
    },
    4: {
      first: "내가 한 일은 항상 부족하고 미완성이야.",
      second: "나는 최선을 다했고, 그걸로도 충분해.",
    },
    5: {
      first: "이 정도 성취로는 아무 의미가 없어.",
      second: "나는 작은 성취도 인정하고 즐거워해.",
    },
    6: {
      first: "실수하면 다른 사람들이 나를 무시할 거야.",
      second: "실수해도 괜찮아, 배우는 과정이니까.",
    },
    7: {
      first: "왜 나만 자꾸 뒤처지는 것 같지?",
      second: "내 속도대로 가는 거야. 내 방식으로 충분히 잘하고 있어.",
    },
    8: {
      first: "난 항상 이런 실수를 반복해. 앞으로도 나아질 수 없을 거야.",
      second: "과거는 이미 지나갔고, 나는 매일 더 나아지고 있어.",
    },
    9: {
      first: "난 왜 항상 이것밖에 못 할까?",
      second: "나는 최선을 다했고, 그걸로도 충분해.",
    },
  };
  
  
  const text = texts[numericId] || {
    first: "텍스트를 찾을 수 없습니다.",
    second: "잘못된 항목입니다.",
  };

  return (
    <div className="relative w-full h-[800px] bg-white overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-4">

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
          <button className="w-[45%] p-4 border-2 border-[#70e9f9] rounded-lg hover:bg-[#70e9f9] hover:text-white transition-all duration-300">
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