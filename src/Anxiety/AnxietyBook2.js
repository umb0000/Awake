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
      second: "오늘 할 일을 다 끝내지 못해도 괜찮아.\n중요한 건 내가 최선을 다했다는 거야.\n남은 일은 내일 해도 돼.\n 작은 성취도 의미 있어.",
    },
    2: {
      first: "일찍 못 일어났으니, 오늘 하루는 망했어.",
      second: "일찍 일어나지 못했다고\n하루가 망한 건 아니야.\n아직 시간이 많아. \n할 수 있는 걸 하면 돼.",
    },
    3: {
      first: "마감일을 못 지켰으니, 분명 날 해고시킬 거야.",
      second: "마감일을 놓쳤지만, 해결할 수 있어.\n실수는 누구나 할 수 있는 거야.\n중요한 건 그 후의 대처야.",
    },
    4: {
      first: "친구가 대화 도중 집중을 못 한 건,\n내 이야기가 지루했기 때문일 거야.",
      second: "친구가 집중하지 못한 건 다양한 이유가 있어.\n내 이야기가 지루했다기보단, 친구가 다른\n생각에 빠져 있었을지도 몰라.",
    },
    5: {
      first: "프로젝트 중간에 실수가 있었으니,\n아무리 잘해도 망한 거나 다름없어.",
      second: "실수는 배움의 과정이야.\n실수 하나로 모든 게 망하진 않아.\n더 나아질 기회로 삼으면 돼.",
    },
    6: {
      first: "친구가 내 메시지를 읽지 않아\n분명히 나한테 화가 난 거야.",
      second: "친구가 메시지를 바로 읽지 않은 건\n그저 바빠서일 수 있어.\n즉각적인 반응이 없다고 꼭 화난 건 아니야.",
    },
    7: {
      first: "나는 다른 사람들보다 항상 더 나아야 해.\n 그렇지 않으면 난 뒤처질 거야.",
      second: "다른 사람들과 비교하기보다는\n 내 속도에 맞춰 나아가면 돼.\n 모두가 각자의 속도로 발전해 가고 있어.",
    },
    8: {
      first: "항상 할 일을 완벽히 해내지 못하면,\n 쓸모 없는 사람이나 다름없어.",
      second: "완벽하지 않아도 \n 나는 충분히 가치 있는 사람이야.\n 또, 완벽보다는\n 꾸준히 노력하는 것이 더 중요해. \n그러니 작은 성취도 큰 의미가 있어.",
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