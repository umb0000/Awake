import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
      first: "오늘 계획한 모든 일을 끝내지 않으면,\n내 하루는 완전히 망한 거야.",
      second: "오늘 계획한 모든 일을 다 끝내지 못했다고 해서 하루가 망한 건 아니야. 중요한 건 내가 할 수 있는 만큼 최선을 다했다는 거야. 남은 일은 내일 이어서 하면 돼, 작은 성취도 충분히 의미 있어.",
    },
    2: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    3: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    4: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    5: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    6: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    7: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
    },
    8: {
      first: "집 청소를 며칠 못 했어.",
      second: "나는 너무 게으른 사람이야.\n하지만, 조금씩 나아지고 있어.",
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
          <div className="text-[16px] font-bold text-white text-center">
            {text.first}
          </div>
        </div>

        {/* Second section */}
        <div className="w-[90%] h-[373px] p-4 bg-white rounded-lg flex items-center justify-center" style={{
          background: "radial-gradient(circle at center, #FFFFFF, #F8FEFF 42%, #A4F7FF 100%)",
        }}>
          <div className="text-center text-[#1d1b20] text-xl font-bold leading-8">
            {text.second}
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